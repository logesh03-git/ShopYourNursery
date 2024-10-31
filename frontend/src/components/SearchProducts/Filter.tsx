import { useState } from "react";
import FilterCard from "./FilterCard";
// import { filterTypes } from "../../constants/filtermap";
export default function Filter({
  selectedFilter,
  filterMap,
  handleFilter,
  handleClear,
}: any) {
  // const [isRotated, setIsRotated] = useState<Boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string[]>([]);
  const handleActiveFilter = (type: string) => {
    setActiveFilter((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item != type)
        : [...prev, type]
    );
  };
  return (
    <div className="bg-[#F3F3F3] border border-[#D7D7D7] rounded-[0.625rem] w-[22rem] h-fit pb-10 flex flex-col gap-y-5 shrink-0">
      <div className="flex justify-between w-full items-center px-5 mt-12 mb-10">
        <h2 className="font-Poppins font-semibold text-xl">Filter</h2>
        <button
          onClick={() => handleClear()}
          className="font-Poppins font-medium text-[#358406] bg-[#FFFFFF] border border-[#358406] rounded-[0.625rem] py-2 px-4"
        >
          Clear All
        </button>
      </div>
      {filterMap?.map((filter: any, index: number) => (
        <FilterCard
          key={index}
          filter={filter}
          activeFilter={activeFilter}
          handleActiveFilter={handleActiveFilter}
          handleFilter={handleFilter}
          selectedFilter={selectedFilter}
        />
      ))}
    </div>
  );
}
