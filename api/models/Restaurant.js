const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  phone: String,
  city: String,
  dishes: [String],
  img: { data: Buffer, contentType: String },
  rating: [Number],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);