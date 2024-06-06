"use client";

import Button from "@/components/button/Button";
import AuthLayout from "@/layout/AuthLauout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useResendOtpMutation, useVerifyOtpGlobalMutation, useVerifyOtpMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";
import { setCookie } from "cookies-next";

const Page = () => {
  const router = useRouter();

  const { email } = history?.state || {};

  const [otpValues, setOtpValues] = useState({
    email: "",
    OtpCode: "",
  });

  useEffect(() => {
    if (
      email === "" ||
      email === undefined ||
      email === null
    ) {
      return router.push("/auth/forgot-password");
    } else {
      setOtpValues({
        email,
      });
    }
  }, []);


  const [otpVerify_data, { isLoading }] = useVerifyOtpGlobalMutation();

  const handelSubmit = async () => {
    try {
      // Addition
      if (otpValues.OtpCode === undefined) {
        return ResponseToast({ message: "OTP Field Is Required" })
      }
      const res = await otpVerify_data(otpValues)
      if (!res?.error) {
        history.pushState({ email: otpValues.email }, '', '/auth/set-password');
        router.push("/auth/set-password")
      }
      ResponseToast({ res })
    } catch (error) {
      console.log(error);
    }
  }


  // resend otp api
  const [resendOtp_data, { isLoading: isLoading_resend }] = useResendOtpMutation();
  const handelResend = async () => {
    try {
      const res = await resendOtp_data({ email: otpValues.email })
      if (!res?.error) {
        ResponseToast({ res })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthLayout>
      <div className="rounded-md h--[20rem] max-sm:w-full w-[80%] xl:w-[65%] flex flex-col gap-2 max-sm:py-14 max-sm:p-3 py-16 p-5 lg:p-10 sm:hover:-translate-x-5 transition-all sm:hover:shadow-xl">
        <h1 className="max-sm:text-3xl text-4xl font-semibold text-center text-primary-color">
          {" "}
          OTP Verification{" "}
        </h1>
        <p className="text-sm text-center px-3 md:px-5 lg:px-7 xl:px-10 text-secondary-color">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet massa quis arcu posuere.{" "}
        </p>

        <div className="flex justify-center items-center gap-5 mt-10">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onChange={(value) =>
              setOtpValues({ ...otpValues, ["OtpCode"]: parseInt(value) })
            }
          >
            <InputOTPGroup className="max-sm:gap-1 gap-5">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex justify-center mt-10" style={{}}>
          <Button
            name={"RESEND OTP"}
            bgcolor={"bg-[#fff]"}
            pClass={"text-primary-color font-medium p-0"}
            className={
              "border-[2px] border-primary-color max-w-[12rem] px-0 p--1"
            }
            onClick={handelResend}
            isLoading={isLoading_resend}
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button
            name={"NEXT"}
            bgcolor={"bg--[#000]"}
            pClass={"text-[#fff] font-medium"}
            className={"max-w-[10rem]"}
            style={{
              backgroundImage:
                "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
            }}
            onClick={handelSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Page;
