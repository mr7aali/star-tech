import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "http";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://star-tech-back-end.vercel.app/api/v1", //!base URL+/api/v1
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductById: builder.query({
      query: (productId) => `/product/${productId}`,
    }),
    getCategories: builder.query({
      query: () => "/category",
    }),
    getCategoryById: builder.query({
      query: (categoryId) => `/category/${categoryId}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} = baseApi;
