"use client";

import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import AuthLayout from "@/layout/AuthLauout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useResetPasswordMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";

const Page = () => {
  const router = useRouter();

  const { email } = history?.state || {};

  const [pass, setPass] = useState({
    email,
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword } = pass;

  useEffect(() => {
    if (
      email === "" ||
      email === undefined ||
      email === null
    ) {
      return router.push("/auth/forgot-password");
    } else {
      setPass({
        email: email,
        password,
        confirmPassword,
      });
    }
  }, []);

  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const handelSubmit = async () => {
    try {
      // Addition
      if (pass.password === undefined || pass.password === '' || pass.confirmPassword === undefined || pass.confirmPassword === '') {
        return ResponseToast({ message: "All Fields Are Required" })
      } else if (pass.password !== pass.confirmPassword) {
        return ResponseToast({ message: "Passwords Do Not Match" })
      }
      const res = await resetPassword(pass)
      if (!res?.error) {
        router.push('/auth/login')
      }
      ResponseToast({ res })
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthLayout>
      <div className="rounded-md h--[20rem] max-sm:w-full w-[80%] xl:w-[65%] flex flex-col justify-center gap-2 max-sm:py-14 max-sm:p-3 py-16 p-5 lg:p-10 sm:hover:-translate-x-5 transition-all sm:hover:shadow-xl">
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
            placeHolder={"New Password"}
            className={"border-[1px] border-[silver] min-w-full bg-transparent"}
            name={'password'}
            value={password}
            onChange={(e) => setPass({ ...pass, ["password"]: e.target.value })}
          />
          <Field
            placeHolder={"Re-Enter New Password"}
            className={"border-[1px] border-[silver] min-w-full bg-transparent"}
            name={'confirmPassword'}
            value={confirmPassword}
            onChange={(e) => setPass({ ...pass, ["confirmPassword"]: e.target.value })}
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
