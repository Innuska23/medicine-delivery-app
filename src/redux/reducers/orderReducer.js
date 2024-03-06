import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orderItems.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.orderItems = state.orderItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.orderItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addOrder, removeOrder, updateQuantity } = orderSlice.actions;

export default orderSlice.reducer;
