import CarouselMain from "./CarouselMain";
import img1 from "../../assets/carousel/1.png";
import img2 from "../../assets/carousel/2.png";
import img3 from "../../assets/carousel/3.png";
import img4 from "../../assets/carousel/4.png";
export default function Carousel() {
  const config = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];
  const usableConfig = [config[config.length - 1], ...config, config[0]];
  return (
    <div className="flex justify-center max-w-[1600px] w-full">
      <div className="my-5 sm:mt-10 sm:mb-28 mx-[2vw] sm:mx-[6vw] max-w-[1200px]  overflow-hidden rounded-xl">
        <CarouselMain autoSlide={true} autoSlideInterval={3000}>
          {usableConfig.map((item, index) => (
            <img
              key={index}
              src={item.img}
              className="rounded-xl w-full h-fit object-contain"
            />
          ))}
        </CarouselMain>
      </div>
    </div>
  );
}
