const MovieController = require('../controllers/movie.controller')

module.exports = (app) => {
    app.post('/api/newMovie', MovieController.createMovie)
    app.get('/api/allMovies', MovieController.getAllMovies)
    app.get('/api/oneMovie/:id', MovieController.getOneMovie)
    app.delete('/api/deleteMovie/:id', MovieController.deleteOneMovie)
}