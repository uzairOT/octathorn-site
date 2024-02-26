// controllers/ProjectsController.js

const Projects = require('../models/Projects');
const cloudinary = require('../config/cloudinary');


exports.createProjects = async (req, res) => {
  console.log("backend",req.body);
  let images = [];
  for (let i = 0; i < req.files.length; i++) {
    const result = await cloudinary.uploader.upload(req.files[i].path);
    images.push(result.secure_url);
  }
console.log(req.body.industry)
  let Project = await Projects.findOne({ category: req.body.category });
  if (Project) {
    Project.industry = req.body.industry; 
    Project.projects.push({
      title: req.body.title,
      images: images,
      description: req.body.description,
      features: req.body.features,
      bussinues: req.body.bussinues,
      challenges: req.body.challenges,
      solutions: req.body.solutions,
      objectives: req.body.objectives,
      technologies: req.body.technologies,
    });
  } else {
    Project = new Projects({
      category: req.body.category,
      industry: req.body.industry, 
      projects: [{
        title: req.body.title,
        images: images,
        description: req.body.description,
        features: req.body.features ,
        bussinues: req.body.bussinues,
        challenges: req.body.challenges,
        solutions: req.body.solutions,
        objectives: req.body.objectives,
        technologies: req.body.technologies,
      }]
    });
  }

  try {
    await Project.save();
    res.status(201).send(Project);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getProjects = async (req, res) => {
  const industries = await Projects.find();
  res.send(industries);
}

exports.getProject = async (req, res) => {
  const industry = await Projects.findById(req.params.id);
  res.send(industry);
}

// exports.updateProject = async (req, res) => {
//   const industry = await Industry.findById(req.params.id);
//   const project = industry.projects.id(req.params.projectId);
//   project.title = req.body.title;
//   project.image = req.file.path;
//   project.description = req.body.description;
//   project.industry= req.body.industry;
//   project.features = req.body.features;

//   try {
//     await industry.save();
//     res.send(industry);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// }


exports.updateProject = async (req, res) => {
  let images = [];
  for (let i = 0; i < req.files.length; i++) {
    const result = await cloudinary.uploader.upload(req.files[i].path);
    images.push(result.secure_url);
  }

  const industry = await Projects.findById(req.params.id);
  const project = industry.projects.id(req.params.projectId);
  project.title = req.body.title;
  project.images = images;
  project.description = req.body.description;
  project.industry= req.body.industry;
  project.features = req.body.features;

  try {
    await industry.save();
    res.send(industry);
  } catch (error) {
    res.status(400).send(error);
  }
};