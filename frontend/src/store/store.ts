import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import wishlistReducer from "../features/wishlist/wishListSlice";
import toastReducer from "../features/toast/toastSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    toast: toastReducer,
  },
});

export default store;
