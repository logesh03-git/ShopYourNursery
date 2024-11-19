const express = require("express");
const { verifyOtp } = require("../controllers/auth/auth.controller");

const router = express.Router();

router.post("/verify-otp", verifyOtp);

module.exports = router;
