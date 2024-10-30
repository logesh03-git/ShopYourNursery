import { useNavigate, useLocation } from "react-router-dom";
import CareCard from "./CareCard";

const PlantCareProduct = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { img, title } = location.state;

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div
        className="flex items-center text-lg cursor-pointer self-start mb-5 text-gray-600"
        onClick={() => navigate(-1)}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAY1BMVEX///8AAAD4+PjJycnS0tLFxcXNzc309PQ+Pj43Nzc6Ojq9vb2VlZVTU1Pu7u51dXUODg6hoaGOjo7g4OCbm5taWlpHR0eysrKEhIRgYGAxMTEqKip8fHxsbGzm5uYUFBQeHh5j1k2vAAACWUlEQVR4nO2c607CQBBGu/QCRS0XL2irwPs/pSYYhc4kXX+0s6fOeYKTybffLM2GLHMcx3Ecx/k/HKs8Lxpri7+xOLydQ6hf76xF/sJyHy50T9Yq8Sxfww87a5lYrqVDgGT7VjrcW/tE0ZMOD9ZCMTQ96bCyNopASBNmLaUBue5nGtEhmnTya2b5LqX3C2urARpNemltNYBLT0WzmUemt0Rp5KQB0shMz0X6nlh5SOnkl8vxQ5l06pk+ykmnv1zmIp1+5TEz7dIToUqn3tMNUVqb9BMwHtvkM/3o0hPx+EasPEU6+YOoTdqlx8DjMRVzkT4hpZPvaWY8nqX0jijtkx4DpvQDULpASst4pL9c5iK9TV4aeRAzZY2nL10o0tZOw8gP1OlPOsteiNLZqifdFdZGMYjDeKqslSI4iFwjtPsR+doxAO2qFdpdaS01TFkL7ZqpvQa8u9e0CdOW2W5za6lhyrUsQIK2LEDXHg0lJFuAdi6P5InQJHLaLaC3c6ldu/ZY5HJLtoBsK9M+E7SV+zZAuxS/fxHa0GlX8kgStJUj2REKUIaEsCUrqU1YNxXzTqJoE9ZNpfQ2YNo5dN0wp600CUJb+eBA0JbTJmxJRbs9WEsNQ9WWN0BCSApoAbr2hEC1C+aWVLTPgAJUtDvXHguqtmySE0FbPpEiNEk1H21CSGazJc/J/3OSqr23dopAhmRtrRSDmHZnbRRFf9oM6/66ebH2ieRWG/Cw9cK1dk14I3rhV3sFeI/xQ/H9mngDeLN4RVPuNptdCViMtyyahhNpx3Ecx3HG4hPWfSLyRAQJ5wAAAABJRU5ErkJggg=="
          alt="Back Arrow"
          className="w-6 h-6 mr-2 ml-10"
        />
        Back
      </div>

      <img
        src={img}
        alt="Plant"
        className="rounded-lg w-[300px] h-[300px] object-cover"
      />
      <h1 className="text-[#447128] font-poppins font-bold text-2xl mb-8 mt-10">
        {title}
      </h1>

      {/* Overview Heading */}
      <h2 className="text-black-700 font-poppins font-bold text-xl mb-5 self-start ml-5">
        Overview
      </h2>

      {/* 3 Small Paragraphs */}
      <div className="text-black-600 font-poppins text-base space-y-4 self-start ml-5 max-w">
        <p>
          The Fiddle Leaf Fig, scientifically known as Ficus lyrata, is a
          stunning houseplant with large, violin-shaped leaves that can grow up
          to 18 inches long. Its glossy green foliage makes it a bold statement
          piece in any room, adding an air of elegance and sophistication.
          Native to the tropical rainforests of West Africa, the Fiddle Leaf Fig
          has become a popular choice for interior design enthusiasts and plant
          lovers alike. However, it’s important to note that this plant can be a
          bit temperamental and requires careful attention to thrive indoors.
        </p>
        <p>
          One of the key features of the Fiddle Leaf Fig is its air-purifying
          properties, making it a great addition to homes for improving indoor
          air quality. With the right care, it can grow several feet tall,
          creating a dramatic visual impact in your space.
        </p>
        <p>
          This plant thrives best in environments that mimic its natural
          habitat: warm, humid, and bright. It's ideal for placing in living
          rooms, bedrooms, or offices where it can receive plenty of indirect
          sunlight. While its care can be a bit demanding for beginners, the
          reward of a healthy, lush Fiddle Leaf Fig is well worth the effort.
          Regular pruning and wiping the leaves will help maintain its glossy
          appearance and keep it looking its best.
        </p>
      </div>
      <CareCard />
      <div
        className="bg-[#DDF2D0] mt-12 rounded-[15px] flex items-start p-4 gap-6"
        style={{ borderRadius: "15px" }}
      >
        {/* Bulb Icon */}
        {/* <img src={bulbIcon} alt="Bulb Icon" className="w-8 h-8" /> */}

        {/* Text Content */}
        <div>
          <h3 className="text-lg font-bold">Extra Tip</h3>
          <p className="text-base mt-2">
            Fiddle Leaf Figs love consistency! Once you've found the right spot
            for them, avoid moving them around too frequently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantCareProduct;
