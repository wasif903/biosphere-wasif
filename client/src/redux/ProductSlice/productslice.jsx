import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/Config';

export const productslice = createApi({
    reducerPath: 'productslice',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ["createProduct", "updateProduct", "deleteProduct"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (storeID) => {
                return {
                    url: `/api/products/get-products/${storeID}`,
                    method: "GET",
                };
            },
            providesTags: ["createProduct", "updateProduct", "deleteProduct"]
        }),
        createProduct: builder.mutation({
            query: ({ storeID, data }) => {
                for (const a of data) {
                    console.log(a)
                }
                return {
                    url: `/api/products/create-product/${storeID}`,
                    method: "POST",
                    body: data
                };
            },
            invalidatesTags: ["createProduct"]
        }),
        getSingleProduct: builder.query({
            query: ({ slug }) => {
                return {
                    url: `/api/products/get-single-product/${slug}`,
                    method: "GET",
                };
            },
            providesTags: ["updateProduct"]
        }),
        updateProduct: builder.mutation({
            query: ({ storeID, data }) => {
                for (const a of data) {
                    console.log(a)
                }
                return {
                    url: `/api/products/update-product/${storeID}`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["updateProduct"]
        }),
        deleteProduct: builder.mutation({
            query: ({ storeID, prodID, slug }) => {
                return {
                    url: `/api/products/delete-product/${storeID}/${prodID}/${slug}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["deleteProduct"]
        }),
        getProductsBy: builder.query({
            query: () => {
                return {
                    url: `/api/products/get-products-by-query?type=top-rated`,
                    method: "GET",
                };
            },
            // invalidatesTags: [""]
        }),
        postRatingsAndReviews: builder.mutation({
            query: ({userID, storeID, ProductId, data}) => {
                return {
                    url: `/ratings/post-ratings-and-reviews/${userID}/${storeID}/${ProductId}`,
                    method: "POST",
                    body: data
                };
            },
            invalidatesTags: ["updateProduct"]
        }),
    }),
})


export const { useGetProductsQuery, useCreateProductMutation, useGetSingleProductQuery, useUpdateProductMutation, useDeleteProductMutation, useGetProductsByQuery, usePostRatingsAndReviewsMutation } = productslice;
