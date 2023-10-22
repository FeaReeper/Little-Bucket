const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    filmType: {
        type: String
    },
    title: {
        type: String
    },
    genre: {
        type: String
    },
    notes: {
        type: String
    },
    age: {
        type: Number
    },
    userId: {
        type: String
    }
}, {timestamps: true})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie