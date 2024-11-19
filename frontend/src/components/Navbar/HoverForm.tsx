import { useNavigate } from "react-router-dom";

export default function HoverForm() {
  const navigate = useNavigate();
  return (
    <div className="Login-SignUp-Form flex flex-col items-center justify-center shadow-xl ring-1 ring-gray-900/5 shrink-0 shadow-custom rounded bg-[#fff] font-['Poppins'] w-[245px] h-[128px] gap-[10px]">
      <div
        onClick={() => navigate("/login")}
        className="flex items-center bg-[#BDE3A6] rounded-[10px] justify-center gap-[10px] py-[8px] px-[46px] w-[202px] h-[32px]"
      >
        <span className="text-[16px] font-medium leading-normal text-[#434343] cursor-pointer">
          Log In
        </span>
      </div>
      <div className="flex gap-[12px]">
        <h2 className="text-[12px] text-[#474747] font-sans font-normal leading-6">
          Don't have account?
        </h2>
        <button
          onClick={() => navigate("/signup")}
          className="text-[12px] text-[#62864C] font-normal leading-6 underline decoration-solid decoration-auto underline-offset-auto cursor-pointer"
        >
          Create Here
        </button>
      </div>

      <div className="text-[10px] text-[#757575] font-normal leading-6 font-sans">
        Login/Signup to view your Account
      </div>
    </div>
  );
}
