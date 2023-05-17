const express = require('express');
const { createMovie, getMovies, updateMovies, deleteMovies } = require('../controllers/moviesController');
const { addMovieToRank, removeMovieFromRanking } = require('../controllers/userController');


const moviesRouter = express.Router();

moviesRouter.post('/', createMovie)
moviesRouter.get('/', getMovies)
moviesRouter.patch('/:id', updateMovies)
moviesRouter.delete('/:id', deleteMovies)
moviesRouter.post('/add-rank', addMovieToRank)
moviesRouter.post('/remove-rank', removeMovieFromRanking)


module.exports = moviesRouter;