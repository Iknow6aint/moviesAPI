const Movie = require("../model/MoviesModel");
const User = require("../model/UserModel");
const slugify = require('slugify')

const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/mongoValidate");

const createMovie = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }

        const newMovie = await Movie.create(req.body);
        res.json(newMovie)
    } catch (error) {
        throw new Error(error)
    }
})

const getMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        throw new Error(error)
    }
})


const updateMovies = asyncHandler(async (req, res) => {
    const id = req.params
    validateMongoDbId(id)

    try {
        const updatedMovie = await Movie.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
        });

        res.json(updatedMovie)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteMovies = asyncHandler(async (req, res) => {
    const id = req.params
    validateMongoDbId(id)
    console.log(id);
    try {
        const deletedMovie = await Movie.findOneAndDelete({ _id: id }, req.body, {
            new: true,
        });

        res.json(deletedMovie)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createMovie,
    getMovies,
    updateMovies,
    deleteMovies,
}

