const Plant = require("../../models/plants.model");
const queryConstructor = require("../../utils/queryConstructor");
const searchPlants = async (req, res) => {
  try {
    const filters = req.body.filters;
    console.log(req.body);
    const query = queryConstructor(filters);
    console.log("h");
    //pagination logic
    const pageSize = 8;
    const pageNumber = parseInt(filters.page ? filters.page.toString() : "1");
    const skip = (pageNumber - 1) * pageSize;

    const plants = await Plant.find(query).skip(skip).limit(pageSize);

    const total = await Plant.countDocuments(query);
    res.json({
      plants,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching plants" });
  }
};
module.exports = { searchPlants };
