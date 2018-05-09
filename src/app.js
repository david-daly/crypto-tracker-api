const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const environment = require('./config/environment')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger(environment.logger));

app.use(session({
    secret: 'session secret', //TODO: Fix this to make it more secure, remove from version control
    resave: true,
    saveUninitialized: true
}));

app.get('*', function (req, res) {
    return res.send('Hello World');
});

const server = app.listen(environment.port, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});