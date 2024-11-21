const express = require("express");
const reviewValidator = require("../middlewares/reviewValidator");
const postReviews = require("../controllers/users/postReviews.controller");
const getReviews = require("../controllers/users/getReviews.controller");
const handleRegister = require("../controllers/users/handleRegister.controller");
const signUpValidator = require("../middlewares/signUpValidator");
const {
  handleAddToWishList,
  handleGetWishList,
  handleDeleteFromWishList,
} = require("../controllers/wishlist/wishlist.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/signup", signUpValidator, handleRegister);
router.post("/reviews", reviewValidator, postReviews);
router.get("/reviews", getReviews);
router.post("/wishlist", verifyToken, handleAddToWishList);
router.get("/wishlist", verifyToken, handleGetWishList);
router.delete("/wishlist/:id", verifyToken, handleDeleteFromWishList);
module.exports = router;
