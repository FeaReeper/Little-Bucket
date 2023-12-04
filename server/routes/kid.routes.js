const KidController = require('../controllers/kid.controller')


module.exports = (app) => [
    app.post('/api/newKid', KidController.newKid),
    app.get('/api/allKids', KidController.allKids)
]