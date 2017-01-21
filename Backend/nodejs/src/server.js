import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

const app = express();

const port = process.env.PORT || 8664;

import router from './routes/routes';
import initPassport from './config/passport';

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.set('trust proxy', 1);
app.use(bodyParser.json());								// Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));		// Support URL-encoded bodies
app.use(passport.initialize());
app.use(passport.session());

initPassport(passport);
const routes = router(passport);

app.use('/api', routes);

// Error Handling
app.use((req, res, next) => {
	res.status(404).send('The page you are looking for does not exist');
});

// Start the express server
app.listen(port, '10.130.10.80');
// app.listen(port);
console.log("Running server on http://localhost:8664");