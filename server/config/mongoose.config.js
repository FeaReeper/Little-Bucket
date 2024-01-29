const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://FeaReeper:Nyalee1023*@cluster0.f9cipfg.mongodb.net/Little-Bucket?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
