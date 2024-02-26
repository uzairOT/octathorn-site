const express = require("express");
const { get } = require("http");
const path = require("path");
const mongoose = require('mongoose');
require("dotenv").config();
// const bodyParser = require("body-parser");
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});
app.use(express.json());
// app.use(bodyParser.json());
const port = process.env.PORT || 443;
const industryRoutes = require('./routes/IndustryRoutes');
const projectRoutes = require('./routes/ProjectsRoutes');
const reviewsRoutes = require('./routes/ReviewsRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');
const AdminRoutes =require('./routes/AdminRoutes');



function getDirPath() {
  if (process.pkg) {
    return path.resolve(process.execPath + "/..");
  } else {
    return path.join(require.main ? require.main.path : process.cwd());
  }
}

  app.use("/api",industryRoutes);
  app.use("/api",projectRoutes);
  app.use("/api",reviewsRoutes);
  app.use("/api",contactFormRoutes);
  app.use("/api",AdminRoutes);



  //connect to mongodb
 // connect to mongodb
 mongoose.set('strictQuery', true);

 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('DB Connected!'))
   .catch(err => console.error('DB connection error:', err));
  if (process.env.NODE_ENV === "production") {
    console.log("Running in production!");
    app.use(express.static(path.join("./build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(getDirPath(), "build", "index.html"));
      // console.log(getDirPath());
    });
  }
  
  
  // //server production assests
  app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`);
  });