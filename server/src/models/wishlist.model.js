const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Plant", // Reference to the Product model
        required: true,
      },
      addedAt: {
        type: Date,
        default: Date.now, // Track when the product was added
      },
    },
  ],
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;
