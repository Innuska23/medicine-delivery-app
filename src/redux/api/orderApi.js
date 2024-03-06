import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (build) => ({
    orderList: build.query({
      query: () => {
        return {
          url: `card`,
        };
      },
    }),
  }),
});

export const { useLazyOrderListQuery } = orderApi;
