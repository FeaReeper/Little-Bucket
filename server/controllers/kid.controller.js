const Kid = require('../models/kid.model')
const upload = multer({ storage })

module.exports = {
    newKid: (req, res) => {
        Kid.create(req.body)
        .then((newKid) => {
            res.status(200).json({kid: newKid})
        })
        .catch((err) => {
            res.status(500).json({message: 'Error in controllers to add new kid', error: err})
        })
    }
}