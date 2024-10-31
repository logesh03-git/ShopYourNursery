import ReactDOM from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
export default function PreOrderModal({
  onClose,
  handleAddToPreOrder,
  handleBuy,
}: any) {
  const root = document.getElementById("modal-portal");
  return ReactDOM.createPortal(
    <div className="bg-black/40  backdrop-blur-[1px]  py-44 fixed inset-0 w-full h-full z-50 flex justify-center">
      <div className="transition-all duration-500  px-6 blur-0 py-5 rounded-[1.25rem] bg-white w-full min-w-[25rem] max-w-[35rem] flex flex-col gap-y-2 absolute top-28 h-fit">
        <div className="w-full flex justify-between gap-x-10 items-center">
          <h1 className="font-Poppins font-semibold text-lg">Pre Order Item</h1>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100 cursor-pointer"
          >
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <div>
          <span className="font-Poppins text-lg">
            Would you like to pre-order this?
          </span>
        </div>
        <div className="flex gap-x-12 mt-3 w-full">
          <button
            onClick={() => {
              handleAddToPreOrder();
              onClose();
            }}
            className=" bg-[#9FDD79] text-white border border-[#BFBFBF] rounded-[0.9375rem] font-Poppins px-8 py-3 font-medium w-full"
          >
            Add to Pre Cart
          </button>
          <button
            onClick={handleBuy}
            className="bg-[#88B06F] text-white border border-[#BFBFBF] rounded-[0.9375rem] font-Poppins px-8 py-3 font-medium w-full"
          >
            Pre Order
          </button>
        </div>
      </div>
    </div>,
    root as HTMLElement
  );
}
