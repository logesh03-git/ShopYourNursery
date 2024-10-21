import { useNavigate } from "react-router-dom";
import orderplaced from "../../assets/orderplaced.png";
import Shipping from "../../svgIcons/Shipping";
import OrderSummary from "../Address/OrderSummary";
export default function OrderPlaced() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full px-[4vw] max-w-[1600px]">
      <div className="max-w-[1600px] w-full flex flex-col items-center justify-center mt-8 mb-5">
        <div className="max-w-[45rem] px-[5vw] sm:px-0 flex flex-col items-center gap-y-5">
          <div className="w-[10rem]">
            <img src={orderplaced} className="object-contain" />
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center ">
            <h2 className="font-Poppins font-medium text-2xl text-center">
              Thank you for placing your order!
            </h2>
            <div className="text-sm sm:text-base text-center font-Poppins">
              Your payment has been successful. A confirmation will be sent to
              your email/ phone number
            </div>
          </div>
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
      <div className="bg-[#DDF2D0] h-fit w-full my-10 rounded-xl flex gap-x-5 items-center px-20 py-20 justify-around">
        <div className="flex flex-col gap-y-8">
          <div className="flex font-Poppins items-center gap-x-2">
            <h3 className="font-medium">Transaction Date: </h3>
            <p>30-09-2024</p>
          </div>
          <div className="flex font-Poppins items-center gap-x-2">
            <h3 className="font-medium">Order ID: </h3>
            <p>#SYN034127</p>
          </div>
          <div className="flex font-Poppins items-center gap-x-2">
            <h3 className="font-medium">Payment method: </h3>
            <p>Debit card Payment</p>
          </div>
          <div className="flex font-Poppins items-center gap-x-2">
            <h3 className="font-medium">Shipping Address: </h3>
            <p>1-330/A, Blue Oliver Street, Texas</p>
          </div>
        </div>
        <div className="bg-[#C2D9B3BF] w-[28rem] h-[15rem] rounded-2xl px-8 py-6 flex flex-col items-center gap-y-5 justify-center">
          <div>
            <Shipping />
          </div>
          <div className="text-[#7A7A7A] text-xs">
            We deliver your products safely within 3-5 business days
          </div>
          <div className="flex font-Poppins items-center gap-x-2">
            <h3 className="font-medium">Estimated delivery by: </h3>
            <p>05-10-2024</p>
          </div>
          <button className="bg-[#7AA262] w-full py-2 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center max-w-[20rem]">
            Track your Order
          </button>
        </div>
      </div>
      <button
        onClick={() => navigate("/shop-plants")}
        className="bg-[#F5F5DC] max-w-[15rem] font-Poppins flex justify-center items-center py-2 px-4 rounded-[1.875rem] shadow-shadowDown "
      >
        Continue Shopping
      </button>
    </div>
  );
}
