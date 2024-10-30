import OrderTick from "../../svgIcons/OrderTick";

const DeliveryDetail = () => {
  return (
    <div className="h-[612px] relative rounded-[15px] border p-[50px] border-[#9e9e9e]">
      <div className="w-[825px] h-[337px] flex-col justify-start items-start gap-[25px] inline-flex">
        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
          <h4 className="self-stretch">
            <span className="text-[#656565] text-base font-normal font-['Poppins']">
              Order ID:
            </span>
            <span className="text-black text-base font-medium font-['Poppins']">
              {" "}
              SYN0114021
            </span>
          </h4>
          <h4 className="self-stretch">
            <span className="text-[#656565] text-base font-normal font-['Poppins']">
              Placed on:
            </span>
            <span className="text-black text-base font-medium font-['Poppins']">
              {" "}
              August 5, 2024
            </span>
          </h4>
          <h4 className="self-stretch">
            <span className="text-[#656565] text-base font-normal font-['Poppins']">
              Total amount paid:
            </span>
            <span className="text-black text-base font-medium font-['Poppins']">
              {" "}
              $525
            </span>
          </h4>
        </div>
        <div className="self-stretch h-52 flex-col justify-start items-start gap-[25px] flex">
          <h4 className="self-stretch">
            <span className="text-[#656565] text-lg font-normal font-['Poppins']">
              4 Items delivered on:
            </span>
            <span className="text-black text-lg font-medium font-['Poppins']">
              {" "}
              Tue, August 8, 2024
            </span>
          </h4>
          <div className="h-[156px] relative">
            <hr className="w-[27px] h-[0px] left-[12px] top-[30px] absolute origin-top-left rotate-90 border border-[#1b7725]" />
            <hr className="w-[27px] h-[0px] left-[12px] top-[75px] absolute origin-top-left rotate-90 border border-[#1b7725]" />

            <div className="w-[825px] h-11 justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative bg-white">
                  <OrderTick />
                </div>
              </div>
              <div className="w-[811px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[778px] justify-between items-center inline-flex">
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    Order confirmed
                  </h4>
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    August 5, 2024
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[825px] h-11 justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative bg-white">
                  <OrderTick />
                </div>
              </div>
              <div className="w-[811px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[778px] justify-between items-center inline-flex">
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    Shipped
                  </h4>
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    August 6, 2024
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[825px] h-11 justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative bg-white">
                  <OrderTick />
                </div>
              </div>
              <div className="w-[811px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[778px] justify-between items-center inline-flex">
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    Delivered
                  </h4>
                  <h4 className="w-[143px] text-[#656565] text-base font-normal font-['Poppins']">
                    August 8, 2024
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[794px] h-[149px] relative bg-neutral-100">
        <div className="w-[720px] left-[37px] top-[32px] absolute justify-between items-center inline-flex">
          <div className="justify-start items-center gap-[5px] flex">
            <h4 className="w-32 text-[#656565] text-base font-normal font-['Poppins']">
              Courier Partner:
            </h4>
            <h4 className="w-[143px] text-black text-base font-normal font-['Poppins']">
              FedEx
            </h4>
          </div>
          <h5 className="text-black text-base font-normal font-['Poppins']">
            #1606221321
          </h5>
        </div>
        <div className="w-[334px] h-[38px] px-[42.96px] py-[7.47px] left-[37px] top-[90px] absolute bg-white rounded-[15px] border border-[#d9d9d9] justify-center items-center gap-[9.34px] inline-flex">
          <button className="text-[#393939] text-sm font-normal font-['Poppins']">
            Download Invoice
          </button>
        </div>
        <div className="w-[334px] h-[38px] px-[42.96px] py-[7.47px] left-[423px] top-[90px] absolute bg-white rounded-[15px] border border-[#d9d9d9] justify-center items-center gap-[9.34px] inline-flex">
          <button className="text-[#393939] text-sm font-normal font-['Poppins']">
            Need Help
          </button>
        </div>
      </div>
      <hr className="w-[723px] h-[0px] left-[85px] top-[460px] absolute border border-[#8e8e8e]" />
    </div>
  );
};

export default DeliveryDetail;
