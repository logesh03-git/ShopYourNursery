import { useEffect } from "react";
import OrderRow from "../Cart/OrderRow";
import SummaryCard from "./SummaryCard";
import { useLocation, useNavigate } from "react-router-dom";
export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state == null) {
      navigate("/shop-plants");
    }
  });

  const products =
    location.state &&
    JSON.parse(location.state.products).filter(
      (product: any) => product.count != 0
    );
  console.log(products);
  const priceSummary =
    location.state && JSON.parse(location.state.priceSummary);
  return (
    <div className="flex flex-col px-10 bg-[#F5F5F5]  max-w-[30rem] shadow-md w-full pt-10 pb-12">
      <h1 className="font-Poppins text-center text-xl font-medium">
        Order Summary
      </h1>
      <div className="flex flex-col gap-y-8 mt-8">
        {products &&
          products.map((product: any, index: number) => (
            <SummaryCard key={index} product={product} />
          ))}
      </div>
      <div className="flex flex-col gap-y-4 mt-12">
        <OrderRow
          title={"Sub total"}
          titleStyles="text-black"
          price={priceSummary && priceSummary.totalPrice}
        />
        <OrderRow
          title={"Shipping charges"}
          titleStyles="text-black"
          price={priceSummary && priceSummary.shippingCharges}
        />
        <OrderRow
          title={"Coupon Discount"}
          titleStyles="text-black"
          price={priceSummary && priceSummary.couponDiscount}
        />
        <div className="bg-black h-[0.05838rem] w-full"></div>
        <OrderRow
          title={"Grand Total"}
          titleStyles="text-black font-semibold"
          priceStyles="font-semibold"
          price={priceSummary && priceSummary.totalAmount}
        />
      </div>
    </div>
  );
}
