import { createSlice } from "@reduxjs/toolkit";

const arr: any[] = [];

const initialState = {
  items: arr,
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.items = action.payload;
    },
    addToWishlist: (state, action) => {
      const itemExists = state.items.find(
        (item: any) => item._id === action.payload._id
      );
      if (!itemExists) {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { setWishlist, addToWishlist, removeFromWishlist, clearWishlist } =
  wishListSlice.actions;

export default wishListSlice.reducer;
