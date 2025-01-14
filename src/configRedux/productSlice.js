import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    addProduct: (state, action) => {
      return action.payload;
    },
    setProductData: (state, action) => {
      state.data = action.payload;
    },
    removeProduct: (state, action) => {
      return null;
    },
  },
});

export const { addProduct, setProductData, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
