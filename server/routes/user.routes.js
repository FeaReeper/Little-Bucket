const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    app.post('/api/newUser', UserController.registerUser)
    app.post('/api/loginUser', UserController.loginUser)
    app.post('/api/logout', UserController.logoutUser)
    app.get('/api/allUsers', UserController.getAllUsers)
    app.delete('/api/deleteOneUser/:id', UserController.deleteUser)
}