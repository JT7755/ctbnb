const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RentalModel = require('./models/rentals')
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jackterrance:AdminBruins15@cluster0.mahox49.mongodb.net/CTbnb")

const connection = mongoose.connection;
  
connection.once('open', () => {
    console.log('Connected to MongoDB successfully.');
});

app.get('/getRentals', (req, res) => {
    RentalModel.find()
    .then(rentals => res.json(rentals))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log("Server is running")
})