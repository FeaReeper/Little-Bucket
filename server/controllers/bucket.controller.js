const Bucket = require('../models/bucket.model')

module.exports = {
    createBucket: (req, res) => {
        Bucket.create(req.body)
        .then((newBucket) => {
            res.status(200).json({ bucket: newBucket })
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for creating a Bucket/tv show', error: err}))
    },
    getAllBuckets: (req, res) => {
        Bucket.find({})
        .then((buckets) => {
            res.status(200).json(buckets)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all Buckets', error: err}))
    },
    getOneBucket: (req, res) => {
        Bucket.findOne({_id:req.params.id})
        .then((bucket) => {
            res.status(200).json(bucket)
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for find one Bucket', error: err}))
    },
    updateBucket: (req, res) => {
        Bucket.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedBucket) => {
            res.status(200).json({note: updatedBucket})
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for update Bucket', error: err}))
    },
    deleteOneBucket: (req, res) => {
        Bucket.deleteOne({_id: req.params.id})
        .then((deleted) => {
            res.status(200).json(deleted)
        })
        .catch((err) => {
            res.status(500).json({message: 'Error in controllers to delete a Bucket', error: err})
        })
    }
}