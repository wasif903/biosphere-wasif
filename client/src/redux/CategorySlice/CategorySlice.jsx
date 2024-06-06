import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/Config';

export const CategoryApi = createApi({
    reducerPath: 'CategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ["createCat"],
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: ({ storeID, data }) => {
                return {
                    url: `/api/category/create-category/${storeID}`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["createCat"],
        }),
        getCategory: builder.query({
            query: (storeID) => {
                return {
                    url: `/api/category/get-categories`,
                    method: "GET",
                };
            },
            providesTags: ["createCat"]
        }),
        getPopulatedCategory: builder.query({
            query: (storeID) => {
                return {
                    url: `/api/category/get-populated-categories`,
                    method: "GET",
                };
            },
            providesTags: ["createCat"]
        })
    }),
})


export const { useCreateCategoryMutation, useGetCategoryQuery, useGetPopulatedCategoryQuery } = CategoryApi;