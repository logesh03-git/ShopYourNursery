const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  markedPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  benefits: {
    type: [String],
    default: [],
  },
  size: {
    type: [String],
    enum: ["small", "medium", "large"],
    required: true,
  },
  place: {
    type: String,
    enum: ["indoor", "outdoor", "petfriendly"],
    required: true,
  },
  tag: {
    type: String,
    default: null,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  preOrderStatus: {
    type: Boolean,
    default: false,
  },
  imgs: {
    type: [String],
    default: [],
  },
});

// Create text index for full-text search
plantSchema.index({
  title: "text",
  description: "text",
  benefits: "text",
  tag: "text",
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
