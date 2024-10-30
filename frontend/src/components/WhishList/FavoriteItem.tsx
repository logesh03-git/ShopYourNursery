import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
export default function FavoriteItem({ product, handleDelete }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/shop-plants/${product.id}`);
  };
  return (
    <div className="gap-x-10 flex justify-start items-center border-none cursor-pointer">
      <div
        onClick={handleNavigate}
        className="h-[10rem] w-[8rem] rounded-xl bg-slate-200"
      >
        <img
          src={product.img}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2
          onClick={handleNavigate}
          className="font-semibold text-lg font-Poppins"
        >
          {product.title}
        </h2>
        <h5 className="font-Poppins font-medium">Price: ${product.price}</h5>
        <div
          onClick={() => handleDelete(product.id)}
          className="ml-4 text-red-500 self-start cursor-pointer"
        >
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}
