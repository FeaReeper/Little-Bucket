const Movie = require('../models/movie.model')

module.exports = {
    createMovie: (req, res) => {
        Movie.create(req.body)
        .then((newMovie) => {
            res.status(200).json({ movie: newMovie })
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for creating a movie/tv show', error: err}))
    },
    getAllMovies: (req, res) => {
        Movie.find({})
        .then((movies) => {
            res.status(200).json(movies)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all movies', error: err}))
    },
    deleteOneMovie: (req, res) => {
        Movie.deleteOne({_id: req.params.id})
        .then((deleted) => {
            res.status(200).json(deleted)
        })
        .catch((err) => {
            res.status(500).json({message: 'Error in controllers to delete a movie', error: err})
        })
    }
}