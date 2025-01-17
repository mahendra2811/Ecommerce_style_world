import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";

const appStore = configureStore({
  reducer: {
    product: productReducer,
    admin: adminReducer,
  },
});

export default appStore;
