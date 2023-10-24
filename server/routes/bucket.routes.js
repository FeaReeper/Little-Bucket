const BucketController = require('../controllers/bucket.controller')

module.exports = (app) => {
    app.post('/api/newBucket', BucketController.createBucket)
    app.get('/api/allBuckets', BucketController.getAllBuckets)
    app.get('/api/oneBucket/:id', BucketController.getOneBucket)
    app.delete('/api/deleteBucket/:id', BucketController.deleteOneBucket)
    app.patch('/api/updateBucket/:id', BucketController.updateBucket)
}