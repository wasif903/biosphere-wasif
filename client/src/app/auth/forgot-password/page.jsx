"use client";

import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import Link from "next/link";
import AuthLayout from "@/layout/AuthLauout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForgotPassMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";

const Page = () => {

  const [email, setEmail] = useState("");

  const router = useRouter();

  const handelChange = (e) => {
    setEmail(e.target.value);
  }

  const [forgotData, { isLoading }] = useForgotPassMutation();

  const handelSubmit = async () => {
    try {
      // Addition
      if (email === '' || email === undefined) {
        return ResponseToast({ message: "Email is required" })
      }
      const res = await forgotData({ email: email })
      if (!res.error) {
        history?.pushState({ email: email }, "", "/auth/verify-otp")
        router.push("/auth/verify-otp")
      }
      ResponseToast({ res })
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthLayout>
      <div className="rounded-md h--[20rem] max-sm:w-full w-[80%] xl:w-[65%] flex flex-col gap-2 max-sm:py-14 max-sm:p-3 py-16 p-5 lg:p-10 sm:hover:-translate-x-5 transition-all sm:hover:shadow-xl">
        <h1 className="max-sm:text-3xl text-4xl font-semibold text-center text-primary-color">
          {" "}
          Need Help?{" "}
        </h1>
        <p className="text-sm text-center px-3 md:px-5 lg:px-7 xl:px-10 text-secondary-color">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet massa quis arcu posuere.{" "}
        </p>

        <div className="flex flex-col gap-5 mt-10">
          <Field
            placeHolder={"Email"}
            className={"border-[1px] border-[silver] min-w-full bg-transparent"}
            styles={{ border: "1px solid silver" }}
            name={'email'}
            value={email}
            onChange={handelChange}
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button
            name={"CONTINUE"}
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
