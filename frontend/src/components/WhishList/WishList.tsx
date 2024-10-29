import { plantProducts } from "../../constants/tempProducts";
import FavoriteItem from "./FavoriteItem";

export default function WishList({ wishList, handleDeleteFromWishList }: any) {
  const products = plantProducts.filter((item) => wishList.includes(item.id));
  const handleDelete = (productId: any) => {
    handleDeleteFromWishList(productId);
  };
  return (
    <div className="w-[50rem]">
      <div className="flex flex-col gap-y-12 mt-10 pb-20 min-h-screen">
        <h1 className="font-Poppins font-bold text-2xl">My Wishlist</h1>
        <div className="flex flex-col gap-y-6">
          {products.map((item: any) => (
            <FavoriteItem
              key={item.id}
              product={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
