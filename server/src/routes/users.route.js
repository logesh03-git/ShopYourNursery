const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const reviewValidator = require("../middlewares/reviewValidator");
const postReviews = require("../controllers/users/postReviews.controller");
const getReviews = require("../controllers/users/getReviews.controller");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 8640000,
    });
    return res.status(200).json({ message: "signed up" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/reviews", reviewValidator, postReviews);
router.get("/reviews", getReviews);

module.exports = router;
