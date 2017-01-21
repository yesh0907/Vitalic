import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/vitalic');

const db = mongoose.connection;

module.exports = db;