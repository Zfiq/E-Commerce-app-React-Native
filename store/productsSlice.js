import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload; // This is the product ID that we want to set as selected.
      // Look for all the products using find(). and update the state once found.
      state.selectedProduct = state.products.find((p) => p.id === productId);
      // Use the selectedProduct in ProductDetails to render the info about the item that is selected.
    },
  },
});
