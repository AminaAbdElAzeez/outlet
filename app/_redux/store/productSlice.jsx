import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
