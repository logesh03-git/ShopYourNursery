import { iconMap } from "../../constants/iconMapping";

export default function SummaryCard({ product }: any) {
  const Icon = iconMap.get(product.place)?.icon;
  const Name = iconMap.get(product.place)?.name;
  return (
    <div className="bg-[#FFFFFF] h-fit  max-w-[45rem] w-full flex gap-x-4 p-3 py-4 pr-6 items-center">
      <div className="bg-slate-300 bg-transparent rounded-xl w-[3.5rem] h-[4rem] shrink-0">
        <img
          src={
            product.img
              ? product.img
              : "https://s3-alpha-sig.figma.com/img/e953/b9bc/6837151cf9356d68b20479893460ad82?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LI0wzTI1CQZ~CvpmZ8r9yUPJAktYSSgkTMkO-CYHkR0QW~Cv~BOySMknxUnYSjrWP5EhLKbzebUNpIwCxsWKJ0byB~GgTQdq~xO1SxVm6yUBAeu6b2aT4N5m2v~CQlIO92Pbk0Pwm3dM1yWCJ7c5pPfBm1a8VbIpzhBb1tZ5JPNg4gYY6L7VXHIbtQSF2lPWkd-wQqvKywRqgIb~NNsD1DsGFyJpQ6G3laz5fPL6tmf5ZqhRbTKi8opLpdLgfAdTa7b1Pir2uuOgIcms4DCFMFz2n7Lbm86YwKefZ8u5Vvq3LvLtGa0y-nQNfzdI9i7Cv2ucRfBhdvevRGOH3R~88A__"
          }
          className="object-cover rounded-xl w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col gap-y-2 border-none border-black ">
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex gap-x-10 justify-between  w-full">
            <div className="flex gap-x-2 items-center">
              <h2 className="font-Poppins text-[0.7rem] truncate max-w-[6rem] text-nowrap">
                {product.title}
              </h2>
              <div className="bg-[#F5F5DC] flex gap-x-1 items-center w-fit px-2 py-1 rounded-3xl">
                {<Icon size={"10"} />}
                <h5 className="text-[0.5rem] font-medium">{Name}</h5>
              </div>
            </div>
            <div className="flex gap-x-1 items-center w-fit">
              <h4 className="text-[#363636] font-Poppins text-[0.6rem]">
                Price:
              </h4>
              <span className="font-medium font-Poppins text-[0.8rem]">
                ${product.price}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <h6 className="text-[0.6rem]">Size:</h6>
              <div className="flex gap-x-2">
                <div className="rounded-2xl border-[#8EBD72] px-1 py-[0.1rem] [box-shadow:0px_1.349px_1.349px_0px_rgba(0,0,0,0.25)] bg-[#88B06F] text-white cursor-pointer text-[0.5rem]">
                  {product.selectedSize}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-2 items-center">
            <h6 className="text-[0.6rem]">Qty:</h6>
            <div className="shadow-shadowDown size-4 bg-[#EEEEEE] flex justify-center items-center rounded-md font-semibold text-[0.6rem]">
              {product.count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
