import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const { setToast } = toastSlice.actions;

export default toastSlice.reducer;
