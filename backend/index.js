const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const userController = require('./controllers/usercontroller')
const propertyController = require('./controllers/propertyController')
const authController = require('./controllers/authController')
const commentController = require('./controllers/commentController')
const yachtController = require('./controllers/yachtController')
const uploadController = require('./controllers/uploadController')

app.get("/", (req, res) => {
    res.send("Hello to Real Estate API")
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

const PORT = process.env.PORT
