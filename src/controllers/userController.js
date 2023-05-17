const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");


const addMovieToRank = asyncHandler(async (req, res) => {
    const { movie, index, name } = req.body

    try {
        const user = await User.find({ name })
        let rankings = user.movieRankings
        // the value of index ranges from 1 to 10
        if (rankings.length >= index && index > 0) {
            rankings[index - 1].movie = movie
            const updatedUser = await User.findOneAndUpdate({ name }, { movieRankings: rankings }, {
                new: true,
            });
            res.json(updatedUser)
        } else {
            throw new Error('the value of index must be between 1 and 10')
        }

    } catch (e) {
        throw new Error(e.message)
    }
})


const removeMovieFromRanking = asyncHandler(async (req, res) => {
    const { index, name } = req.body

    try {
        const user = await User.find({ name })
        let rankings = user.movieRankings
        // the value of index ranges from 1 to 10
        if (rankings.length >= index && index > 0) {
            rankings[index - 1].movie = {}
            const updatedUser = await User.findOneAndUpdate({ name }, { movieRankings: rankings }, {
                new: true,
            });
            res.json(updatedUser)
        } else {
            throw new Error('the value of index must be between 1 and 10')
        }

    } catch (e) {
        throw new Error(e.message)
    }
})

module.exports = {
    addMovieToRank,
    removeMovieFromRanking
}