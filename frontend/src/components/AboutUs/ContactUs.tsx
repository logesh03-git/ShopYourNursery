import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#DDF2D0] rounded-[1.5625rem] p-10 flex flex-col gap-y-8 w-[60rem] items-center">
      <h1 className="font-Philosopher text-center text-2xl">
        Explore Our Plant Collection and Find Your Perfect Green Companion!
      </h1>
      <button
        onClick={() => navigate("/shop-plants")}
        className="bg-[#7AA262] rounded-[1.75106rem] w-fit py-1 px-6 text-white text-base"
      >
        Shop Now
      </button>
    </div>
  );
}
