type propsType = {
  help: {
    id: number;
    title: string;
    img: string;
    description1: string;
    description2: string;
  };
};
export default function HelpCard({ help }: propsType) {
  return (
    <div className="flex ">
      <div className="w-[290px] h-[111px]  md flex justify-between items-center bg-white  border rounded-2xl ">
        <img
          src={help.img}
          className="w-[88px] h-[99px] flex-shrink-0 object-cover rounded-2xl ml-3"
        />

        <div className="flex flex-col w-full ml-3 ">
          <div className="flex  w-full items-center  justify-center mb-3">
            <h3 className="text-lg font-poppins font-bold text-black-600 text-[18px] justify-between">
              {help.title}
            </h3>
          </div>

          <h3 className="text-base font-poppins font-normal text-[14px] text-black-400 mb-1 ">
            {help.description1}
          </h3>
          <h3 className="text-base font-poppins text-[14px] font-normal text-black-400">
            {help.description2}
          </h3>
        </div>
      </div>
    </div>
  );
}
