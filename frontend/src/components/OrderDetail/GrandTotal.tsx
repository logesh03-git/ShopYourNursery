
const GrandTotal = () => {
    return(
        <div className="w-[908px] h-[340px] px-[45px] py-[46px] rounded-[15px] border border-[#9e9e9e] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-[26px] inline-flex">
           <div className="self-stretch justify-between items-center inline-flex">
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">Sub total</h4>
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">$520</h4>
           </div>
           <div className="self-stretch justify-between items-center inline-flex">
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">Shipping charges</h4>
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">$5</h4>
           </div>
           <div className="self-stretch justify-between items-center inline-flex">
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">Coupon Discount</h4>
            <h4 className="text-center text-black text-2xl font-normal font-['Poppins']">$0</h4>
           </div>
           <hr className="self-stretch h-[0px] border border-black" />
           <div className="self-stretch justify-between items-center inline-flex">
            <h3 className="text-center text-black text-2xl font-semibold font-['Poppins']">Grand Total</h3>
            <h3 className="text-center text-black text-2xl font-semibold font-['Poppins']">$525</h3>
           </div>
         </div>
        </div>
    )        
}

export default GrandTotal;