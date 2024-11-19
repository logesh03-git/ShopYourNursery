const User = require("../../models/users.model");
const OTP = require("../../models/otp.model");
const generateOTP = require("../../utils/generateOTP");
const { sendMail } = require("../../utils/sendMail");
const bcrypt = require("bcrypt");
const handleRegister = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Check if the email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    // Create a new user (without verifying)
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await newUser.save();
    //Generate OTP
    const otpCode = generateOTP();
    const otpExpiry = new Date(Date.now() + 2 * 60 * 1000);
    console.log(otpExpiry);
    // Save OTP to OTP collection
    const otpEntry = new OTP({
      userId: newUser._id,
      otp: otpCode,
      otpExpiry,
    });
    await otpEntry.save();
    // Send OTP to user's email
    const mailStatus = await sendMail({ email: email, otp: otpCode });
    console.log(mailStatus);
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully. Please check your email.",
      mailStatus,
      otpEntry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
      error,
    });
  }
};

module.exports = handleRegister;
