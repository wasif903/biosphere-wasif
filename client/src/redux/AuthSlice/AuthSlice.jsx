import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/Config';

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/global/login`,
                    method: "POST",
                    body: data,
                };
            },
        }),
        register: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/store/signup-store`,
                    method: "POST",
                    body: data,
                };
            },
        }),
        userRegister: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/user/signup-user`,
                    method: "POST",
                    body: data,
                };
            },
        }),
        verifyOtp: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/store/otp-verify-store`,
                    method: "PATCH",
                    body: data,
                };
            },
        }),
        forgotPass: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/global/forget-password`,
                    method: "PATCH",
                    body: data,
                };
            },
        }),
        verifyOtpGlobal: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/global/verify-otp`,
                    method: "PATCH",
                    body: data,
                };
            },
        }),
        resetPassword: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/global/reset-password`,
                    method: "PATCH",
                    body: data,
                };
            },
        }),
        resendOtp: builder.mutation({
            query: (data) => {
                return {
                    url: `/api/global/resend-otp`,
                    method: "PATCH",
                    body: data,
                };
            },
        }),
        verifyKyc: builder.mutation({
            query: (id, data) => {
                return {
                    url: `/api/store/verify-kyc/${id}`,
                    method: "POST",
                    body: data,
                };
            },
        })
    }),
})


export const { useLoginMutation, useRegisterMutation, useUserRegisterMutation, useVerifyOtpMutation, useForgotPassMutation, useVerifyOtpGlobalMutation, useResetPasswordMutation, useResendOtpMutation, useVerifyKycMutation } = AuthApi;