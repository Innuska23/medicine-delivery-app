import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopProductApi = createApi({
  reducerPath: "shopProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    shopProductList: build.query({
      query: ({ shopId }) => {
        return {
          url: `api/shops-product/${shopId}`,
        };
      },
    }),
  }),
});

export const { useShopProductListQuery } = shopProductApi;
