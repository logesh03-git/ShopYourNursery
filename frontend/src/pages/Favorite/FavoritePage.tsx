import EmptyFavorite from "../../components/Favorites/EmptyFavorite";
import WishList from "../../components/WhishList/WishList";

export default function FavoritePage() {
  const wishlist = [1];
  return wishlist.length == 0 ? <EmptyFavorite /> : <WishList />;
}
