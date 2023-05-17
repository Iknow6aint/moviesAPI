const User = require("../model/UserModel");
const Movie = require('../model/MoviesModel')
const asyncHandler = require("express-async-handler");



const rankMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const { rankings } = req.body;

        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the rankings of the user's movies based on the input
        rankings.forEach((ranking) => {
            const movie = user.movies.find((m) => m.title === ranking.title);
            if (movie) {
                movie.rank = ranking.rank;
            }
        });

        await user.save();

        res.json(user.movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update movie rankings' });
    }
};


module.exports = {
    rankMovies,
}