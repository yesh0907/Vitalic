import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	profile_pic: String,
	age: Number,
	gender: String,
	records: [
		{type: mongoose.Schema.Types.ObjectId, ref: 'Record'}
	]
});

module.exports = mongoose.model('User', UserSchema);