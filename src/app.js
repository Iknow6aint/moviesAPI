const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./routes/routes');

const app = express()


app.use(bodyParser.json())
app.use('/movies', moviesRouter)


module.exports = app;