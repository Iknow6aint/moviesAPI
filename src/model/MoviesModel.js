const { default: mongoose } = require("mongoose");

var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Movie', movieSchema);