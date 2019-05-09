const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  name: String,
  price: Number,
  weight: Number,
  img: { data: Buffer, contentType: String },
  composition: [String],
  isActive: Boolean,
  rating: [Number],
});

module.exports = mongoose.model('Dish', DishSchema);