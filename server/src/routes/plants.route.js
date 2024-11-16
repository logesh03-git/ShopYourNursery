const express = require("express");
const Plant = require("../models/plants.model");
const router = express.Router();
const constructQuery = require("../utils/queryConstructor");
const { searchPlants } = require("../controllers/plants/plant.controller");
router.post("/create", async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    return res.status(201).json({ message: "plant has been created", plant });
  } catch (err) {
    console.log("Error creating hotel: ", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/search", searchPlants);

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
