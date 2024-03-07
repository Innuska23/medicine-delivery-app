import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (order) => {
        return {
          url: `api/order`,
          body: order,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
