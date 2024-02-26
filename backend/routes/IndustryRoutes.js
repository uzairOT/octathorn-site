// routes/IndustryRoutes.js

const express = require('express');
const multer = require('multer');
const IndustryController = require('../controllers/IndustryController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './build/static/media/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
router.get('/industries', IndustryController.getIndustries);
router.get('/industry/:id', IndustryController.getIndustry);
router.post('/industry', upload.single('image'), IndustryController.createIndustry);
router.put('/industry/:id', upload.single('image'), IndustryController.updateIndustry);



module.exports = router;