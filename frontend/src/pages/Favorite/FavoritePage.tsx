import { useContext } from "react";
import EmptyFavorite from "../../components/Favorites/EmptyFavorite";
import WishList from "../../components/WhishList/WishList";
import { WishListContext } from "../../contexts/WishListProvider";

export default function FavoritePage() {
  const { wishList, handleDeleteFromWishList } = useContext(WishListContext);
  return wishList.length == 0 ? (
    <EmptyFavorite />
  ) : (
    <WishList
      handleDeleteFromWishList={handleDeleteFromWishList}
      wishList={wishList}
    />
  );
}
