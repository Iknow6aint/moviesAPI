const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./routes/routes');
const morgan = require('morgan')

const app = express()


app.use(bodyParser.json())
app.use(morgan('combined'))
app.use('/movies', moviesRouter)


module.exports = app;