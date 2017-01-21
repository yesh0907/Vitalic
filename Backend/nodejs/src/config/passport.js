// Import Login/Signup Strategy
import LocalStrat from 'passport-local';

// Import bcrypt for hasing passwords
import bcrypt from 'bcrypt-nodejs';

import User from '../models/User';

const LocalStrategy = LocalStrat.Strategy;

module.exports = (passport) => {
	// used to serialize the user for the session
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	// used to deserialize the user
	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, (req, email, password, done) => {
		// asynchronous
		process.nextTick(() => {
			User.findOne({ email }, (err, user) => {
				if (err) {
					return done(null, false, "Error querying db...");
				}
				if (user) {
					done(null, false, "User exists");
				}
				else {
					const name = req.body.name;
					const profile_pic = req.body.profile_pic;
					let age = req.body.age;
					let gender = req.body.gender;
					const user = new User({ name, email, password: bcrypt.hashSync(password), profile_pic, age, gender});
					user.save((err, user) => {
						if (err) { 
							return done(null, false, "Error querying db...");
						}
						if (user) {
							return done(null, true, user);
						}
					});
				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, (req, email, password, done) => {
		// asynchronous
		process.nextTick(() => {
			User.findOne({ email }, (err, user) => {
				if (err) return done(null, false, "Error querying db...");
				if (user) {
					let hash = user.password;
					bcrypt.compare(password, hash, (err, res) => {
						if (err)
							return done(null, false, "Invalid Username or Password");
						if (res)
							return done(null, true, user);
						if (!res)
							return done(null, false, "Invalid Username or Password");
					})
				}
				else {
					return done(null, false, "Invalid Username or Password");
				}
			});
		});
	}));
};