const express = require('express');
const { createMovie, getMovies } = require('../controllers/moviesController');

const moviesRouter = express.Router();

moviesRouter.post('/', createMovie)
moviesRouter.get('/', getMovies)


module.exports = moviesRouter;