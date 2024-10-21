import emerald from "../assets/featured/emerald.png";
import yellowlilly from "../assets/featured/yellowlilly.png";
import hydragea from "../assets/featured/hydragea.png";
import meyer from "../assets/featured/lemon.png";
export const featuredPlants = [
  {
    id: 1,
    title: "Emerald Green Arborvitae (Thuja occidentalis)",
    price: 40.97,
    description:
      "A popular evergreen shrub widely used for privacy screens and hedging due to its dense, compact growth habit. With vibrant green foliage that remains lush year-round, this hardy plant is well-suited to a variety of climates. It grows best in full sun to partial shade and thrives in welldrained soil. As a low-maintenance plant, it only requires occasional pruning to maintain its shape and size, making it a favorite among both new and experienced gardeners.",
    benefits: [
      `Growth Rate:Moderate, reaching up to 12-15 feet in height.`,
      `Care Tips:Requires minimal care; just ensure occasional watering during dry spells.`,
      `Uses:Ideal for creating natural privacy barriers, windbreaks, or decorative garden borders.`,
    ],
    size: ["medium", "large"],
    place: "outdoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.5,
    img: emerald,
    preOrderStatus: true,
  },
  {
    id: 2,
    title: "Yellow Asiatic Lily (Lilium asiaticum)",
    price: 19.98,
    description:
      "Asiatic Lilies are renowned for their early summer blooms, showcasing vibrant colors that make them a striking addition to any garden. The Yellow Asiatic Lily, in particular, produces radiant golden-yellow flowers that stand out in flower beds and borders. These lilies are not only beautiful but also relatively low-maintenance. They thrive in full sun and prefer well-drained soil, ensuring they bloom abundantly. With their upright stems and bright blossoms, they are also excellent as cut flowers for indoor arrangements.",
    benefits: [
      `Bloom Season : Early to mid-summer, providing a pop of color during the growing season.`,
      `Care Tips : Plant in well-drained soil and ensure regular watering during dry periods.`,
      `Uses : Great for garden beds, borders, and as cut flowers for vases.`,
    ],
    size: ["small", "large"],
    place: "outdoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.6,
    img: yellowlilly,
    preOrderStatus: true,
  },
  {
    id: 3,
    title: "Hydrangea 'L.A. Dreamin'",
    price: 60.45,
    description:
      "This multi-colored hydrangea variety is known for its show-stopping blooms, which range from pink to blue, depending on the soil’s pH. The 'L.A. Dreamin' is a versatile plant that does well in both containers and garden beds, adding a vibrant, colorful touch to any space. It thrives in partial shade and requires consistent moisture, making it perfect for shaded areas in gardens. Its large, rounded flower clusters are visually captivating and can last throughout the summer season, making it a favorite for ornamental landscaping.",
    benefits: [
      `Color Variation : Bloom color changes based on soil acidity, offering a dynamic, evolving look.`,
      `Care Tips : Maintain moist soil, and adjust soil pH to control bloom color (more alkaline for pink, more acidic for blue).`,
      `Uses : Ideal for shaded garden areas, decorative containers, or as a statement plant in mixed borders.`,
    ],
    size: ["small"],
    place: "outdoor",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.7,
    img: hydragea,
    preOrderStatus: false,
  },
  {
    id: 4,
    title: "Meyer Lemon Tree",
    price: 40.98,
    description:
      "A dwarf citrus tree, the Meyer Lemon is prized for its fragrant white blossoms and sweet, tangy lemons. Suitable for both indoor and outdoor growing, this versatile tree flourishes  in containers and can easily be brought indoors during cooler months. It requires full sun to produce an abundance of fruit and enjoys well-drained soil. The Meyer Lemon is perfect for small spaces, patios, and sunny windows, adding both beauty and functionality to any home or garden. Regular feeding and watering will ensure healthy growth and a bountiful lemon harvest.",
    benefits: [
      `Growth Rate : Moderate, reaching a height of 6-10 feet when fully grown in containers.`,
      ` Care Tips : Provide regular watering and ensure it gets plenty of sunlight for optimal growth. Indoor plants benefit from rotating to ensure even light exposure.`,
      `Uses : Ideal for patios, balconies, or indoor growing, offering fresh lemons and a delightful citrus fragrance.`,
    ],
    size: ["medium", "large"],
    place: "petfriendly",
    tag: "best seller",
    reviewsCount: 145,
    rating: 4.7,
    img: meyer,
    preOrderStatus: true,
  },
];
