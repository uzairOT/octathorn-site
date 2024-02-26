// models/Projects.js

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  category: String,
  industry: String,
  projects: [{
    title: String,
    images: [String], 
    description: String,
    features: [String],
    bussinues:[String],
    challenges:[String],
    solutions:[String],
    objectives:[String],
    technologies:[String],
  }]
});

module.exports = mongoose.model('Projects', ProjectSchema);