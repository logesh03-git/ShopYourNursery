const Shippingaddress = () => {
  return (
    <div className="w-[908px] h-[234px] my-[100px] pl-[42px] pr-[41px] py-[39px] bg-white rounded-[15px] border border-[#9e9e9e] justify-center items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-black text-lg font-medium font-['Poppins']">
          Shipping Address
        </div>
        <div className="h-[105px] flex-col justify-start items-start gap-3 flex">
          <h4 className="self-stretch text-[#8b8b8b] text-lg font-normal font-['Poppins']">
            Ralph Edwards
          </h4>
          <h4 className="self-stretch text-[#8b8b8b] text-lg font-normal font-['Poppins']">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </h4>
          <h4 className="self-stretch text-[#8b8b8b] text-lg font-normal font-['Poppins']">
            (405) 555-0128
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Shippingaddress;
