// // controllers/contactFormController.js
// const ContactForm = require('../models/ContactForm');
// const {sendSubscriptionEmail,sendMeetingEmail } = require('../middellware/Nodemailer.middleware');
// exports.submitForm = async (req, res) => {
//   try {
//     const form = new ContactForm(req.body);
//     await form.save();
//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while submitting the form' });
//   }
// };

// //send subscription email controller
// exports.emailSubscribeController = async (req, res) => {
//   try {
//       const { email } = req.body;
   
//       await sendSubscriptionEmail(email);

//       res.status(200).json({ message: 'subscription email send successfully!' });
//   } catch (error) {
//       res.status(500).json({ message: 'Something went wrong.', error: error.message });
//   }
// }

// exports.meetingSchedulingController = async (req, res) => {
//   try {
//       const { name, email,time } = req.body;

   
//       await sendMeetingEmail(name,email,time);

//       res.status(200).json({ message: 'meeting email send successfully!' });
//   } catch (error) {
//       res.status(500).json({ message: 'Something went wrong.', error: error.message });
//   }
// }

// controllers/contactFormController.js

const ContactForm = require('../models/ContactForm');
const {sendSubscriptionEmail,sendMeetingEmail } = require('../middellware/Nodemailer.middleware');

exports.submitForm = async (req, res) => {
  try {
    const form = new ContactForm(req.body);

    if (req.files) {
      form.files = req.files.map(file => file.filename);
    }

    await form.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
};
//send subscription email controller
exports.emailSubscribeController = async (req, res) => {
  try {
      const { email } = req.body;
      await sendSubscriptionEmail(email);
      res.status(200).json({ message: 'subscription email send successfully!' });
  } catch (error) {
      res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
}
exports.meetingSchedulingController = async (req, res) => {
  try {
      const { name, email,time } = req.body;
      await sendMeetingEmail(name,email,time);
      res.status(200).json({ message: 'meeting email send successfully!' });
  } catch (error) {
      res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
}