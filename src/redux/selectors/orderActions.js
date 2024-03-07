import { createSelector } from "@reduxjs/toolkit";

export const selectedOrderState = (state) => state.orderReducer;

export const selectedOrderItems = createSelector(
  selectedOrderState,
  (state) => state.orderItems
);

export const selectedOrderTotalPrice = createSelector(
  selectedOrderState,
  (state) =>
    state.orderItems?.reduce(
      (acc, curr) => (acc += curr?.price * curr?.quantity),
      0
    )
);

export const selectedIsInOrderListProduct = createSelector(
  [selectedOrderState, (state, orderId) => orderId],
  (state, orderId) => {
    if (orderId) {
      const orderIndex = state.orderItems.findIndex(
        ({ _id }) => _id === orderId
      );

      if (orderIndex !== -1) {
        return true;
      }
    }
  }
);
