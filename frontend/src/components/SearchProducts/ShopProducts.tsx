import { useState,useEffect } from "react";
import AdBanner from "./Banner/AdBanner";
import Filter from "./Filter";
import Products from "./Products";
import filterMap from "../../constants/filtermap";
import { filterTypes } from "../../constants/filtermap";
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../apiClient/apiClient";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Spinner from "../Loading/Spinner";

const defaultFilter: any = {};
filterTypes.forEach((type: string) => {
  defaultFilter[type] = [];
});

export default function ShopProducts() {
  const [selectedFilter, setSelectedFilter] = useState<any>(defaultFilter);
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery(searchParams.get("query") || "");
  }, [searchParams]);

  const dependencyArray = [
    selectedFilter.price.length,
    selectedFilter.place.length,
    selectedFilter.size.length,
    selectedFilter.rating.length,
    selectedFilter?.page,
    searchQuery,
  ];
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchPlants", ...dependencyArray],
    queryFn: () =>
      apiClient.fetchPlants({ ...selectedFilter, query: searchQuery }),
  });

  const handleClear = () => {
    setSelectedFilter(defaultFilter);
  };
  const handleFilter = (e: any) => {
    const type: string = e.target.name;
    const value: string | number =
      type == "rating"
        ? parseInt(e.target.value)
        : e.target.value.toLowerCase();
    setSelectedFilter((prev: any) => {
      const filteredList = prev[type]?.includes(value)
        ? prev[type].filter((item: any) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: filteredList, page: "" };
    });
  };
  const handlePage = (pageNumber: any) => {
    setSelectedFilter((prev: any) => ({ ...prev, page: pageNumber }));
    window.scrollTo(0, 0);
  };
  return (
    <div className="max-w-[1600px] w-full">
      <AdBanner />
      <div className="px-[4vw] flex gap-x-14 w-full">
        <Filter
          filterMap={filterMap}
          handleFilter={handleFilter}
          selectedFilter={selectedFilter}
          handleClear={handleClear}
        />
        {isLoading ? (
          <div className="font-medium  flex justify-center items-center gap-x-4 h-96 w-full">
            <Spinner />
            <span>Fetching ...</span>
          </div>
        ) : !data ? (
          <div className="font-medium  flex justify-center items-center gap-x-4 h-96 w-full">
            {error?.message}
          </div>
        ) : (
          data.plants && (
            <div>
              {data?.plants.length == 0 ? (
                <div className="font-medium h-[10rem] flex items-center justify-center">
                  No Plants Found
                </div>
              ) : (
                <Products products={data?.plants} />
              )}

              {data?.pagination.pages !== 1 && (
                <Pagination
                  pages={data.pagination.pages}
                  activePage={
                    data.pagination.page == 1
                      ? data.pagination.page
                      : selectedFilter.page
                  }
                  handlePage={handlePage}
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
