import Indoor from "../../svgIcons/Indoor";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

type cartCardPropsType = {
  product: any;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleDelete: () => void;
};
export default function CartCard({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
}: cartCardPropsType) {
  return (
    <div className="bg-[#FFFFFF] h-[10rem] max-w-[45rem] w-full flex gap-x-4 p-3 pr-6 items-center">
      <div className="bg-slate-300 rounded-2xl w-[6.5rem] h-[8rem] shrink-0 overflow-hidden">
        <img src={product.img} className="object-cover rounded-2xl" />
      </div>
      <div className="w-full flex flex-col gap-y-9 border-none border-black">
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex justify-between  w-full">
            <div className="flex gap-x-8 items-center">
              <h2 className="font-Poppins text-sm truncate text-nowrap max-w-[16rem]">
                {product.title}
              </h2>
              <div className="bg-[#F5F5DC] flex gap-x-2 items-center w-fit px-3 py-1 rounded-3xl">
                <Indoor size={"16"} />
                <h5 className="text-xs font-medium">Indoor</h5>
              </div>
            </div>
            <div className="flex gap-x-2 items-center w-fit">
              <h4 className="text-[#363636] font-Poppins text-sm">Price:</h4>
              <span className="font-medium font-Poppins text-[1.1rem]">
                ${product.price}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <h6 className="text-sm">Size:</h6>

              <div className="flex gap-x-2">
                <div
                  className={`rounded-2xl text-xs border-[1px] border-[#8EBD72] px-2 py-1 [box-shadow:0px_1.349px_1.349px_0px_rgba(0,0,0,0.25)]  bg-[#88B06F] text-white cursor-pointer`}
                >
                  {product.selectedSize}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-2 items-center">
            <h6 className="text-sm">Qty:</h6>
            <div className="bg-[#EEEEEE] h-[1.5rem] w-[4.8rem] rounded-md flex items-center overflow-hidden border-[0.5px] border-[#959595] cursor-pointer">
              <div
                onClick={handleIncrement}
                className="w-[1.6rem]  h-fit flex justify-center text-xs"
              >
                <LuPlusCircle />
              </div>
              <div className="w-[1.6rem] h-fit border-x-[0.5px] border-x-[#959595] flex justify-center font-semibold">
                {product.count}
              </div>
              <div
                onClick={handleDecrement}
                className="w-[1.6rem] h-fit flex justify-center text-xs"
              >
                <LuMinusCircle />
              </div>
            </div>
          </div>
          <div onClick={handleDelete} className="cursor-pointer">
            <DeleteOutlineOutlinedIcon className="text-[#EC3123]" />
          </div>
        </div>
      </div>
    </div>
  );
}
