const Kid = require('../models/kid.model')


module.exports = {
    newKid: (req, res) => {
        Kid.create(req.body)
        .then((newKid) => {
            res.status(200).json({kid: newKid})
        })
        .catch((err) => {
            res.status(500).json({message: 'Error in controllers to add new kid', error: err})
        })
    },
    allKids: (req, res) => {
        Kid.find({})
        .then((kids) => {
            res.status(200).json(kids)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all Kids', error: err}))
    }
}