from . import jade
import numpy as np
import json

def parse_RGB(message):
	message = json.loads(message.content["text"])
	bfWindow = message["bfWindow"]
	X = np.ndarray(shape = (3, bfWindow), buffer=np.array(message["values"]))
	X = normalize_matrix(X)
	ICA = jade.main(X)
	return json.dumps(parse_ICA_results(ICA, bfWindow))

def parse_ICA_results(ICA, window):
	signals = {}
	signals["type"] = "ICA"

	signals["bfWindow"] = window

	one = np.squeeze(np.asarray(ICA[:, 0])).tolist()
	two = np.squeeze(np.asarray(ICA[:, 1])).tolist()
	three = np.squeeze(np.asarray(ICA[:, 2])).tolist()

	one = (np.hamming(len(one)) * one)
	two = (np.hamming(len(two)) * two)
	three = (np.hamming(len(three)) * three)

	one = np.absolute(np.square(np.fft.irfft(one))).astype(float).tolist()
	two = np.absolute(np.square(np.fft.irfft(two))).astype(float).tolist()
	three = np.absolute(np.square(np.fft.irfft(three))).astype(float).tolist()

	power_ratio = [0, 0, 0]
	power_ratio[0] = np.sum(one)/np.amax(one)
	power_ratio[1] = np.sum(two)/np.amax(two)
	power_ratio[2] = np.sum(three)/np.amax(three)

	if np.argmax(power_ratio) == 0:
		signals["values"] = one
	elif np.argmax(power_ratio) == 1:
		signals["values"] = two
	else:
		signals["values"] = three

	return signals

def normalize_matrix(matrix):
	for row in matrix:
		avg_row = np.mean(row)
		std_dev = np.std(row)

		for i in range(len(row)):
			row[i] = ((row[i] - avg_row)/std_dev)

	return matrix

def normalize_array(array):
	average_of_array = np.mean(array)
	std_dev = np.std(array)

	for i in range(len(array)):
		array[i] = ((array[i] - average_of_array)/std_dev)

	return array