const { default: mongoose } = require("mongoose");

const MoviesModel = require('./MoviesModel');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    movieRankings: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
})

module.exports = mongoose.model('User', userSchema)