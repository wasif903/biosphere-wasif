import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/Config';

export const PlanSlice = createApi({
    reducerPath: 'PlanSlice',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes:["createPlan"],
    endpoints: (builder) => ({
        getPlans: builder.query({
            query: () => {
                return {
                    url: `/api/plans/get-plans`,
                    method: "GET",
                };
            },
            providesTags: ["createPlan"],
        }),
        createPlan: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/plans/create-plan`,
                    method: "POST",
                    body: data
                };
            },
            invalidatesTags: ["createPlan"],
        }),
        updatePlan: builder.mutation({
            query: ({data, id}) => {
                // console.log(data, id);
                return {
                    url: `/api/plans/update-plan/${id}`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["createPlan"],
        }),
    }),
})


export const { useGetPlansQuery, useCreatePlanMutation, useUpdatePlanMutation } = PlanSlice;
