import { useNavigate } from "react-router-dom";

const OrderCart = ({ order }: any) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[908px] bg-[#F5F5F5] md:h-[244px] shrink-0 font-['Poppins']">
      <div className="flex flex-col gap-[16px] px-4 md:px-8 py-4 ">
        <div className="flex flex-wrap gap-[14px] items-start justify-between ">
          <div className="text-[#656565] font-medium text-[14px]  md:text-[16px]">
            Order ID: <span className="text-[#000]">{order.orderID}</span>
          </div>
          <div
            onClick={() => navigate("details")}
            className="cursor-pointer flex bg-white rounded-[28.017px] border-[#D9D9D9] border-solid border-[1px] items-center justify-center gap-[9.339px] py-2 px-6  md:py-[7px] md:px-[49px] text-[12px] md:text-[14px] font-medium"
          >
            Order Details
          </div>
        </div>

        <div className="text-[14px] md:text-[16px] font-normal">
          {order.deliveryDetail}
        </div>

        <div className="inline-flex flex-wrap items-center gap-6">
          {order.images.map((image: string) => (
            <img src={image} className="bg-no-repeat bg-cover w-[4rem]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
