import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { postInWishlist } from "../../apiClient/apiClient";
import {
  addToWishlist,
  setWishlist,
} from "../../features/wishlist/wishListSlice";

let pendingAddMutationsCount = 0;
export default function useAddToWishList() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: handleAddToWishList } = useMutation({
    mutationKey: ["addToWishList"],
    mutationFn: (data: any) => postInWishlist({ productId: data?._id }),
    onMutate: async (newProduct: any) => {
      pendingAddMutationsCount++;
      await queryClient.cancelQueries({
        queryKey: ["getWishlist"],
      });
      const previousData: any = queryClient.getQueryData(["getWishlist"]);
      //optimistically updating the wishlist state
      dispatch(addToWishlist(newProduct));
      queryClient.setQueryData(["wishlist"], (old: any) => [
        ...(old?.wishlist || []),
        newProduct, // Add the new item
      ]);
      return { wishlist: previousData?.wishlist };
    },
    onError: (error, __, context) => {
      console.log(error);
      dispatch(setWishlist(context?.wishlist));
      queryClient.setQueryData(["getWishlist"], context?.wishlist);
    },
    onSettled: () => {
      pendingAddMutationsCount--;
      if (pendingAddMutationsCount === 0) {
        queryClient.invalidateQueries({ queryKey: ["getWishlist"] });
      }
    },
  });
  return { handleAddToWishList };
}
