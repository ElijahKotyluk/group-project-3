const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors')
const trunks = require('trunks-log')

const app = express();

app.use(cors())
const logs = new trunks('', 'yellow', '')

// const index = require('./src/routes/index');
const { apiRoutes } = require('./src/routes/index')
const { webRoutes } = require('./src/routes/index')

// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

// Fail on connection error.
mongoose.connection.on('error', error => { throw error })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;


logs.success('App running on http://localhost:{}', process.env.PORT)
