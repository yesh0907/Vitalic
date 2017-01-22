import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now },
	heartRate: {},
	mood: String,
	fever: String,
	bloodPressure: {},
	stress: String,
	breathingRate: Number,
	cholesterol: String
});

module.exports = mongoose.model('Record', RecordSchema);