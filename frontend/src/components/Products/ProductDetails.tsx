import BlackDot from "../../svgIcons/BlackDot";
import Star from "../../svgIcons/Star";
import pet from "../../assets/producticons/pet.png";
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
export default function ProductDetails({ product }: any) {
  const { wishList, handleFavorite } = useContext(WishListContext);
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [selectSize, setSize] = useState(-1);
  const imgs = [
    product.img,
    "https://s3-alpha-sig.figma.com/img/3665/6b0c/6916bf87e9e53802eeaf0c523ec63bb1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y04suTkeBCQJEgXC3iPQwB2CcH-fTUl5wBnF~DQH0TWkl~a-bnIh0DECApTWmh3vrmvmM7fyo4TnXDlPPSOCEv7Ya9TCqiC6tAKza6Xz5POvyMCjS7U4tFeM4SyKMF9MZOXl-SpEy7zEu-vJyHE4-h7JwBdQlvlJ1wgkzNfngNZk237JWavKFGeGjoazoIrnf48zmks0d4UqW-20lHra9PI6IF9A8HXVc5bQy2MYBY5cK4pAQpWz~kKaHQGfTQboshM4NgLZyiOzRIGKi93Oa3MdArkF7oHwbgvOGaJRhge0M6u0seid1k5htK54JvQDqlL5KKDRuMpFJgPm-XBK7A__",
    "https://s3-alpha-sig.figma.com/img/0ba1/76a6/24740c8e3cfac0f483ee29483b92df7b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BY3FtYphCoQaUtIY3oOW-Pmk7D3MI8WxJxiyHXlpo6YQmTyruclqdFXN8YdYKkOZ7mqLZvRFoqOfq5ggFlMjYCOBx-eU6D9DU9Atl6uO~refQI6PbGlIZPMYYRnbnzHjS9hY6y8T3vFNtZzxSDwwdSYhjqB9sE~HhymIsMv~xok4IfQVUIDfjbanKWLgDxKte23zymtN~QhCcqmUMhKvSeVVDGS1Dsj5rXIbnCqf~0Ph1L7Wg9McMhD2Dng6Js9c3GmH4bU9dUVHKBA3IUQKO~rjuravNZI3L7aOobQZv-Gi8GrqQothS60isl2QrV8EZEN01~9gAlzm5CMXgGaUWw__",
    "https://s3-alpha-sig.figma.com/img/e284/a807/6bfcf242a851b0ced5b8f7c546d691c0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFgoDfI~q7VuMFyl~5qzdETk09XvSEn8Q6X3C1VJgJ5PMpkYKrAVwMaspj5pPBTuWUqLcHlpPZuTUjfvCZlDAgFqF6QRkJlNUQvbLensqU2cy4TlH138NI4ihTNWcu1Zl20W~daNXE3pW2~jSDE3HJaz8vuyQu-aAis-9t~WyaeUKTOzQI0oViDEcx~j2xhd7AHapabaj40jelRMhczTFdt8EEpCwSL2tAgbYBpH8nA4uRlGdC676BqEYAvajxflalwnPgOy7iz46D4f0kd5Y5o5ArQrqnsTfZa2q-b59HCKuYN2yTD-G5SrEFCI9VUiT~E0AHClWHUHs8k9ay860w__",
  ];
  const sizeBtn = {
    active: "border-[#1F4508] text-[#1F4508] ",
    disabled: "border-[#C7C8C6] text-[#BEC0BD]",
  };
  const handleChangeImg = (index: number) => {
    setImgIndex(index);
  };
  const handleAddProduct = () => {
    console.log(selectSize);
    selectSize !== -1
      ? handleAddToCart(product, selectSize)
      : alert("Select size to Add Item to Cart");
  };
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
            className="rounded-[0.9375rem] object-contain"
            src={imgs[imgIndex]}
          />
          <div
            onClick={() => handleFavorite(product.id)}
            className="absolute bg-white/80 cursor-pointer top-8 right-8 rounded-full overflow-hidden size-[2.3rem] flex justify-center items-center pt-1"
          >
            <Favorite
              size={22}
              outlineColor="red"
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
              <span className="line-through  text-xl">180.90</span>
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
                <img src={pet} className="w-5 h-5" />
                <span className="font-medium font-Poppins">
                  {product.place}
                </span>
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
              onClick={handleAddProduct}
              className="bg-[#9FDD79] text-white"
              text="Add To Cart"
            />
            <div>
              <Button
                onClick={() => {
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
                }}
                className="bg-[#7AA262] text-[#F3F3F3]"
                text="Buy Now"
              />
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
