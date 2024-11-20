const express = require("express");
const { verifyOtp, logIn } = require("../controllers/auth/auth.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/verify-otp", verifyOtp);
router.post("/signin", logIn);
router.get("/validate-token", verifyToken, (req, res) => {
  res.status(200).json({ userId: req.userId });
});
module.exports = router;
