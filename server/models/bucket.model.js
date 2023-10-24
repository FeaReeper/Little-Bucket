const mongoose = require('mongoose')

const BucketSchema = new mongoose.Schema({
    title: {
        type: String
    },
    age: {
        type: Number
    },
    description: {
        type: String
    },
    notes: {
        type: String
    },
    tag: {
        type: String
    },
    userId: {
        type: String
    }
}, {timestamps: true})

const Bucket = mongoose.model('Bucket', BucketSchema)

module.exports = Bucket