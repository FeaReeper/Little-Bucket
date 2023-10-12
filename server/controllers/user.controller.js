const User = require('../models/user.model')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')



module.exports = {
    createUser: async (req, res) => {
        User.create(req.body)
        .then((newUser) => {
            res.status(200).json({ user: newUser})
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for creating user'}))
    },
    getAllUsers: (req, res) => {
        User.find({})
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all users'}))
    }
}