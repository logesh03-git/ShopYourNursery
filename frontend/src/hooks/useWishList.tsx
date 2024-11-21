import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../apiClient/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../features/wishlist/wishListSlice";
import { useEffect } from "react";

export default function useWishList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getWishlist"],
    queryFn: () => getWishlist(),
  });
  const { items: wishList } = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setWishlist(data?.wishlist));
    }
  }, [data]);
  return { wishList, isLoading, isError, error };
}
