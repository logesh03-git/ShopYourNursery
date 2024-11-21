import { createContext } from "react";
import useWishList from "../hooks/useWishList";
import useAddToWishList from "../hooks/wishlist/useAddToWishList";
import useDeleteFromWishList from "../hooks/wishlist/useDeleteFromWishList";

export const WishListContext = createContext<any>(undefined);
export default function WishListProvider({ children }: any) {
  const { wishList } = useWishList();
  const { handleDeleteFromWishList } = useDeleteFromWishList();
  const { handleAddToWishList } = useAddToWishList();
  const isItemInWishList = (id: string) => {
    const res = wishList?.find((item: any) => item._id == id);
    return !!res;
  };
  //handleFavorite adds or removes from wishlist
  const handleFavorite = (product: any) => {
    if (isItemInWishList(product._id)) {
      const updatedList = wishList.filter(
        (item: any) => item._id != product._id
      );
      // dispatch(setWishlist(updatedList));
      handleDeleteFromWishList({ updatedList, productId: product._id });
      return "Removed from wishlist.";
    } else {
      handleAddToWishList(product);
      return "Saved to your wishlist. Happy shopping!";
    }
  };
  return (
    <WishListContext.Provider
      value={{
        wishList,
        handleFavorite,
        isItemInWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
