const KidController = require('../controllers/kid.controller')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
}); 


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

let upload = multer({storage, fileFilter})


module.exports = (app) => [
    app.post('/api/newKid', upload.single('kidImage'), KidController.newKid),
    app.get('/api/allKids', KidController.allKids),
    app.delete('/api/deleteKid/:id', KidController.deleteKid)
]