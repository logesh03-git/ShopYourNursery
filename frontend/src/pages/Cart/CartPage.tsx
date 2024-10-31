import { useState } from "react";
import EmptyCart from "../../components/Cart/EmptyCart";
import ProductsCart from "../../components/Cart/ProductsCart";
import { useCart } from "../../hooks/useCart";
import { usePreOrder } from "../../hooks/usePreOrder";

export default function CartPage() {
  const [orderBtn, setOrderBtn] = useState(0);
  const { cart } = useCart();
  const { preOrderCart } = usePreOrder();
  return (
    <div className="max-w-[1600px] w-full">
      <div className="px-[6vw] pt-5 flex justify-start items-center gap-x-[15rem]">
        <div className="flex justify-start items-center gap-x-4">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/91e5/658e/c9a45f9634e3e9c60c1e935d87dfa77b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LWO-Cbvy8~cPVEMhlumLRZeeRgU5Ckc5ljrDIgumMb637nyUQnEm6fL0b1-alKoVYOMJip~WIYzGAzTAge3GYlUIRnd2YoTovKTyuW6TKYqgK0D5d9g7ETUZD5ZDxxEvBY83imQ8~DSWHIT4P9Jvok4b0CWczBrHzpjjz4kMHz~gtwN8WWjA8pJZmB7k1ngP98sse0i92uFynMF-jYMfXPn1s3RgEb6qJPqhGwSlSsLorE6eXTix3OhflL8MhgRf61W5Kn2EqjoSwbjxRRcki~xskUOvPTrRE0ROR2VJOXeYuU4dhsUDapTzomh~6HNr-1GX2YiPlXcYXpC5u432mQ__"
            }
            className="w-[2.5rem]"
          />
          <span>Your Cart</span>
        </div>
        <div className="flex items-center gap-x-8">
          <button
            onClick={() => setOrderBtn(0)}
            className={` w-[10rem] h-[2.3rem] py-1 font-Poppins ${
              orderBtn == 0
                ? "bg-[#9CBE87] border border-[#589930] text-white rounded-xl"
                : "text-back"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setOrderBtn(1)}
            className={` w-[10rem] h-[2.3rem] py-1 font-Poppins ${
              orderBtn == 1
                ? "bg-[#9CBE87] border border-[#589930] text-white rounded-xl"
                : "text-back"
            }`}
          >
            Pre-Orders
          </button>
        </div>
      </div>
      {orderBtn === 0 ? (
        cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <ProductsCart cart={cart} flag={"cart"} />
        )
      ) : preOrderCart.length === 0 && orderBtn === 1 ? (
        <EmptyCart />
      ) : (
        <ProductsCart cart={preOrderCart} flag={"preorder"} />
      )}
    </div>
  );
}
