import edit from "../../assets/icons/edit.png";
export default function SavedCard() {
  return (
    <div className="flex flex-col gap-y-2 px-5 py-4 bg-[#F5F5DC] h-[12rem] w-[25rem] rounded-[0.9375rem]">
      <div className="flex items-center justify-between">
        <h1 className="font-Poppins font-medium text-lg">Choose how to Pay</h1>
        <div className="flex gap-x-1 items-center bg-[#FDFDF8] rounded-[0.625rem] px-2 py-2">
          <img src={edit} className="object-contain size-[0.8rem]" />
          <span className="font-Poppins text-xs cursor-pointer underline">
            Add New Method
          </span>
        </div>
      </div>
    </div>
  );
}
