import { useNavigate } from "react-router-dom";
import Favorite from "../../svgIcons/Favorite";
import Star from "../../svgIcons/Star";

export default function ProductCard({ product }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${product.id}`, { state: { name: product.title } });
  };
  return (
    <div className="shrink-0 flex flex-col gap-y-4 justify-start overflow-hidden relative cursor-pointer">
      <div
        onClick={handleNavigate}
        className="h-[15rem] w-[13rem] rounded-[0.9375rem] bg-slate-200 shadow-shadowDown"
      >
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/3665/6b0c/6916bf87e9e53802eeaf0c523ec63bb1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDsrf9ckQHF0Y~AGwSBTzUfceXZW2km1Gpargcuh4Zbazuoc0UCJG7IJqSAyNN53~irbZQc-jMk27NwuON2qFe1yuWbuFUrCrbhPsyYHjw7F3AjY9BZ8hMn-0PalwRaY4Y8IAAG1oK2lIJvw01ZP3~5gUMKBD~QWZpuCORa-OV7pjqhy6y~ScNt4p9A0H5J1O3wZKsoTUlV6fiCG49gS5il-sF-sakKvt9PkZTaPLOD7hkyiXtj06h-WNtsE-Kuk1skpmFUeoLtHBPGiWrHufM3w3JN6F8fPO1ExVTJms-wY~F3QAwdHia1KPeqhmN90ZEtYddw-uIHPT6GgLu4TSQ__"
          }
          className="object-cover rounded-[0.9375rem] h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-y-[0.4rem] w-full">
        <div className="flex justify-between  w-full">
          <div className="flex gap-x-1 items-center w-fit">
            <Star />
            <span className="text-[#7A7979] text-xs font-Poppins">
              {product.rating}/{product.reviewsCount} Reviews
            </span>
          </div>
          <div className="w-fit">
            <Favorite outlineColor="red" />
          </div>
        </div>
        <h4 className="font-Poppins font-medium">{product.title}</h4>
        <h2 className="font-bold text-base font-Poppins">${product.price}</h2>
      </div>
      <button
        onClick={handleNavigate}
        className="bg-[#7AA262] text-[#F3F3F3] text-xl font-bold py-2 rounded-[1.875rem] w-full"
      >
        Shop Now
      </button>
      <div className="flex gap-x-2 items-center rounded-[1.25rem] bg-[rgba(255,255,255,0.60)] hover:bg-white  absolute top-3 right-2 px-2 py-1 text-xs">
        {product.placeIcon}
        <span>{product.place}</span>
      </div>
    </div>
  );
}
