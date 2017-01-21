function isHRHealthy(HR, age) {
	if (age < 11) {
		if (HR < 70) {
			return "LOW";
		}
		else if (HR > 160) {
			return "HIGH";
		}
		else {
			return "NORMAL";
		}
	}
	else {
		if (HR < 60) {
			return "EXCELLENT";
		}
		else if (HR <= 100) {
			return "NORMAL";
		}
		else {
			return "HIGH";
		}
	}
}

function calculateBP(HR, gender, age) {
	var R = 18.5;
	var Q = 0;
	if(gender === "MALE") {
		Q = 5.0;
	} else {
		Q = 4.5;
	}
	var ejectionTIme = 364.5 - (1.23 * HR);
	var bodySurfaceArea = 0.007184*(Math.pow(137,0.425))*(Math.pow(66,0.725));
	var strokeVolume = -6.6 + 0.25*(ejectionTime-35) - 0.62*HR + 40.4*bodySurfaceArea - 0.51*age;
    var pulsePressure = Math.abs(strokeVolume / ((0.013*137 - 0.007*age-0.004*HR)+1.307));
    var meanPulsePressure = Q*R;

    var systolicPressure = Math.round(meanPulsePressure + 4.5/3*pulsePressure);
    var diastolicPressure = Math.round(meanPulsePressure - pulsePressure/3);

    var bloodPressure = {};
    bloodPressure["Systolic Pressure"] = systolicPressure;
    bloodPressure["Diastolic Pressure"] = diastolicPressure;

    return bloodPressure;
}

function isBPHealthy(bloodPressure) {
	var systolicPressure = bloodPressure["Systolic Pressure"];
    var diastolicPressure = bloodPressure["Diastolic Pressure"];

    if (systolicPressure < 90 || diastolicPressure < 60) {
   		return "LOW";
    }
    else if (systolicPressure > 120 || diastolicPressure > 80) {
   		return "HIGH";
   	}
   	else {
   		return "NORMAL";
   	}
}

function checkChol(bloodPressureHealth, heartRateHealth) {
	if (bloodPressureHealth === "HIGH" && heartRateHealth !== "HIGH") {
		return "HIGH";
	}
	return "NORMAL";
}

function checkStress(bloodPressureHealth) {
	return "HIGH" === bloodPressureHealth ? "HIGH":"NORMAL";
}

function calculateBreathingRate(age) {
	if (age < 6) {
		return (Math.floor(Math.random() * 31) + 20);
	}
	else if (age < 11) {
		return (Math.floor(Math.random() * 16) + 15);
	}
	else if (age < 15) {
		return (Math.floor(Math.random() * 9) + 12);
	}
	else if (age <= 20) {
		return (Math.floor(Math.random() * 19) + 12);
	}
	else {
		return (Math.floor(Math.random() * 5) + 16);
	}
}