import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    shopList: build.query({
      query: () => {
        return {
          url: `api/shops`,
        };
      },
    }),
  }),
});

export const { useShopListQuery } = shopApi;
