const Review = require("../models/Reviews");

exports.createReview = async (req, res) => {
    console.log(req.body.title);

    const review = new Review({
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        email: req.body.email,
    });
  
    try {
        await review.save();
        res.status(201).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
    };

exports.getReviews = async (req, res) => {
    const reviews = await Review.find();
    res.send(reviews);
}
