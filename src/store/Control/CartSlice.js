import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let updatedItems = [...state.cartItems];
      updatedItems = [...state.cartItems, action.payload];
      state.cartItems = [...updatedItems];
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newCartItems;
    },
    clearItem: (state) => {
      state.cartItems = [];
    },
    increase: (state, action) => {
      const cartItemIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItemIncrease.quantity++;
    },
    decrease: (state, action) => {
      const cartItemDecrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItemDecrease.quantity > 1) {
        cartItemDecrease.quantity--;
      } else {
        quantity = 0;
      }
    },
  },
});

export const { addItem, removeItem, clearItem, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
