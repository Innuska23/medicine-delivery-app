import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const product = state.orderItems.find(
        ({ _id }) => action.payload._id === _id
      );

      if (!product) {
        state.orderItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeOrder: (state, action) => {
      state.orderItems = state.orderItems.filter(
        (item) => item._id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      state.orderItems = state.orderItems.map((item) => {
        if (item._id === id) {
          return { ...item, quantity };
        }
        return item;
      });
    },

    resetOrder: (state) => {
      state.orderItems = [];
    },
  },
});

export const { addOrder, removeOrder, updateQuantity, resetOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
