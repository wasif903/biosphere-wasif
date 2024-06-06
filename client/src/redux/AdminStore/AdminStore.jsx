import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/Config';

export const AdminStore = createApi({
    reducerPath: 'AdminStore',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getAllStores: builder.query({
            query: () => {
                return {
                    url: `/api/store/get-stores`,
                    method: "GET",
                };
            },
        }),
    }),
})


export const { useGetAllStoresQuery } = AdminStore;