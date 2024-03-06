import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopProductApi = createApi({
  reducerPath: "shopProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (build) => ({
    shopProductList: build.query({
      query: () => {
        return {
          url: `card`,
        };
      },
    }),
  }),
});

export const { useLazyShopProductListQuery } = shopProductApi;
