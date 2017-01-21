import _ from 'underscore'

export default {
  mean,
  frequencyExtract,
  filterOutliers
}

function mean (array) {
  let sum = array.reduce((a, b) => { return a + b })
  return sum / array.length
}

function frequencyExtract (fftArray, framerate) {
  let val, n, d, N
  let p1 = []
  let p2 = []
  let results = []
  let freqs = []

  n = fftArray.length
  d = 1.0 / framerate

  val = 1.0 / (n * d)
  N = ((n - 1) / 2 + 1) >> 0
  for (let i = 0; i < N; i++) p1.push(i)
    for (let i = (-(n / 2) >> 0); i < 0; i++) p2.push(i)
      results = p1.concat(p2)
    freqs = results.map(i => i * val)

    return filterFreq(fftArray, freqs, framerate)
  }

  function filterFreq (fftArray, freqs, framerate) {
    let filteredFFT = []
    let filteredFreqBin = []

    let freqObj = _.object(freqs, fftArray)
    for (let freq in freqObj) {
      if ((freq > 0.80) && (freq < 3)) {
        filteredFFT.push(freqObj[freq])
        filteredFreqBin.push((freq) / 1)
      }
    }
    let normalizedFreqs = filteredFFT.map((i) => Math.pow(Math.abs(i), 2))
    let idx = _.indexOf(normalizedFreqs, _.max(normalizedFreqs))
    let freqInHertz = filteredFreqBin[idx]

    freqs = {normalizedFreqs, filteredFreqBin, freqInHertz}
    return freqs
  }

  function filterOutliers (someArray) {  
    var values = someArray

    values.sort( function (a, b) {
      return a - b
    })
  
    var q1 = values[Math.floor((values.length / 4))]
    // Likewise for q3. 
    var q3 = values[Math.ceil((values.length * (3 / 4)))]
    var iqr = q3 - q1

    // Then find min and max values
    var maxValue = q3 + iqr*1.5
    var minValue = q1 - iqr*1.5

    // Then filter anything beyond or beneath these values.
    var filteredValues = values.filter(function (x) {
      return (x < maxValue) && (x > minValue)
    })

    // Then return
    return filteredValues
  }