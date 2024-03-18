import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Control/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
