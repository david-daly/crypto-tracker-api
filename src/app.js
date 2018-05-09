var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.use(session({
    secret: 'session secret', //TODO: Fix this to make it more secure, remove from version control
    resave: true,
    saveUninitialized: true
}));

app.get('*', function (req, res) {
    return res.send('Hello World');
});

const server = app.listen(5000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});