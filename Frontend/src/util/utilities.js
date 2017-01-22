export default {
  isHRHealthy,
  calculateBP,
  isBPHealthy,
  checkChol,
  checkStress,
  calculateBreathingRate,
  checkFever,
  checkMood,
  checkBodyTemp
}

function isHRHealthy (HR, age) {
  if (age < 11) {
    if (HR < 70) return 'LOW'
    else if (HR > 160) return 'HIGH'
    else return 'NORMAL'
  } else {
    if (HR < 60) return 'EXCELLENT'
    else if (HR <= 100) return 'NORMAL'
    else return 'HIGH'
  }
}

function calculateBP (HR, gender, age) {
  let R = 18.5
  let Q = gender === 'MALE' ? 5.0 : 4.5

  let ejectionTime = 364.5 - (1.23 * HR)
  let bodySurfaceArea = 0.007184 * (Math.pow(137, 0.425)) * (Math.pow(66, 0.725))
  let strokeVolume = -6.6 + 0.25 * (ejectionTime - 35) - 0.62 * HR + 40.4 * bodySurfaceArea - 0.51 * age
  let pulsePressure = Math.abs(strokeVolume / ((0.013 * 137 - 0.007 * age - 0.004 * HR) + 1.307))
  let meanPulsePressure = Q * R

  let systolicPressure = Math.round(meanPulsePressure + pulsePressure / 3)
  let diastolicPressure = Math.round(meanPulsePressure - pulsePressure / 4)

  return {
    systolicPressure,
    diastolicPressure
  }
}

function isBPHealthy (bloodPressure) {
  let systolicPressure = bloodPressure.systolicPressure
  let diastolicPressure = bloodPressure.diastolicPressure

  if (systolicPressure < 90 || diastolicPressure < 60) return 'LOW'
  else if (systolicPressure > 120 || diastolicPressure > 80) return 'HIGH'
  else return 'NORMAL'
}

function checkChol (bloodPressureHealth, heartRateHealth) {
  return (bloodPressureHealth === 'HIGH' && heartRateHealth !== 'HIGH') ? 'NORMAL' : 'NORMAL'
}

function checkStress (bloodPressureHealth) {
  return bloodPressureHealth === 'HIGH' ? 'HIGH' : 'NORMAL'
}

function calculateBreathingRate (age) {
  if (age < 6) return (Math.floor(Math.random() * 31) + 20)
  else if (age < 11) return (Math.floor(Math.random() * 16) + 15)
  else if (age < 15) return (Math.floor(Math.random() * 9) + 12)
  else return (Math.floor(Math.random() * 5) + 16)
}

function checkBodyTemp (diastolicPressure, age, gender, HR) {
  const R = 18.5
  const Q = gender === 'MALE' ? 5.0 : 4.5
  const meanPulsePressure = Q * R

  const pulsePressure = Math.abs(3.0 * (meanPulsePressure - diastolicPressure))

  const derivedHR = (124.75 - .51*age - pulsePressure*(3.088-.007*age)) / ((-1.0*pulsePressure)*.004 + .9275)

  if (derivedHR < (HR * 0.9)) return "HIGH"
  else if (derivedHR > (HR * 1.1)) return "LOW"
  else return "NORMAL"
}

function checkFever (diastolicPressure, age, gender, HR) {
  var bodyTemp = checkBodyTemp(diastolicPressure, age, gender, HR)
  return bodyTemp === "HIGH" ? "YES" : "NO"
}

function checkMood (diastolicPressure, age, gender, HR) {
  const bodyTemp = checkBodyTemp(diastolicPressure, age, gender, HR)
  if (bodyTemp === "HIGH") return "POSITIVE"
  else if (bodyTemp === "LOW") return "NEGATIVE"
  else return "NEUTRAL"
}