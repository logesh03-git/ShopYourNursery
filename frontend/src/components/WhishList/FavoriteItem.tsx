// import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import trash from "../../assets/icons/trash.png";
export default function FavoriteItem({ product, handleDelete }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/shop-plants/${product.id}`);
  };
  const isInStock = parseInt(product?.quantity) !== 0;
  return (
    <tr className="border py-10">
      <td className="align-middle">
        <div className="gap-x-10 flex justify-start items-start border-none cursor-pointer">
          <div className="flex gap-x-5 items-center justify-center">
            <div
              onClick={() => handleDelete(product.id)}
              className="ml-4 text-red-500 cursor-pointer"
            >
              <img src={trash} />
              {/* <DeleteIcon fontSize="large" /> */}
            </div>
            <div
              onClick={handleNavigate}
              className="h-[6rem] w-[4rem] rounded-xl bg-slate-200"
            >
              <img
                src={product.img}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 justify-start">
            <h2
              onClick={handleNavigate}
              className="font-semibold text-lg font-Poppins"
            >
              {product.title}
            </h2>
            <h5 className="font-Poppins font-medium">
              Price: ${product.price}
            </h5>
          </div>
        </div>
      </td>
      <td className={`px-[10rem]  font-medium font-Poppins align-middle ${!isInStock && "text-red-500"}`}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </td>
      <td className="w-[10rem] align-middle">
        <button
          onClick={handleNavigate}
          className="bg-[#7AA262] text-[#F3F3F3] font-bold py-1 rounded-[1.875rem] w-full"
        >
          Shop Now
        </button>
      </td>
    </tr>
  );
}
