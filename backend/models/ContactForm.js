// // models/ContactForm.js
// const mongoose = require('mongoose');

// const ContactFormSchema = new mongoose.Schema({
  
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
//   message: { type: String, required: true },
//  // newsletter: { type: Boolean, default: false },
// });

// module.exports = mongoose.model('ContactForm', ContactFormSchema);

const mongoose = require('mongoose');
const ContactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String },
  projectType:{ type:String },
 files: { type: [String] },
 // newsletter: { type: Boolean, default: false },
});
module.exports = mongoose.model('ContactForm', ContactFormSchema);