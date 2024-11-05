import Tick from "../../../svgIcons/Tick";
import ReactDOM from "react-dom";
export default function CartToast({ message }: any) {
  const root = document.getElementById("modal-portal");
  return ReactDOM.createPortal(
    <div className="z-50 flex justify-center border top-0 fixed w-full">
      <div className="bg-black  transition-all py-2 pl-4 pr-6 flex items-center gap-x-6 rounded-sm overflow-hidden h-[3rem] w-fit z-50 absolute top-20 opacity-0 animate-toastUp">
        <Tick size={"28"} />
        <h4 className="text-white font-Poppins font-semibold text-lg">
          {message}
        </h4>
      </div>
    </div>,
    root as HTMLElement
  );
}
