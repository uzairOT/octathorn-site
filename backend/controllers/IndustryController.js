// controllers/IndustryController.js

const Industry = require('../models/Industry');
const cloudinary = require('../config/cloudinary');

exports.createIndustry = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const industry = new Industry({
    category: req.body.category,
    title: req.body.title,
    image: result.secure_url,
    description: req.body.description,
    features: req.body.features 
  });

 
  try {
    await industry.save();
    res.status(201).send(industry);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.getIndustries = async (req, res) => {
  const industries = await Industry.find();
  res.send(industries);
}
exports.getIndustry = async (req, res) => {
  const industry = await Industry.findById(req.params.id);
  res.send(industry);
}
exports.updateIndustry = async (req, res) => {
  //find by title
  const industry = await Industry.findById(req.params.id);
  industry.category = req.body.category;
  industry.title = req.body.title;
  industry.image = req.file.path;
  industry.description = req.body.description;

  try {
    await industry.save();
    res.send(industry);
  }

  catch (error) {
    res.status(400).send(error);
  }
}

