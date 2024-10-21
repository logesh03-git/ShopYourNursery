import fiddleplant from "../assets/popularplants/fiddle.png";
import snakeplant from "../assets/popularplants/snake.png";
import peacelilly from "../assets/popularplants/peacelilly.jpeg";
import monstera from "../assets/popularplants/monstera.jpeg";
import pathos from "../assets/popularplants/pathos.jpeg";

export const popularPlants = [
  {
    id: 101,
    title: "Fiddle Leaf Fig (Ficus lyrata)",
    price: 60.0,
    description:
      "This trendy indoor plant is known for its large, glossy leaves that make a bold statement in any room. It thrives in bright, indirect light and needs consistent moisture to stay healthy.",
    benefits: [],
    size: ["small", "medium", "large"],
    place: "indoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.2,
    img: fiddleplant,
    preOrderStatus: true,
  },
  {
    id: 102,
    title: "Snake Plant (Sansevieria trifasciata)",
    price: 25.0,
    description:
      "A hardy, low-maintenance plant that tolerates neglect. It thrives in low light and helps purify the air, making it perfect for bedrooms or offices.",
    benefits: [],
    size: ["small", "medium", "large"],
    place: "indoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.2,
    img: snakeplant,
    preOrderStatus: false,
  },
  {
    id: 103,
    title: "Peace Lily (Spathiphyllum)",
    price: 200,
    description:
      "A popular choice for indoor spaces, the Peace Lily features elegant white blooms and is known for its air-purifying properties. It prefers low to medium light and moist soil.",
    benefits: [],
    size: ["small", "medium", "large"],
    place: "indoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.2,
    img: peacelilly,
    preOrderStatus: true,
  },
  {
    id: 104,
    title: "Monstera Deliciosa",
    price: 45.0,
    description:
      "Known for its iconic split leaves, the Monstera is a favorite among plant enthusiasts. It grows best in bright, indirect light and requires regular watering.",
    benefits: [],
    size: ["small", "medium", "large"],
    place: "indoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.2,
    img: monstera,
    preOrderStatus: true,
  },
  {
    id: 105,
    title: "Pothos",
    price: 15.0,
    description:
      "This fast-growing trailing plant is perfect for hanging baskets or as a climber. It's very forgiving and thrives in low light with minimal care.",
    benefits: [],
    size: ["small", "medium", "large"],
    place: "indoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.2,
    img: pathos,
    preOrderStatus: false,
  },
];
