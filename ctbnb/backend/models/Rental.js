const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: String
});

module.exports = mongoose.model('Rental', RentalSchema);