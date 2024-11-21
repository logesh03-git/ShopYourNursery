import FavoriteItem from "./FavoriteItem";

export default function WishList({ wishList, handleFavorite }: any) {
  return (
    <div className="border-none px-[5vw]">
      <div className="flex flex-col gap-y-2 mt-10 pb-20 min-h-screen">
        <h1 className="font-Poppins font-bold text-2xl text-center">
          My Wishlist({wishList.length || 0})
        </h1>
        <table className="border-separate border-spacing-y-10">
          <tbody className="">
            {wishList.map((item: any) => (
              <FavoriteItem
                key={item._id}
                product={item}
                handleFavorite={handleFavorite}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
