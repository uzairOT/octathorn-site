const express = require('express');
const router = express.Router();
const ReviewsController = require('../controllers/ReviewsController');


router.post('/reviews', ReviewsController.createReview);
router.get('/reviews', ReviewsController.getReviews);

module.exports = router;