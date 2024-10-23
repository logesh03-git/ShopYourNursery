import aboutbg from "../../assets/about/aboutbg.png";
export default function AboutHead() {
  return (
    <div className="relative">
      <img src={aboutbg} className="w-full" />
      <div className="absolute inset-x-0 top-[17.5rem] text-center">
        <h1 className="text-[#447128] font-Philosopher font-bold text-6xl">
          Bringing Nature Closer to You
        </h1>
        <h5 className="italic text-xl font-Poppins font-light mt-6">
          Connecting Plant Lovers with the Best Nurseries Across the USA
        </h5>
      </div>
    </div>
  );
}
