const express = require('express');
const path = require('path');

const logger = require('morgan');

const app = express();
const api = require('./service/api')

// log requests
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
app.listen(3000);