export const size = {
  title: "Plant Size",
  type: "size",
  value: ["small", "medium", "large"],
};
export const price = {
  title: "Price",
  type: "price",
  value: [
    { min: 0, max: 30 },
    { min: 30, max: 60 },
    { min: 60, max: 100 },
    { min: 100, max: Number.MAX_VALUE },
  ],
};
export const place = {
  title: "Indoor/Outdoor",
  type: "place",
  value: ["Indoor", "Outdoor", "PetFriendly"],
};
export const customerRating = {
  title: "Customer Rating",
  type: "rating",
  value: [5, 4, 3, 2, 1],
};

const filtermap = [size, price, place, customerRating];

export const filterTypes = filtermap.map((item) => item.type);

export default filtermap;
