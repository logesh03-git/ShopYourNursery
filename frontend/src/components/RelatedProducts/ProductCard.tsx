import { useNavigate } from "react-router-dom";
import Favorite from "../../svgIcons/Favorite";
import Star from "../../svgIcons/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { iconMap } from "../../constants/iconMapping";
import { useContext } from "react";
import { WishListContext } from "../../contexts/WishListProvider";
export default function ProductCard({ product }: any) {
  const { wishList, handleFavorite } = useContext(WishListContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/shop-plants/${product.id}`);
  };

  const Icon = iconMap.get(product.place)?.icon;
  const Name = iconMap.get(product.place)?.name;
  return (
    <div className="shrink-0 flex flex-col gap-y-4 justify-start relative cursor-pointer max-w-[11rem] w-full border-none overflow-hidden border-black">
      <div className="flex h-[14rem] w-[11rem] rounded-[0.9375rem] bg-slate-200 relative over">
        <img
          onClick={handleNavigate}
          src={
            product.img
              ? product.img
              : "https://s3-alpha-sig.figma.com/img/3665/6b0c/6916bf87e9e53802eeaf0c523ec63bb1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDsrf9ckQHF0Y~AGwSBTzUfceXZW2km1Gpargcuh4Zbazuoc0UCJG7IJqSAyNN53~irbZQc-jMk27NwuON2qFe1yuWbuFUrCrbhPsyYHjw7F3AjY9BZ8hMn-0PalwRaY4Y8IAAG1oK2lIJvw01ZP3~5gUMKBD~QWZpuCORa-OV7pjqhy6y~ScNt4p9A0H5J1O3wZKsoTUlV6fiCG49gS5il-sF-sakKvt9PkZTaPLOD7hkyiXtj06h-WNtsE-Kuk1skpmFUeoLtHBPGiWrHufM3w3JN6F8fPO1ExVTJms-wY~F3QAwdHia1KPeqhmN90ZEtYddw-uIHPT6GgLu4TSQ__"
          }
          className="object-cover rounded-[0.9375rem] h-full w-full"
        />
        <div className="rounded-full absolute bottom-2 right-2 bg-[rgba(255,255,255,0.60)] hover:bg-white text-xs shrink-0 p-2">
          <ShoppingCartOutlinedIcon fontSize="small" />
        </div>
      </div>
      <div className="flex flex-col gap-y-[0.4rem] w-full max-w-[13rem]">
        <div className="flex justify-between  w-full items-center">
          <div className="flex gap-x-1 items-center w-fit">
            <Star />
            <span className="text-[#7A7979] text-[0.65rem] font-Poppins">
              {product.rating}/{product.reviewsCount} Reviews
            </span>
          </div>
          <div onClick={() => handleFavorite(product.id)} className="w-fit">
            <Favorite
              size={15}
              outlineColor="red"
              fill={wishList.includes(product.id) ? "red" : ""}
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
        <Icon size={"18"} />
        <span className="text-[0.6rem]">{Name}</span>
      </div>
    </div>
  );
}
