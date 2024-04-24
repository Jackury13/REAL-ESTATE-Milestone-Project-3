const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const userController = require('./controllers/usercontroller')
const authController = require('./controllers/authController')
const commentController = require('./controllers/commentController')
const propertyController = require('./controllers/propertyController')
const uploadController = require('./controllers/uploadController')
const userController = require('./controllers/userController')
const yachtController = require('./controllers/yachtController')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static("public/images"))

app.use('/auth', authController)
app.use('/comment', commentController)
app.use('/property', propertyController)
app.use('/upload', uploadController)
app.use('/user', userController)
app.use('/yacht', yachtController)

app.get("/", (req, res) => {
    res.send("Hello to Real Estate API")
});

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

const PORT = process.env.PORT
