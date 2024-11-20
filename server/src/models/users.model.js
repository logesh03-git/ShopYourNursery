const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    termsAndConditions: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
