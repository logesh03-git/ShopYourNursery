const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User", // Assuming you have a 'User' collection
    //   required: false, //You can change if reviews are given my users
    // },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      maxlength: 1000, // Optional: Limit the length of comments
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
