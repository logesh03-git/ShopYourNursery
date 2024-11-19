const jwt = require("jsonwebtoken");
const OTP = require("../../models/otp.model");
const User = require("../../models/users.model");

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const otpEntry = await OTP.findOne({
      userId: user._id,
      otp,
      otpExpiry: { $gt: new Date() }, // Check if OTP has expired
      isUsed: false,
    });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    //Mark otp as used
    otpEntry.isUsed = true;
    await otpEntry.save();

    // Mark the user as verified
    user.isVerified = true;
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 8640000,
    });
    return res.status(201).json({
      success: true,
      message: "Signed Up",
    });
  } catch (error) {
    res.status(500).json("something went wrong");
  }
};

module.exports = { verifyOtp };
