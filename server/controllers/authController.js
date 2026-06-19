const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User Registered" });
};

exports.loginUser = async (req, res) => {
  res.json({ message: "Login Success" });
};