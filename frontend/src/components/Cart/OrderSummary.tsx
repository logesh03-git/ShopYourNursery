import OrderRow from "./OrderRow";
import securityIcon from "../../assets/icons/security.png";
import { useNavigate } from "react-router-dom";
type orderSummaryPropsType = {
  priceSummary: {
    shippingCharges: number;
    couponDiscount: number;
    totalAmount: number;
    totalPrice: number;
    totalItems: number;
  };
  products: any;
};
export default function OrderSummary({
  priceSummary,
  products,
}: orderSummaryPropsType) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-8 px-10 bg-[#F5F5DC] my-10 max-w-[24rem] shadow-md">
      <h1 className="font-Poppins text-center text-xl font-medium">
        Order Summary
      </h1>
      <div className="mt-12 mb-8">
        <OrderRow title={"Total no.of Items"} qty={priceSummary.totalItems} />
      </div>
      <div className="flex flex-col gap-y-7 mb-7">
        <h2 className="font-Poppins font-medium">Price Details</h2>
        <div className="flex flex-col gap-y-3">
          <OrderRow title={"Total price"} price={priceSummary.totalPrice} />
          <OrderRow
            title={"Coupon Discount"}
            price={priceSummary.couponDiscount}
          />
          <OrderRow
            title={"Shipping Charges"}
            price={priceSummary.shippingCharges}
          />
        </div>
      </div>
      <div className="bg-[#A5A5A5] h-[0.05838rem] w-full"></div>
      <div className="mt-7">
        <OrderRow
          title={"Total Amount"}
          price={priceSummary.totalAmount}
          priceStyles="font-semibold"
        />
      </div>
      <div className="mt-8">
        <button
          onClick={() =>
            navigate("/shipping-address", {
              state: {
                products: JSON.stringify(products),
                priceSummary: JSON.stringify(priceSummary),
              },
            })
          }
          className="bg-[#7AA262] w-full py-2 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center"
        >
          Proceed to Checkout
        </button>
      </div>
      <div className="mt-20 mb-8 flex gap-x-2 items-center justify-center">
        <img src={securityIcon} className="w-5 h-5" />
        <div className="text-[#868686] font-Poppins text-[0.6rem]">
          Safe and secure payments | 100% Authentic products
        </div>
      </div>
    </div>
  );
}
