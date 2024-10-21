import { useState } from "react";
export default function ProductDescription({ product }: any) {
  const [isActive, setIsActive] = useState(0);
  const activeBtn = "bg-[#7AA262] text-white";
  const btn =
    "border border-black  px-16 py-4 font-bold font-Poppins w-[20rem]";
  return (
    <div className="mt-10 mb-28">
      <div className="flex justify-center items-center gap-x-1">
        <div className="w-full grow h-[1px] bg-black"></div>
        <div className="rounded-2xl shink-0 flex">
          <button
            onClick={() => setIsActive(0)}
            className={`${isActive === 0 && activeBtn} ${btn} rounded-l-xl `}
          >
            Description
          </button>
          <button
            onClick={() => setIsActive(1)}
            className={`${isActive === 1 && activeBtn} ${btn} rounded-r-xl`}
          >
            Additional Info
          </button>
        </div>
        <div className="w-full grow h-[1px] bg-black"></div>
      </div>
      <div className="mt-5">
        {isActive === 0 && (
          <div>
            <h2 className="text-xl font-Philosopher font-bold mb-3">
              Description
            </h2>
            <p className="font-Poppins font-medium text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        )}
        {isActive === 1 && (
          <div>
            <h2 className="text-xl font-Philosopher font-bold mb-3">
              Additional Information
            </h2>
            {product?.benefits.length == 0 && <h6>No Additional Info</h6>}
            {product?.benefits && (
              <ul className="list-disc ml-10">
                {product?.benefits.map((item: any) => {
                  const arr = item.split(":");
                  return (
                    <li>
                      <span className="font-semibold text-lg">{arr[0]}: </span>{" "}
                      <span>{arr[1]}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
