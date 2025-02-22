import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (builder) => ({
    getAllBrand: builder.query({
      query: () => 'brand',  // Simplified query
    }),
    getAllBrandName: builder.query({
      query: () => 'brand/brandlist',
    }),
    getSingleBrand: builder.query({
      query: (id) => `brand/${id}`,
    }),
    postBrand: builder.mutation({
      query: (data) => ({
        url: 'brand',
        method: 'POST',
        body: data,
      }),
    }),
    patchBrand: builder.mutation({
      query: ({ data, id }) => ({
        url: `brand/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `brand/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllBrandQuery,
  useGetAllBrandNameQuery,
  useGetSingleBrandQuery,
  usePostBrandMutation,
  usePatchBrandMutation,
  useDeleteBrandMutation,
} = brandApi;
