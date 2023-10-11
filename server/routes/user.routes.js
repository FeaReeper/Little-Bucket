const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    app.post('/api/newUser', UserController.createUser)
    app.get('/api/allUsers', UserController.getAllUsers)
}