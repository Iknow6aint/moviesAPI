const express = require('express');
const { createMovie, getMovies, updateMovies, deleteMovies } = require('../controllers/moviesController');


const moviesRouter = express.Router();

moviesRouter.post('/', createMovie)
moviesRouter.get('/', getMovies)
moviesRouter.put('/:id', updateMovies)
moviesRouter.delete('/:id', deleteMovies)


module.exports = moviesRouter;