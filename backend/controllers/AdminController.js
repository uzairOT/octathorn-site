// AdminController.js
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginData = (req, res) => {
  const { username, password } = req.body;

  // For demonstration purposes, you can check the credentials here.
  // Replace this with your actual authentication logic.
  if (username === "octaadmin" && password === "octaadmin@2021") {
    // Generate a token
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ success: true, message: "Login successful", token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = {
  loginData,
};
