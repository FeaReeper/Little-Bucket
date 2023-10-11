const MovieController = require('../controllers/movie.controller')

module.exports = (app) => {
    app.post('/api/newMovie', MovieController.createMovie)
    app.get('/api/allMovies', MovieController.getAllMovies)
}