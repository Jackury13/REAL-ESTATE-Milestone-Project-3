const uploadController = require('express').Router();
// const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})

uploadController.post('/image', upload.single('image'), async (req, res) => {
    try {
        return res.status(200).json('File uploaded successfully')
    } catch (error) {
        console.error(error)
    }
})

module.exports = uploadController
