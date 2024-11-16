const Review = require("../../models/review.model");

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.aggregate([
      { $project: { rating: 1, comment: 1, _id: 0, id: "$_id" } },
    ]);
    res.json(reviews);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = getReviews;
