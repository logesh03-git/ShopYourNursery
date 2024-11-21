import { useNavigate } from "react-router-dom";
import Favorite from "../../svgIcons/Favorite";
import Star from "../../svgIcons/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { iconMap } from "../../constants/iconMapping";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../contexts/WishListProvider";
import { useCart } from "../../hooks/useCart";
import CartToast from "../Cart/modal/CartToast";
export default function ProductCard({ product }: any) {
  const { handleFavorite, isItemInWishList } = useContext(WishListContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/shop-plants/${product._id}`);
  };
  const Icon = iconMap.get(product.place)?.icon || "";
  const Name = iconMap.get(product.place)?.name;
  const { handleAddToCart } = useCart();
  const [toast, setToast] = useState("");
  const res = isItemInWishList(product._id);
  const [isLiked, setIsLiked] = useState(res);
  useEffect(() => {
    setIsLiked(res);
  }, [res]);
  const handleAddToFavorite = () => {
    const msg = handleFavorite(product);
    setIsLiked((prev: any) => !prev);
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };
  const handleAddToCartRandom = async () => {
    const msg = handleAddToCart(product, 0);
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };
  return (
    <div className="shrink-0 flex flex-col gap-y-4 justify-start relative cursor-pointer w-[11rem] max-w-[11rem]  border-none overflow-hidden border-black h-fit">
      <div className="flex h-[14rem] w-[11rem] rounded-[0.9375rem] bg-slate-200 relative over">
        <img
          onClick={handleNavigate}
          src={product.imgs.length ? product.imgs[0] : ""}
          className="object-cover rounded-[0.9375rem] h-full w-full"
        />
        <div
          onClick={handleAddToCartRandom}
          className="rounded-full absolute bottom-2 right-2 bg-[rgba(255,255,255,0.60)] hover:bg-white text-xs shrink-0 p-2"
        >
          <ShoppingCartOutlinedIcon fontSize="small" />
        </div>
        {toast && <CartToast message={toast} />}
      </div>
      <div className="flex flex-col gap-y-[0.4rem] w-full max-w-[13rem]">
        <div className="flex justify-between  w-full items-center">
          <div className="flex gap-x-1 items-center w-fit">
            <Star />
            <span className="text-[#7A7979] text-[0.65rem] font-Poppins">
              {product.rating}/{product.reviewsCount} Reviews
            </span>
          </div>
          <div onClick={handleAddToFavorite} className="w-fit">
            <Favorite
              size={15}
              outlineColor="black"
              fill={isLiked ? "red" : ""}
            />
          </div>
        </div>
        <h4 className="font-Poppins font-medium text-sm text-nowrap truncate">
          <abbr title={product.title} className="no-underline">
            {product.title}
          </abbr>
        </h4>
        <h2 className="font-bold text-base font-Poppins">${product.price}</h2>

        <h6
          className={`text-xs font-Poppins ${
            product?.preOrderStatus ? "visible" : "invisible"
          }`}
        >
          Pre Order Available
        </h6>
      </div>
      <button
        onClick={handleNavigate}
        className="bg-[#7AA262] text-[#F3F3F3] font-bold py-1 rounded-[1.875rem] w-full"
      >
        Shop Now
      </button>
      <div className="flex gap-x-1 items-center rounded-[1.25rem] bg-[rgba(255,255,255,0.60)] hover:bg-white  absolute top-3 right-2 px-2 py-[2px] text-xs">
        {Icon && <Icon size={"18"} />}
        <span className="text-[0.6rem]">{Name}</span>
      </div>
    </div>
  );
}
