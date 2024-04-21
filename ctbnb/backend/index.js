const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RentalModel = require('./models/rentals')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.01:27017/CTbnb")

app.get('/getRentals', (req, res) => {
    RentalModel.find()
    .then(rentals => res.json(rentals))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("Server is running")
})