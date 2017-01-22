require('babel-polyfill');

import express from 'express';
import mongoose from 'mongoose';
import unirest from 'unirest';

import bcrytp from 'bcrypt-nodejs';

mongoose.Promise = global.Promise;

import mongodb from '../config/monogodb';
import User from '../models/User';
import Record from '../models/Record';

const router = express.Router();

module.exports = (passport) => {
	// Index
	router.get('/', (req, res) => {
		res.send("Piss off m8!");
	});

	// Signup
	router.post('/signup', (req, res, next) => {
		passport.authenticate('local-signup', (err, user, info) => {
			if (err) { return next(err); }
			if (!user) { 
				let json = {
					'success': "false",
					'reason': info
				}
				res.json(json); 
				return;
			}
			// Login means sigup...
			req.logIn(user, (err) => {
				if (err) { return next(err); }
				let data = {
					success: "true"
				}
				return res.json(data);
			});
		})(req, res, next);
	});

	// Login
	router.post('/login', (req, res, next) => {
		passport.authenticate('local-login', (err, user, info) => {
			if (err) { 
				let json = {
					"success": false,
					"reason": info
				}
				return res.json(json);
			}
			if (!user) { 
				let json = {
					"success": false,
					"reason": info
				}
				return res.json(json); 
			}
			// Login means login...
			req.logIn(user, (err) => {
				if (err) { return next(err); }
				let data = {
					"success": "true"
				}
				return res.json(data);
			});
		})(req, res, next);
	});

	// Get Age and Gender info
	router.post('/facerec', (req, res) => {
		let image = req.body.image;

		unirest.get("https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=gender%2Cage&url="+image)
		.header("X-Mashape-Key", "wthPhKTOL6msh17VfYmDIeirS7mBp1Ehbx1jsn6fYn0zHNZNjt")
		.header("Accept", "application/json")
		.end(function (result) {
			const attr = result.body['face'][0]['attribute'];
			res.json({ 'age': attr['age'], 'gener': attr['gender'] });
		});
	});

	// Clear all vals in DB
	router.post('/record/delete', (req, res) => {
		const email = req.body.email;

		if (email) {
			Record.remove({});
			res.json({ 'success': 'true' })
		}
		else {
			res.json({ success: 'false', reason: 'Missing Credentials' });
			return;
		}
	})

	// Store Data in DB
	router.post('/records/new', (req, res) => {
		const email = req.body.email;

		if (email) {
			let bloodPressure = {};
			bloodPressure['sys'] = req.body.sysBloodPressure;
			bloodPressure['dia'] = req.body.diaBloodPressure;
			bloodPressure['health'] = req.body.bloodPressureHealth;
			let heartRate = {};
			heartRate['value'] = req.body.heartRate;
			heartRate['health'] = req.body.heartRateHealth;

			const mood = req.body.mood;
			const stress = req.body.stress;
			const breathingRate = req.body.breathingRate;
			const cholesterol = req.body.cholesterol;
			const fever = req.body.fever;

			const newRecord = new Record({
				heartRate,
				mood,
			 	bloodPressure,
				stress,
				breathingRate,
				cholesterol,
				fever
			});
			newRecord.save((err, record) => {
				if (err) {
					res.json({ success: 'false', reason: 'Error with querying db...' });
					return;
				}
				if (record) {
					User.findOne({ email }, (err, user) => {
						if (err) {
							res.json({ success: 'false', reason: 'Error with querying db...' });
							return;
						}
						if (user) {
							user.records.push(newRecord);
							user.save();
							res.json({ success: 'true', data: newRecord });
						}
						else {
							res.json({ success: 'false', reason: 'User does not exist' });
							return;
						}
					});
				}
			});
		}
		else {
			res.json({ success: 'false', reason: 'Missing Credentials' });
			return;
		}
	});

	// Retrive Data from DB
	router.post('/records/all', (req, res) => {
		const email = req.body.email

		if (email) {
			User.findOne({ email })
				.populate('records')
				.sort('-data')
				.exec((err, user) => {
				if (err) {
					res.json({ success: 'false', reason: 'Error with querying db...' });
					return;
				}
				if (user) {
					res.json({ success: 'true', data: user.records });
				}
				else {
					res.json({ success: 'false', reason: 'User does not exist' });
					return;
				}
			});
		}
		else {
			res.json({ success: 'false', reason: 'Missing Credentials' });
			return;
		}
	});

	return router;
}