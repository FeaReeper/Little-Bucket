const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const ATLAS_KEY = process.env.ATLAS_KEY

mongoose.connect(`mongodb+srv://FeaReeper:${ATLAS_KEY}@cluster0.f9cipfg.mongodb.net/Little-Bucket?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
