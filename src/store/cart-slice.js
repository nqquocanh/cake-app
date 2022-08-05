import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: +newItem.price,
          quantity: 1,
          totalPrice: +newItem.price,
          title: newItem.title,
          img: newItem.img,
          totalAmount: +newItem.totalAmount,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
        existingItem.totalAmount =
          +existingItem.totalPrice + +newItem.totalPrice;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          +existingItem.totalPrice - +existingItem.price;
        existingItem.totalAmount =
          +existingItem.totalPrice - +existingItem.totalPrice;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    setCart(state, action) {
      const cart = action.payload;
      state.items = cart.items && cart.items.length > 0 ? cart.items : [];
      state.totalQuantity = cart.totalQuantity;
      state.totalAmount = cart.totalAmount;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
