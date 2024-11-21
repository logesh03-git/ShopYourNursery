const Wishlist = require("../../models/wishlist.model");
const Plant = require("../../models/plants.model");
const handleAddToWishList = async (req, res) => {
  const { productId } = req.body;
  try {
    const wishlist = await Wishlist.findOne({ userId: req.userId });
    if (wishlist) {
      const isItemInWishlist = wishlist.items.some(
        (item) => item.productId.toString() === productId
      );
      if (!isItemInWishlist) {
        wishlist.items.push({ productId: productId });
        await wishlist.save();
        return res
          .status(201)
          .json({ success: true, message: "Item added to wishlist" });
      }
      return res
        .status(409)
        .json({ success: false, mmessage: "Item already exists in wishist" });
    } else {
      await Wishlist.create({
        userId: req.userId,
        items: [{ productId }],
      });
      return res
        .status(201)
        .json({ success: true, message: "Item added to wishlist" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};
const handleGetWishList = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne(
      { userId: req.userId },
      { _id: 0, "items.productId": 1 }
    );
    if (!wishlist) {
      return res.json({ wishlist: [], success: true });
    }
    const items = wishlist?.items.map((item) => item.productId);
    const products = await Plant.find({ _id: { $in: items } });
    return res.json({ wishlist: products, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

const handleDeleteFromWishList = async (req, res) => {
  const { id: productId } = req.params;
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.userId },
      { $pull: { items: { productId } } }, // Pull product from items
      { new: true } // Return the updated document
    );
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product removed from wishlist successfully",
      productId,
      wishlist,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
      message: "something went wrong",
    });
  }
};
module.exports = {
  handleAddToWishList,
  handleGetWishList,
  handleDeleteFromWishList,
};
