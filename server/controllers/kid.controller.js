const Kid = require('../models/kid.model')


module.exports = {
    // newKid: (req, res) => {
    //     Kid.create(req.body)
    //     .then((newKid) => {
    //         res.status(200).json({kid: newKid})
    //     })
    //     .catch((err) => {
    //         res.status(500).json({message: 'Error in controllers to add new kid', error: err})
    //     })
    newKid: async (req, res) => {
        const { kidFirstName, gender, kidBirthDay, userId } = req.body;
        const kidImage = req.file.filename;
        const newKid = new Kid({ kidFirstName, gender, kidBirthDay, userId, kidImage });
        try {
            await newKid.save();
            res.status(200).json({ message: 'New kid created successfully!' });
        }   catch (error) {
            res.status(500).json({ message: 'Error creating new kid', error });
        }
    },
    allKids: (req, res) => {
        Kid.find({})
        .then((kids) => {
            res.status(200).json(kids)
        })
        .catch((err) => res.status(500).json({message: 'Error in controller for get all Kids', error: err}))
    },
    deleteKid: (req, res) => {
        Kid.deleteOne({_id: req.params.id})
        .then((deleted) => {
            res.status(200).json(deleted)
        })
        .catch((err) => {
            res.status(500).json({message: 'Error in controllers to delete a Kid', error: err})
        })
    }
}