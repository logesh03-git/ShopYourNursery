const express = require("express");
const reviewValidator = require("../middlewares/reviewValidator");
const postReviews = require("../controllers/users/postReviews.controller");
const getReviews = require("../controllers/users/getReviews.controller");
const handleRegister = require("../controllers/users/handleRegister.controller");
const router = express.Router();

router.post("/signup", handleRegister);
router.post("/reviews", reviewValidator, postReviews);
router.get("/reviews", getReviews);

module.exports = router;

// async (req, res) => {
//   try {
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//       return res
//         .status(409)
//         .json({ success: false, message: "User already exists" });
//     }
//     user = new User(req.body);
//     await user.save();
//     //OTP Logic
//     const otpCode = generateOTP();
//     const otpDoc = new OTP({
//       userId: user._id,
//       otp: otpCode,
//       otpExpiry: new Date(Date.now() + 2 * 60 * 1000),
//     });
//     await otpDoc.save();

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
//       expiresIn: "1d",
//     });
//     res.cookie("auth_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 8640000,
//     });
//     return res.status(201).json({
//       success: true,
//       message: "Signed Up",
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// }
