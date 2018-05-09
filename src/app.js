var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');

app.use(session({
    secret: 'session secret', //TODO: Fix this to make it more secure, remove from version control
    resave: true,
    saveUninitialized: true
}));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'localhost:3000');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors());
app.use(logger('dev'));

// make index default route
app.get('*', function (req, res) {
    return res.send('Hello World');
});
// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});