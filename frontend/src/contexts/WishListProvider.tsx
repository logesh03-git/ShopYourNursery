import { createContext, useState } from "react";

export const WishListContext = createContext<any>(undefined);

export default function WishListProvider({ children }: any) {
  const [wishList, setWishList] = useState<any>([]);
  const handleAddToWishList = (product: any) => {
    setWishList((prev: any) => [...prev, product]);
  };
  const handleDeleteFromWishList = (productId: any) => {
    const updatedList = wishList.filter((id: any) => id != productId);
    setWishList(updatedList);
  };
  const handleFavorite = (productId: any) => {
    if (wishList.includes(productId)) {
      const updatedList = wishList.filter((id: any) => id != productId);
      setWishList(updatedList);
    } else {
      handleAddToWishList(productId);
    }
  };
  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList,
        handleAddToWishList,
        handleDeleteFromWishList,
        handleFavorite,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
