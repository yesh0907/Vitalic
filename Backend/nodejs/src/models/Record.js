import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now },
	heartRate: Number,
	mood: String,
	bloodPressure: {},
	stressLevel: String,
	breathingRate: Number,
	cholesterolLevel: String,
	bodyTemperature: String
});

module.exports = mongoose.model('Record', RecordSchema);