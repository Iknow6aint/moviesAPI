const { default: mongoose } = require("mongoose");

const Movies = require('./MoviesModel');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    movies: {
        type: Array,
        default: [],
        ref: Movies
    }

})

module.exports = mongoose.model('User', userSchema)