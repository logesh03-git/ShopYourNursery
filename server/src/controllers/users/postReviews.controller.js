const Review = require("../../models/review.model");

const postReviews = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = new Review({ rating, comment });
    const savedReview = await review.save();
    res.status(201).json({
      success: true,
      message: "Review created successfully.",
      data: savedReview,
    });
  } catch (err) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = postReviews;
