const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname + '/logs/', 'access.log'),
  { flags: 'a' }
);

// Set up logger to write to file
app.use(morgan('dev', { stream: accessLogStream }));

// Set up logger to write to console
app.use(morgan('dev'));

// Use routes ./routes/index.js
app.use(router);

module.exports = app;
