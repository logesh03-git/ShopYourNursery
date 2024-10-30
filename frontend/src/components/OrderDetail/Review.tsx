import ReviewCart from './ReviewCart'
import StarReview from './StarReview'

const Review = () => {



    return(
          <div className="flex justify-center items-center">
            <div className="h-[817px] w-[908px] mb-14 flex flex-col justify-center items-center gap-[5.35rem] bg-neutral-100 rounded-[15px]">
            <ReviewCart />
            <div className="w-[821px] h-[205px] pl-[143px] pr-[114px] pt-[41px] pb-[29px] mb-12 bg-[#f5f5dc] justify-center items-center flex">
               <div className="w-[564px] self-stretch flex-col justify-start items-center gap-8 inline-flex">
                  <div className="self-stretch h-[62px] flex-col justify-start items-center gap-2 flex">
                     <h2 className="self-stretch text-center text-black text-xl font-medium font-['Poppins']">Rate your shopping experience</h2>
                     <h2 className="self-stretch text-center text-[#626262] text-base font-normal font-['Poppins']">How likely are you to recommend Nykaa to a friend or family member?</h2>
                  </div>
                  <div className="w-[221px] h-5 mb-6">
                     <StarReview size={41} />
                  </div>
               </div>
            </div>
            </div>
          </div>
    )
}

export default Review;