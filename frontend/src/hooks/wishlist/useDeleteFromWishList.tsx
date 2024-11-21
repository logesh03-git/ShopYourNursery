import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromWishlist } from "../../apiClient/apiClient";
import { useDispatch } from "react-redux";
import { setWishlist } from "../../features/wishlist/wishListSlice";

let pendingDeleteMutationsCount = 0;
export default function useDeleteFromWishList() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: handleDeleteFromWishList } = useMutation({
    mutationKey: ["removeFromWishList"],
    mutationFn: (data: any) => deleteFromWishlist(data?.productId),
    onMutate: async (deleteData: any) => {
      pendingDeleteMutationsCount++;
      await queryClient.cancelQueries({
        queryKey: ["getWishlist"],
      });
      const previousData: any = queryClient.getQueryData(["getWishlist"]);
      //optimistically updating the wishlist state
      dispatch(setWishlist(deleteData?.updatedList));
      queryClient.setQueryData(["wishlist"], () => deleteData?.updatedList);
      return { wishlist: previousData?.wishlist };
    },
    onError: (error, __, context) => {
      console.log(error);
      dispatch(setWishlist(context?.wishlist));
      queryClient.setQueryData(["getWishlist"], context?.wishlist);
    },
    onSettled: () => {
      pendingDeleteMutationsCount--;
      if (pendingDeleteMutationsCount === 0) {
        queryClient.invalidateQueries({ queryKey: ["getWishlist"] });
      }
    },
  });
  return { handleDeleteFromWishList };
}
