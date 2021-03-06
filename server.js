// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Get our API routes
const myApp = require('./server/routes/api');
const guides = require('./server/routes/guides');
const user = require('./server/routes/user');
const create = require('./server/routes/create');

const app = express();
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOLAB_SILVER_URI);

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// force ssl
app.use(function(req, res, next) {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
    } else
        next();
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// // Point static path to dist
app.use(express.static(__dirname + '/dist'));


/**
 * Get port from environment and store in Express.
 */
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


// Set our api routes

app.use('/api/create', create);
app.use('/api/guides', guides);
app.use('/api/user', user);
// app.use('/api', myApp);

app.use('/*', function(req, res) {
    return res.sendFile(path.join(__dirname, '/dist/index.html'));
});


// app.use(function(req, res, next) {
//     console.log("are you coming here to res.render index?");
//     return res.render('index');
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || 8080;
// app.set('port', port);


// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;