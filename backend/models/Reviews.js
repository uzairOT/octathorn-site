const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews;