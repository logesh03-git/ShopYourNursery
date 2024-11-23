const queryConstructor = (filters) => {
  const query = {};
  if (filters.size && filters.size.length) {
    query.size = { $in: filters.size };
  }
  if (filters.price && filters.price.length) {
    query.$or = filters.price.map((range) => {
      const priceRange = JSON.parse(range);
      return {
        price: { $gte: priceRange.min, $lte: priceRange.max },
      };
    });
  }
  if (filters.place && filters.place.length) {
    query.place = { $in: filters.place };
  }
  if (filters.rating && filters.rating.length) {
    query.$or = filters.rating.map((rate) => ({ rating: { $gte: rate } }));
  }
  return query;
};

module.exports = queryConstructor;
