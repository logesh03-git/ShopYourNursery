import BlackDot from "../../svgIcons/BlackDot";
import Star from "../../svgIcons/Star";
import waterdrop from "../../assets/producticons/water.png";
import sun from "../../assets/producticons/sun.png";
import Button from "./Button";
import { useContext, useState } from "react";
import IconVthText from "./IconVthText";
import Shipping from "../../svgIcons/Shipping";
import Replacement from "../../svgIcons/Replacement";
import Leaf from "../../svgIcons/Leaf";
import PreOrder from "../../svgIcons/PreOrder";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Favorite from "../../svgIcons/Favorite";
import { WishListContext } from "../../contexts/WishListProvider";
import { iconMap } from "../../constants/iconMapping";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PreOrderModal from "../Modals/PreOrderModal";
import { usePreOrder } from "../../hooks/usePreOrder";
export default function ProductDetails({ product }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wishList, handleFavorite } = useContext(WishListContext);
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();
  const { handleAddToPreOrderCart } = usePreOrder();
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [selectSize, setSize] = useState(-1);
  const pImgs = product?.imgs?.length ? product.imgs : [];
  const imgs = [product.img, ...pImgs];
  const sizeBtn = {
    active: "border-[#1F4508] text-[#1F4508] ",
    disabled: "border-[#C7C8C6] text-[#BEC0BD]",
  };
  const handleChangeImg = (index: number) => {
    setImgIndex(index);
  };
  const handleAddProduct = (flag: string) => {
    selectSize !== -1
      ? flag == "cart"
        ? handleAddToCart(product, selectSize)
        : handleAddToPreOrderCart(product, selectSize)
      : alert("Select size to Add Item to Cart");
  };
  const handleBuy = () => {
    if (selectSize !== -1) {
      return navigate("/shipping-address", {
        state: {
          products: JSON.stringify([
            {
              ...product,
              selectedSize: product.size[selectSize],
              count: 1,
            },
          ]),
          priceSummary: JSON.stringify({
            totalPrice: product.price,
            totalItems: 0,
            shippingCharges: 5,
            couponDiscount: 0,
            totalAmount: 5 + product.price,
          }),
        },
      });
    }
    alert("select plant size");
  };
  const Icon = iconMap.get(product.place).icon;
  const IconName = iconMap.get(product.place).name;
  return (
    <div className="flex gap-x-16 mb-10">
      <div className="flex flex-col gap-y-5 mt-10">
        {imgs.map((img, index) => (
          <div
            key={index}
            onClick={() => handleChangeImg(index)}
            className="w-[7rem] h-fit cursor-pointer"
          >
            <img
              className={`${
                imgIndex == index ? "border-[1.5px] border-[#59883D]" : ""
              } object-cover`}
              src={img}
            />
          </div>
        ))}
      </div>
      <div className="max-w-[24rem] w-full">
        <div className="w-[24rem] max-h-[32rem] h-fit bg-slate-200  rounded-[0.9375rem] relative">
          <img
            className="rounded-[0.9375rem] object-contain w-full"
            src={imgs[imgIndex]}
          />
          <div
            onClick={() => handleFavorite(product.id)}
            className="absolute bg-white/80 cursor-pointer top-8 right-8 rounded-full overflow-hidden size-[2.3rem] flex justify-center items-center pt-1"
          >
            <Favorite
              size={22}
              outlineColor="black"
              fill={wishList.includes(product.id) ? "red" : ""}
            />
          </div>
        </div>
        {/* <div className="font-Poppins font-medium mt-10">
          {product.description}
        </div> */}
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-6 w-full max-w-[30rem]">
          <div className="">
            <h2 className="font-semibold font-Poppins text-xl">
              {product.title}
            </h2>
            <div className="flex gap-x-1 items-center w-fit">
              <Star size={"22"} />
              <span className="text-[#7A7979] text-sm font-Poppins">
                {product.rating}/{product.reviewsCount} Reviews
              </span>
            </div>
          </div>
          <div className="flex gap-x-4 items-center font-Poppins">
            <span className="text-[#E11818] text-xl">
              $&nbsp;
              <span className="line-through  text-xl">
                {product.markedPrice}
              </span>
            </span>
            <span className="text-xl">
              $&nbsp;
              <span className="">{product.price}</span>
            </span>
          </div>
          <ul className="flex flex-col gap-y-2 list-none">
            <li className="flex gap-x-6 items-center ">
              <BlackDot />{" "}
              <div className="flex gap-x-2 items-center">
                <Icon size={"22"} />
                <span className="font-medium font-Poppins">{IconName}</span>
              </div>
            </li>
            <li className="flex gap-x-6 items-center ">
              <BlackDot />{" "}
              <div className="flex gap-x-2 items-center">
                <img src={waterdrop} className="w-5 h-5" />
                <span className="font-medium font-Poppins">
                  Water 3-4 Times In Week{" "}
                </span>
              </div>
            </li>
            <li className="flex gap-x-6 items-center ">
              <BlackDot />{" "}
              <div className="flex gap-x-2 items-center">
                <img src={sun} className="w-5 h-5" />
                <span className="font-medium font-Poppins">
                  Direct Sunlight
                </span>
              </div>
            </li>
          </ul>
          <div className="flex flex-col gap-y-4">
            <h3 className="font-Poppins font-semibold text-lg">
              Select Plant Size
            </h3>
            <div className="flex gap-x-3">
              {product.size.map((size: any, index: number) => (
                <button
                  onClick={() => setSize(index)}
                  key={index}
                  className={`p-[0.6rem] border rounded-xl ${
                    selectSize == index ? sizeBtn.active : sizeBtn.disabled
                  } font-medium text-lg`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Button
              onClick={() => handleAddProduct("cart")}
              className="bg-[#9FDD79] text-white"
              text="Add To Cart"
            />
            {!product.preOrderStatus ? (
              <Button
                onClick={handleBuy}
                className="bg-[#7AA262] text-[#F3F3F3]"
                text="Buy Now"
              />
            ) : (
              <div
                onClick={() => setIsModalOpen(true)}
                className="flex h-[3.3rem] items-center overflow-hidden"
              >
                <div
                  className={`w-full h-full text-center font-Poppins cursor-pointer font-bold text-lg py-3 px-6 pl-20 rounded-l-full bg-[#7AA262] text-[#F3F3F3] flex items-center justify-center`}
                >
                  Pre Order
                </div>
                <button className="w-[5rem] h-full text-center font-Poppins cursor-pointer font-bold text-xl py-3 px-6 rounded-r-full bg-[#7AA262] text-[#F3F3F3] border-l border-l-white flex justify-center items-center hover:bg-[#7AA262]/[0.9]">
                  <ArrowDropDownIcon fontSize="large" />
                </button>
              </div>
            )}

            <div>
              {isModalOpen && (
                <PreOrderModal
                  onClose={() => setIsModalOpen(false)}
                  handleBuy={handleBuy}
                  handleAddToPreOrder={() => handleAddProduct("preOrderCart")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <IconVthText
            title="Free Shipping Above $299"
            icon={<Shipping size={"40"} />}
          />
          <IconVthText
            title="Replacement Available"
            icon={<Replacement size={"40"} />}
          />
          <IconVthText title="Expert Guidance" icon={<Leaf size={"40"} />} />
          {product.preOrderStatus && (
            <IconVthText
              title="Pre Order Available"
              icon={<PreOrder size={"40"} />}
            />
          )}
        </div>
      </div>
    </div>
  );
}
