import { useState, useEffect } from "react";
import AdBanner from "./Banner/AdBanner";
import Filter from "./Filter";
import Products from "./Products";
import { plantProducts } from "../../constants/tempProducts";
import filterMap from "../../constants/filtermap";
import { filterTypes } from "../../constants/filtermap";

const defaultFilter: any = {};
filterTypes.forEach((type: string) => {
  defaultFilter[type] = [];
});

export default function ShopProducts() {
  const [selectedFilter, setSelectedFilter] = useState<any>(defaultFilter);
  const [products, setProducts] = useState(plantProducts);
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
      return { ...prev, [type]: filteredList };
    });
  };

  // console.log(selectedFilter);
  const dependencyArray = [
    selectedFilter.price.length,
    selectedFilter.place.length,
    selectedFilter.size.length,
    selectedFilter.rating.length,
  ];
  useEffect(() => {
    const isEmptyOfSelectedFilters = () => {
      const res = dependencyArray.filter((val) => val != 0);
      return res.length == 0 ? true : false;
    };
    const getFilteredProducts = () => {
      setProducts(() => {
        const filteredProducts = plantProducts
          .filter((product) =>
            selectedFilter?.size.length === 0
              ? true
              : selectedFilter?.size.includes(product.size[0]) |
                selectedFilter?.size.includes(product.size[1]) |
                selectedFilter?.size.includes(product.size[2])
          )
          .filter((product) =>
            selectedFilter?.place.length === 0
              ? true
              : selectedFilter?.place.includes(product.place)
          )
          .filter((product) =>
            selectedFilter?.rating.length === 0
              ? true
              : selectedFilter?.rating.some(
                  (rate: number) => product.rating >= rate
                )
          )
          .filter((product) => {
            if (selectedFilter?.price.length === 0) return true;
            const priceBool = selectedFilter?.price.some((priceJSON: any) => {
              const priceRange = JSON.parse(priceJSON);
              const res =
                priceRange.min <= product.price &&
                priceRange.max >= product.price
                  ? true
                  : false;
              return res;
            });
            return priceBool;
          });
        //filtering based based on or condition means if any of the selected is true is returns true
        // const filteredProducts = plantProducts.filter((product) => {
        //   const sizeBool = selectedFilter?.size.includes(product.size);
        //   const placeBool = selectedFilter?.place.includes(
        //     product.place.toLowerCase()
        //   );
        // const ratingBool = selectedFilter?.rating.some(
        //   (rate: number) => product.rating >= rate
        // );
        // const priceBool = selectedFilter?.price.some((priceJSON: any) => {
        //   const priceRange = JSON.parse(priceJSON);
        //   const res =
        //     priceRange.min <= product.price && priceRange.max >= product.price
        //       ? true
        //       : false;
        //   return res;
        // });
        //   return sizeBool || placeBool || ratingBool || priceBool;
        // });
        return filteredProducts;
      });
    };
    !isEmptyOfSelectedFilters()
      ? getFilteredProducts()
      : setProducts(plantProducts);
  }, dependencyArray);
  // console.log(selectedFilter);c
  return (
    <div className="max-w-[1600px] w-full">
      <AdBanner />
      <div className="px-[4vw] flex gap-x-8">
        <Filter
          filterMap={filterMap}
          handleFilter={handleFilter}
          selectedFilter={selectedFilter}
          handleClear={handleClear}
        />
        <Products products={products} />
      </div>
    </div>
  );
}
