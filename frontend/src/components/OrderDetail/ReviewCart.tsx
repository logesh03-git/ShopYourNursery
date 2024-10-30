import StarReview from './StarReview'
import Saccilient from '../../assets/discover/saccilent.png'
import Houseplant from '../../assets/discover/houseplant.png'
import Sympathy from '../../assets/discover/sympathy.png'


const ReviewCart = () => {


    const data = [
        {
          name:'Sympathy',
          qyt:2,
          price:230,
          img: Sympathy
        }
        ,
        {
            name:'Succulents',
            qyt:1,
            price:120,
            img:Houseplant
        }
        ,
        {
            name:'Succulents',
            qyt:2,
            price:230,
            img: Saccilient
        }
      ]
    


    return(
        <div className='mt-12'>
        
        { 
            
            data.map((item,index)=>{
                return(
           <div key={index} className="flex flex-col justify-center items-center" >    
            <div  className="w-[821px]  justify-start items-center gap-6 inline-flex">
                <div className="justify-start items-center gap-6 flex">
                <div className="w-[83.30px] h-[99px] px-[4.14px] flex-col justify-start items-start gap-[4.14px] inline-flex">
                  <div className="w-[83.15px] h-[98.74px] relative">
                    <hr className="w-[83.15px] h-[98.74px] left-0 top-0 absolute bg-[#d9d9d9] rounded-md" />
                    <img className="w-[84.38px] h-[103.10px] left-0 top-0 absolute rounded-md" src={item.img} />
                  </div>
                </div>
             </div>
             <div className="w-[690px] flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="self-stretch h-[47px] flex-col justify-start items-start gap-2 flex">
                  <h4 className="self-stretch text-black text-xs font-semibold font-['Poppins']">{item.name}</h4>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <h5><span className="text-[#767676] text-[10px] font-normal font-['Poppins']">Qty:</span><span className="text-black text-[10px] font-normal font-['Poppins']">{item.qyt}</span></h5>
                    <h5 className="text-black text-sm font-semibold font-['Poppins']">${item.price}</h5>
                  </div>
                </div>
                <div className="justify-start items-center gap-1.5 inline-flex">
                <h5 className="text-[#767676] text-center text-[10px] font-normal font-['Poppins']">Rate this product:</h5>
                  <div className="w-[108px] h-5 pt-[2px] flex justify-center items-start ">
                    <StarReview size={20} />
                  </div>
                </div>
             </div>
            </div>
            
            {index < data.length - 1 && <hr className="w-[815px] h-[0px] border my-8 border-[#afaeae]"/>}
         </div>
            )})
               
        }
        </div>
    )
}

export default ReviewCart;