// AdminRoutes.js
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

router.post('/login', AdminController.loginData);

module.exports = router;
