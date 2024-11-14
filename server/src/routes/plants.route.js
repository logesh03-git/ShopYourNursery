const express = require("express");
const Plant = require("../models/plants.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    return res.status(201).json({ message: "plant has been created", plant });
  } catch (err) {
    console.log("Error creating hotel: ", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.json(plants);
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching plants" });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id.toString();
  try {
    const plant = await Plant.findOne({
      _id: id,
    });
    return res.json(plant);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error while fetching plant details" });
  }
});
module.exports = router;
