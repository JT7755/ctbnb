const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String, 
    availabilty: String,
    rating: String,
    price: String,
})

const RentalModel = mongoose.model("Rentals", RentalSchema)
module.exports = RentalModel