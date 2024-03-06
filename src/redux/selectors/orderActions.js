import { createSelector } from "@reduxjs/toolkit";

export const selectedOrderState = (state) => state.orderReducer;

export const selectedOrderItems = createSelector(
  selectedOrderState,
  (state) => state.orderItems
);
