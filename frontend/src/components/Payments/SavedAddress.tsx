import edit from "../../assets/icons/edit.png";
export default function SavedAddress({ address }: any) {
  return (
    <div className="flex flex-col gap-y-2 px-5 py-4 bg-[#F5F5DC] h-[12rem] w-[25rem] rounded-[0.9375rem]">
      <div className="flex items-center justify-between">
        <h1 className="font-Poppins font-medium text-lg">{address.fullname}</h1>
        <div className="flex gap-x-1 items-center bg-[#FDFDF8] rounded-[0.625rem] px-2 py-2">
          <img src={edit} className="object-contain size-[0.8rem]" />
          <span className="font-Poppins text-xs cursor-pointer underline">
            Edit Address
          </span>
        </div>
      </div>
      <div className="w-full truncate">
        <span className="text-[#5F5F5F] text-xs text-nowrap font-Poppins">
          {address.street}, {address.city}, {address.state}, {address.zipcode},{" "}
          {address.country}
        </span>
      </div>
      <div className="flex gap-x-2 text-[#5F5F5F] text-xs">
        <h4 className="">Contact:</h4>
        <p className="font-medium truncate">{address.contact}</p>
      </div>
      <div className="flex gap-x-2 justify-between items-center truncate">
        <div className="flex gap-x-2 text-[#5F5F5F] text-xs font-Poppins truncate">
          <h4 className="">Email:</h4>
          <p className="font-medium truncate">{address.email}</p>
        </div>
      </div>
    </div>
  );
}
