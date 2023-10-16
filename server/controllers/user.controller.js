const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_Key



module.exports = {
    registerUser: async (req, res) => {
        try{
            const potentialUser = await User.findOne({email:req.body.email})
            if (potentialUser) {
                res.status(400).json({message: 'This email already exists please log in'})
            }
            else {
                const newUser = await User.create(req.body)
                const userToken = jwt.sign({_id: newUser._id, email: newUser.email}, SECRET, {expiresIn: '96h'})
                console.log(userToken)
                res.status(201).cookie('userToken', userToken, {httpOnly: true, maxAge: 2 * 60 * 60 * 1000}).json(newUser)
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json({error: err})
        }
    },

    loginUser: async (req, res) => {
        try{
            const user = await User.findOne({email:req.body.email})
            if(user){
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                if (passwordsMatch){
                    const userToken = jwt.sign({_id: user._id, email:user.email}, SECRET, {expiresIn:'96h'})
                    res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge: 2 * 60 * 60 * 1000}).json(user)
                }
                else{
                    res.status(400).json({message:'Invalid Email/Password'})
                }
            }
            else{
                res.status(400).json({message:'Invalid Email/Password'})
            }
        }
        catch(err){
            res.status(400).json({error: err})
        }
    },

    logoutUser: (req, res) => {
        res.clearCookie('userToken')
        res.sendStatus(200)
    },

    addMovie: async (req, res) => {
        const query = {_id: req.params.userId}
        const update = {
            $push: {
                movies: req.body.user.movies
            }
        }
        try {
            const user = await User.updateOne(query, update)
            if (user.modifiedCount == 1) {
                res.json({ message: 'Data added to the array' })
            } else {
                res.status(404).json({ message: 'Document not found' })
            }
        }
        catch(err){
            res.status(400).json({error: err})
        }
    },


    // addMovie: (req, res) => {
    //     const query = {_id: req.params.userId}
    //     const update = {
    //         $push: {
    //             movies: req.body.user.movies
    //         }
    //     }
    //     User.updateOne(query, update, {new: true, runValidators: true})
    //     .then((user) => {
    //         res.status(200).json(user)
    //     })
    //     .catch((err) => {
    //         res.status(500).json({message: 'Error in controllers for update users movie collection', error: err})
    //     })
    // },





    getAllUsers: (req, res) => {
        User.find({})
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all users'}))
    },


    deleteUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
        .then((deleted) => {
            res.status(200).json(deleted)
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for delete a note', error: err}))
    }
}