const Plant = require("../../models/plants.model");
const queryConstructor = require("../../utils/queryConstructor");
const { searchPlants: textSearchPlants } = require("../../utils/plantService");

const searchPlants = async (req, res) => {
  try {
    const { query, filters = {} } = req.body;
    //console.log(req.body)

    // Initialize queries
    const textSearchQuery = query
      ? { $text: { $search: query } }
      : {};
    const filterQuery = queryConstructor(filters);

    // Combine both queries using `$and`
    const combinedQuery = {
      $and: [textSearchQuery, filterQuery],
    };
    //console.log(combinedQuery)

    // Pagination logic
    const pageSize = 8;
    const pageNumber = parseInt(filters.page || "1", 10);
    const skip = (pageNumber - 1) * pageSize;

    // Execute the combined query
    const plants = await Plant.find(combinedQuery).skip(skip).limit(pageSize);
    const total = await Plant.countDocuments(combinedQuery);
    //console.log(plants)
    //console.log(total)
    return res.json({
      plants,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { searchPlants };