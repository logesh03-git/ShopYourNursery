import image1 from "../../assets/blog/image24.png";
import image2 from "../../assets/blog/image25.png";
import image3 from "../../assets/blog/image27.png";
import image4 from "../../assets/blog/image29.png";
import image5 from "../../assets/blog/image30.png";
import image6 from "../../assets/blog/image31.png";
import image7 from "../../assets/blog/image32.png";
import image8 from "../../assets/blog/image33.png";
import image9 from "../../assets/blog/image34.png";

interface ImageData {
  Name: string;
  imageUrl: string;
  title: string;
}

interface VegetableImage {
  Tagline: string;
  imageUrl: string;
  title: string;
  PostDetail: string;
  IntroduceBy: string;
}

const Flowerimages: ImageData[] = [
  { Name: "Gardening", title: "image 1", imageUrl: image2 },
  { Name: "Vegetables", title: "image 2", imageUrl: image3 },
  { Name: "Flowers", title: "image 3", imageUrl: image4 },
  { Name: "Perennials", title: "image 4", imageUrl: image5 },
  { Name: "Fruits", title: "image 5", imageUrl: image6 },
];

const Vegetableimages: VegetableImage[] = [
  {
    Tagline: "How to Grow and Care for Lacecap Hydrangea",
    title: "image 1",
    imageUrl: image7,
    PostDetail: "Posted in gardening",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "Miniature Baby Vegetables",
    title: "image 2",
    imageUrl: image8,
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "When and How to Amend Soil",
    title: "image 3",
    imageUrl: image9,
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "How to Grow and Care for Lacecap Hydrangea",
    title: "image 1",
    imageUrl: image7,
    PostDetail: "Posted in gardening",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "Miniature Baby Vegetables",
    title: "image 2",
    imageUrl: image8,
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "When and How to Amend Soil",
    title: "image 3",
    imageUrl: image9,
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
];

function Blog() {
  return (
    <section className="">
      <div className="Hero-image-section flex relative items-center justify-center w-full ">
        <img src={image1} alt="PlantImage" className="w-full h-auto" />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#fff] rounded-[20px] py-[50px] px-[18px]">
          <div className="flex items-center justify-center gap-[20px] self-stretch flex-col">
            <h2 className="text-[18px] text-center font-semibold leading-normal">
              Garden Guide
            </h2>
            <p className="text-[14px]  font-normal w-[612px] text-center ">
              Tend your garden like a pro with help from our expert writers and
              Master Gardeners. Learn how to do everyday tasks, pick out the
              best plants, and everything in between.
            </p>
          </div>
        </div>
      </div>

      <div className="Categoies-section w-full bg-[#D7FFBF] flex flex-col  items-start gap-[60px] py-[30px] px-[50px]">
        <div className="flex w-full pl-[32.5px] justify-end items-center gap-[48.5px]">
          <h1 className="text-[#2E5A13] text-[60px] font-bold font-['Philosopher']">
            Categoies
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1091"
            height="5"
            viewBox="0 0 1093 5"
            fill="none"
          >
            <path
              d="M2 3L1093 2.96636"
              stroke="#69BA38"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-[90px] self-stretch">
          {Flowerimages.map((image) => (
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                src={image.imageUrl}
                alt={image.Name + "Plant"}
                title={image.title}
                className="rounded-[50%] repeat-none"
              />
              <h3 className="text-[18px] font-semibold leading-normal text-center">
                {image.Name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="Vegetable-section flex flex-wrap py-[40px] px-[50ox] items-center justify-center gap-[41px]">
        {Vegetableimages.map((vegetable) => (
          <div className="flex flex-col gap-[30px] items-start">
            <img
              className="w-[381px] self-stretch rounded-[15px] bg-no-repeat"
              src={vegetable.imageUrl}
              alt={vegetable.title}
            />
            <div>
              <span className="text-[14px] font-normal text-[#969696]  leading-normal">
                {vegetable.PostDetail}
              </span>
              <h1 className="text-[18px] font-semibold text-center ">
                {vegetable.Tagline}
              </h1>
              <span className="text-[14px] font-normal text-[#969696]  leading-normal">
                {vegetable.IntroduceBy}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
