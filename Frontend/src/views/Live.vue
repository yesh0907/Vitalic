<template>

<div id="main">
  <h2 class="heartrate">Taking Video to calculate heartrate</h2>
  <canvas id="canvas"></canvas>
  <canvas id="canvasOverlay" class="video"></canvas>
</div>

</template>

<script>
import headtrackr from '../util/headtrackr.js'
import mathmatical from '../util/mathmatical.js'

import $ from 'jquery'

const mean = mathmatical.mean
const frequencyExtract = mathmatical.frequencyExtract

let video, canvas, context, htracker, spectrum
let dataSocket, dataSend, renderTimer
let width = 380
let height = 285
let fps = 15
let heartrate = 60
let bufferWindow = 512
let sendingData = false
let red = []
let green = []
let blue = []
let heartrateAverage = []
let hrAvg = 65

function initVideoStream () {
  video = document.createElement('video')
  video.setAttribute('width', width)
  video.setAttribute('height', height)

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true,
      audio: false
    }, function (stream) {
      if (video.mozSrcObject !== undefined) { // for Firefox
        video.mozSrcObject = stream
      } else {
        video.src = window.URL.createObjectURL(stream)
      }
    }, function (error) {
      console.log('something is wrong with the webcam!', error)
    })
  }
}

function initCanvas () {
  canvas = document.getElementById('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  context = canvas.getContext('2d')
  video.play()
}

function headtrack () {
  htracker = new headtrackr.Tracker({detectionInterval: 1000 / fps})
  htracker.init(video, canvas, context)
  htracker.start()

  document.addEventListener('facetrackingEvent', greenRect)
}

function greenRect (event) {
  let sx, sy, sw, sh, forehead
  let greenSum = 0
  let redSum = 0
  let blueSum = 0

  sx = event.x + (-(event.width / 5)) + 20 >> 0
  sy = event.y + (-(event.height / 3)) + 10 >> 0
  sw = (event.width / 5) >> 0
  sh = (event.height / 10) >> 0

  if (event.detection === 'CS') {
    forehead = context.getImageData(sx, sy, sw, sh)

    for (let i = 0; i < forehead.data.length; i += 4) {
        // ** for reference: **
        // var red = forehead.data[i];
        // var green = forehead.data[i+1];
        // var blue = forehead.data[i+2];
        // var alpha = forehead.data[i+3];

        //  ** for debugging: puts a green video image on screen **
        // forehead.data[i] = 0;
        // forehead.data[i + 1] = forehead.data[i]
        // forehead.data[i + 2] = 0;

      redSum += forehead.data[i]
      greenSum += forehead.data[i + 1]
      blueSum += forehead.data[i + 2]
    }

    let redAverage = redSum / (forehead.data.length / 4)
    let greenAverage = greenSum / (forehead.data.length / 4)
    let blueAverage = blueSum / (forehead.data.length / 4)

    // ** FOR RGB CHANNELS & ICA **
    if (green.length < bufferWindow) {
      red.push(redAverage)
      green.push(greenAverage)
      blue.push(blueAverage)

      if (green.length > bufferWindow / 8) {
        sendingData = true
      }
    } else {
      red.push(redAverage)
      red.shift()
      green.push(greenAverage)
      green.shift()
      blue.push(blueAverage)
      blue.shift()
    }
  }
}

function cardiac (array, bfWindow) {
  spectrum = array

  let freqs = frequencyExtract(spectrum, fps)
  let freq = freqs.freqInHertz
  heartrate = freq * 60

  if (heartrateAverage.length < 3) {
    heartrateAverage.push(heartrate)
    hrAvg = heartrate
  } else {
    heartrateAverage.push(heartrate)
    heartrateAverage.shift()
    hrAvg = mean(heartrateAverage)
  }
  $('.heartrate').text('Heartrate: ' + Math.round(hrAvg))
}

function initWebSocket () {
  /* eslint-disable no-undef */
  dataSocket = new WebSocket('ws://localhost:8888/echo')

  dataSocket.onopen = () => {
    console.log('websocket open')
  }

  dataSocket.onmessage = (e) => {
    let data = JSON.parse(e.data)

    if (data.type === 'ICA') {
      cardiac(data.values, data.bfWindow)
    }
  }

  dataSocket.onclose = () => {
    console.log('closed')
  }
}

function sendData (data) {
  dataSocket.send(data)
}

export default {
  mounted () {
    initVideoStream()
    initCanvas()
    initWebSocket()

    dataSend = setInterval(function () {
      if (sendingData) {
        sendData(JSON.stringify({ values: [red, green, blue], bfWindow: green.length }))
      }
    }, Math.round(1000))

    renderTimer = setInterval(function () {
      context.drawImage(video, 0, 0, width, height)
    }, Math.round(1000 / fps))

    headtrack()
  },
  beforeDestroy () {
    clearInterval(dataSend)
    clearInterval(renderTimer)
  }
}

</script>