import { plantProducts } from "../../constants/tempProducts";
import FavoriteItem from "./FavoriteItem";

export default function WishList({ wishList, handleDeleteFromWishList }: any) {
  const products = plantProducts.filter((item) => wishList.includes(item.id));
  const handleDelete = (productId: any) => {
    handleDeleteFromWishList(productId);
  };
  return (
    <div className="border px-[5vw]">
      <div className="flex flex-col gap-y-2 mt-10 pb-20 min-h-screen">
        <h1 className="font-Poppins font-bold text-2xl text-center">
          My Wishlist({products.length})
        </h1>
        <table className="border-separate border-spacing-y-10">
          <tbody className="">
            {products.map((item: any) => (
              <FavoriteItem
                key={item.id}
                product={item}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
