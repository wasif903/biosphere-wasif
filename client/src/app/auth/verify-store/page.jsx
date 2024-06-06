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
import { useVerifyOtpMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";
import { setCookie } from "cookies-next";

const Page = () => {
  const router = useRouter();

  const otp_data = history?.state?.otp_data;
  const { username, storeName, email } = otp_data || {};

  const [OtpCode, setOtpCode] = useState();


  const [otpValues, setOtpValues] = useState({
    username,
    storeName,
    email,
    OtpCode,
  });

  useEffect(() => {
    if (
      username === "" ||
      username === undefined ||
      username === null ||
      email === "" ||
      email === undefined ||
      email === null ||
      storeName === "" ||
      storeName === undefined ||
      storeName === null
    ) {
      return router.push("/auth/sign-up");
    } else {
      setOtpValues({
        username,
        storeName,
        email,
        OtpCode,
      });
    }
  }, [OtpCode]);


  const [otpVerify_data, { isLoading }] = useVerifyOtpMutation();

  const handelSubmit = async () => {
    try {
      const res = await otpVerify_data(otpValues)
      if (!res?.error) {
        router.push("/kyc-verification")
        setCookie('biosphereearth', res?.data?.token)
      }
      ResponseToast({ res })
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

        <div className="flex justify-center mt-10">
          <Button
            name={"RESEND OTP"}
            bgcolor={"bg-[#fff]"}
            pClass={"text-primary-color font-medium p-0"}
            className={
              "border-[2px] border-primary-color max-w-[12rem] px-0 p--1"
            }
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
