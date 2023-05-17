const express = require('express');
const { createMovie, getMovies, updateMovies, deleteMovies } = require('../controllers/moviesController');
const { rankMovies } = require('../controllers/userController');


const moviesRouter = express.Router();

moviesRouter.post('/', createMovie)
moviesRouter.get('/', getMovies)
moviesRouter.patch('/:id', updateMovies)
moviesRouter.delete('/:id', deleteMovies)
moviesRouter.post('/ranking', rankMovies)



module.exports = moviesRouter;