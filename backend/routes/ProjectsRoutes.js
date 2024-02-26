// routes/ProjectRoutes.js

const express = require('express');
const multer = require('multer');
const {getProject,getProjects,createProjects,updateProject} = require('../controllers/ProjectsController');

const router = express.Router();

//to store in local
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
//const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
 
// const upload = multer({ storage: storage });


router.get('/project', getProjects);
router.get('/project/:id', getProject);
router.post('/project', upload.array('images', 10), createProjects);
router.put('/project/:id', upload.array('images', 10), updateProject);

// router.post('/project', upload.single('image'), createProjects);
// router.put('/project/:id', upload.single('image'), updateProject);



module.exports = router;