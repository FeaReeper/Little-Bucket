const mongoose = require('mongoose')

const BucketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title can not be blank"]
    },
    age: {
        type: Number,
        required: [true, "Age can not be blank"]
    },
    description: {
        type: String
    },
    notes: {
        type: String
    },
    tag: {
        type: String,
        required: [true, 'Tag can not be blank']
    },
    userId: {
        type: String
    }
}, {timestamps: true})

const Bucket = mongoose.model('Bucket', BucketSchema)

module.exports = Bucket