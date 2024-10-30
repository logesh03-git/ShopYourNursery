import { plantProducts } from "../../../constants/tempProducts";
import { useNavigate } from "react-router-dom";

const CareProduct = () => {
  const navigate = useNavigate();

  const handlePlantClick = (plant: any) => {
    navigate("/plant-care/details", {
      state: { img: plant.img, title: plant.title },
    }); // Pass the plant object
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-7xl px-4">
      {plantProducts.map((plant, index) => (
        <div
          key={index}
          className="m-4 cursor-pointer"
          onClick={() => handlePlantClick(plant)}
        >
          <img
            src={plant.img}
            alt={plant.title}
            className="rounded-lg w-[200px] h-[200px] object-cover"
          />
          <p className="mt-4 mr-14 text-center font-poppins text-black">
            {plant.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CareProduct;
