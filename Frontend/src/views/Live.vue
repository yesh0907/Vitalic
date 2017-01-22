<template>
<div class="container">
  <br>
  <br>
  <div class="main card">

    <canvas id="canvas"></canvas>
    <br>
    <el-row type="flex" align="middle" justify="center" class="row">
      <el-col :span="10">
        <el-button @click="toggleCap">{{record ? 'Stop' : 'Start'}}</el-button>
      </el-col>
      <el-col :span="14">
        <h2 class="heartrate">{{(Math.floor(time/60) < 10 ? '0'+Math.floor(time/60) : (Math.floor(time/60)))+':'+(time%60 < 10 ? '0'+time%60 : time%60)}}</h2>
      </el-col>
    </el-row>
  </div>
</div>

</template>

<script>
import { Loading } from 'element-ui'
import headtrackr from '../util/headtrackr.js'
import mathmatical from '../util/mathmatical.js'
import utilities from '../util/utilities.js'

// import $ from 'jquery'
// import _ from 'underscore'

// const mean = mathmatical.mean
const frequencyExtract = mathmatical.frequencyExtract

let video, canvas, context, htracker, spectrum
let dataSocket, dataSend, renderTimer
let width = 355
let height = width * 0.75
let fps = 60
let heartrate = 60
let bufferWindow = 512
let sendingData = false
let red = []
let green = []
let blue = []
let allHeartRates = []

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
  context = canvas.getContext('2d')

  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
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
  console.log('HR:', heartrate)

  allHeartRates.push(heartrate)
}

function parseData () {
  // Recrod Object
  let record = {}

  console.log(allHeartRates)

  let minDiff = 1000000.0
  let hr = 0
  for (let i = 1; i < (allHeartRates.length - 1); i++) {
    let avgDiff = ((allHeartRates[i] - allHeartRates[i - 1]) + (allHeartRates[i + 1] - allHeartRates[i])) / 2
    if (avgDiff < minDiff) {
      minDiff = avgDiff
      hr = allHeartRates[i]
    }
  }
  console.log(hr)
<<<<<<< HEAD
=======

>>>>>>> origin/master
  record['heartRate'] = {}
  record['heartRate']['value'] = hr
  record['heartRate']['health'] = utilities.isHRHealthy(hr, 16)

  // Blood Pressure
  record['bloodPressure'] = utilities.calculateBP(hr, 'MALE', 16)
  record['bloodPressure']['health'] = utilities.isBPHealthy(record['bloodPressure'])

  // Cholesterol
  record['cholesterol'] = utilities.checkChol(record['bloodPressure']['health'], record['heartRate']['health'])

  // Stress
  record['stress'] = utilities.checkStress(record['bloodPressure']['health'])

  // Breathing Rate
  record['breathingRate'] = utilities.calculateBreathingRate(16)

  // Fever
  record['fever'] = utilities.checkFever(record['bloodPressure']['diastolicPressure'], 16, 'MALE', hr)

  // Mood
  record['mood'] = utilities.checkMood(record['bloodPressure']['diastolicPressure'], 16, 'MALE', hr)

  return record
}

function initWebSocket () {
  /* eslint-disable no-undef */
  dataSocket = new WebSocket('ws://api.vitalic.io/echo')

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
  data () {
    return {
      record: false,
      time: 0,
      countdown: null,
      image: new Image(),
      loading: null
    }
  },
  mounted () {
    this.image.src = '/static/img/face.png'
    this.image.onlaod = () => { console.log('loaded') }
    initVideoStream()
    initCanvas()
    initWebSocket()

    setTimeout(function () {
      htracker.stop()
      video.pause()
      clearInterval(this.countdown)
      this.time = 0
      sendingData = false
    }.bind(this), 300)

    dataSend = setInterval(function () {
      if (sendingData) {
        sendData(JSON.stringify({ values: [red, green, blue], bfWindow: green.length }))
      }
    }, Math.round(1000))

    renderTimer = setInterval(function () {
      if (this.record) {
        context.drawImage(video, 0, 0, width, height)
        if (this.image) {
          context.drawImage(this.image, (width - 150) / 2, (height - 164.2) / 2, 150, 164.2)
        }
      }
    }.bind(this), Math.round(1000 / fps))

    headtrack()

    this.countdown = setInterval(function () {
      this.time++
    }.bind(this), 1000)
  },
  beforeDestroy () {
    clearInterval(dataSend)
    clearInterval(renderTimer)
    clearInterval(this.countdown)
  },
  methods: {
    toggleCap () {
      if (htracker.status !== 'stopped') {
        htracker.stop()
        video.pause()
        sendingData = false
        parseData()
        this.$store.dispatch('newRecord', parseData())
        .then((result) => {
          console.log(result)
          let data = result['data']
          this.$store.commit('setRecord', data)
          this.loading.close()
        })
        .catch((e) => {
          console.log(e)
          this.loading.close()
        })
        clearInterval(this.countdown)
        this.time = 0
        this.loading = Loading.service({
          fullscreen: true,
          lock: true,
          customClass: 'loading'
        })
      } else {
        htracker.start()
        video.play()
        sendingData = true
        this.countdown = setInterval(function () {
          this.time++
        }.bind(this), 1000)
      }
      setTimeout(function () {
        this.record = htracker.status !== 'stopped'
        console.log(htracker.status)
      }.bind(this), 300)
    }
  }
}

</script>

<style scoped>

.main {

  display: flex;
  /*justify-content: center;*/
  align-items: center;
  flex-direction: column;
  background-color: white;
  max-width: 355px;
  margin: auto;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #ffffff;

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card>.content {
    padding: 2px 16px;
}

.card>.title {
  text-align: left;
}

body {
  height: 100vh;
}

.row {
width: 100%;
}


</style>


<style>
.loading>.el-loading-spinner>* {
  display: none;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.loading>.el-loading-spinner {
    content: '';
    position: relative;
    width: 100px;
    height: 90px;
    transition: 2s all;
    animation: heartscale 1s infinite;
    margin: auto;
    top: 42%;
}
.loading>.el-loading-spinner:before,
.loading>.el-loading-spinner:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #e74c3c;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
       -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
         -o-transform-origin: 0 100%;
            transform-origin: 0 100%;
}
.loading>.el-loading-spinner:after {
    left: 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
       -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
         -o-transform-origin: 100% 100%;
            transform-origin :100% 100%;
}

.loading:after {
  content: "Processing video";
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  margin-top: 0%;

}

/* .heart.pulse {
  animation: heartscale 1s infinite;
} */
@keyframes heartscale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.97);
  }
}
</style>
