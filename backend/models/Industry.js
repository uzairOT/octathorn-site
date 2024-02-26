// models/Industry.js

const mongoose = require('mongoose');

const IndustrySchema = new mongoose.Schema({
  category: String,
  title: String,
  image: String,
  description: String,
  features: [String] 
});

module.exports = mongoose.model('Industry', IndustrySchema);