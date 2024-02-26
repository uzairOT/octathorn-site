const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/submit', upload.array('files', 5), contactFormController.submitForm);

router.post('/subscribe', contactFormController.emailSubscribeController);
router.post('/schedule', contactFormController.meetingSchedulingController);
module.exports = router;