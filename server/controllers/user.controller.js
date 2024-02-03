const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const SECRET = process.env.SECRET_KEY



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