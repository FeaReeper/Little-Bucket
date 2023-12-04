const mongoose = require('mongoose')

const KidSchema = new mongoose.Schema({
    kidFirstName: {
        type: String
    },
    gender: {
        type: String
    },
    kidBirthDay: {
        type: Date
    },
    // kidImage: {
    //     type: String
    // },
    userId: {
        type: String
    }
})

const Kid = mongoose.model('Kid', KidSchema)

module.exports = Kid