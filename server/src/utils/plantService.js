const Plant = require("../models/plants.model");

/**
 * Extract filters from user input and execute the search.
 */
const searchPlants = async (query) => {
  try {
    const filters = {};
    const keywords = [];
    console.log(query)

    // Parse the query for structured filters
    if (/medium|small|large/.test(query)) {
      filters.size = query.match(/medium|small|large/)[0];
    }

    if (/indoor|outdoor|petfriendly/.test(query)) {
      filters.place = query.match(/indoor|outdoor|petfriendly/)[0];
    }

    if (/\$\d+|\d+\$/.test(query)) {
      const price = query.match(/\d+/)[0];
      filters.price = { $lte: parseFloat(price) };
    }

    if (/low maintenance|low-maintenance/i.test(query)) {
      keywords.push("low maintenance");
    }

    // Add other keywords for text search
    keywords.push(...query.split(" "));

    // Build the search query
    const searchQuery = {
      $and: [
        { $or: [{ $text: { $search: keywords.join(" ") } }] },
        filters,
      ],
    };

    // Execute query and sort by relevance
    const results = await Plant.find(searchQuery)
      .sort({ score: { $meta: "textScore" } })
      .exec();

    return results;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { searchPlants };