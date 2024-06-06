"use client";

import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import Link from "next/link";
import AuthLayout from "@/layout/AuthLauout";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";
import { setCookie } from "cookies-next";
import { useFormik } from "formik";
import * as yup from "yup";

const Page = () => {
  const router = useRouter();

  const { values, errors, handleChange, validateForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string("Enter your email")
        .test('is-valid-email', 'Email is not valid', function (value) {
          return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
        })
        .test('has-com', 'Email is not valid', function (value) {
          return value.includes('.com');
        })
        .required("Email is required"),
      password: yup
        .string("Enter your password")
        .min(6, "Password should be of minimum 6 characters length")
        .required("Password is required"),
    }),
  });

  const [loginData, { isLoading }] = useLoginMutation();

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const error_ = await validateForm();
      if (Object?.keys(error_)?.length === 0) {
        const res = await loginData(values);
        if (!res.error) {
          setCookie("biosphereearth", res?.data?.token);
          router.push("/dashboard");
        }
        ResponseToast({ res });
      }
    } catch (error) {
      console.log(error);
      // ResponseToast({ message: "Error occured while loggin in" });
    }
  };

  return (
    <AuthLayout>
      <div className="rounded-md h--[20rem] max-sm:w-full w-[80%] xl:w-[65%] flex flex-col gap-2 max-sm:py-14 max-sm:p-3 py-16 p-5 lg:p-10 sm:hover:-translate-x-5 transition-all sm:hover:shadow-xl">
        <h1 className="max-sm:text-3xl text-4xl font-semibold text-center text-primary-color">
          {" "}
          SIGN IN{" "}
        </h1>
        <p className="text-sm text-center px-3 md:px-5 lg:px-7 xl:px-10 text-secondary-color">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet massa quis arcu posuere.{" "}
        </p>

        <form className="flex flex-col gap-5 mt-10" onSubmit={(e) => handelSubmit(e)}>
          <div>
            <Field
              placeHolder={"Email"}
              className={
                "border-[1px] border-[silver] min-w-full bg-transparent"
              }
              name={"email"}
              value={values.email}
              onChange={handleChange}
            />
            <p className="text-[red] max-xl:text-sm ms-2"> {errors.email} </p>
          </div>
          <div className="flex flex-col items-end justify-end gap-2">
            <div className="w-full">
              <Field
                placeHolder={"Password"}
                className={
                  "border-[1px] border-[silver] min-w--full bg-transparent"
                }
                name={"password"}
                value={values.password}
                onChange={handleChange}
              />
              <p className="text-[red] max-xl:text-sm ms-2"> {errors.password} </p>
            </div>

            <Link href={"/auth/forgot-password"}>
              <small className="text-sm text-right text-primary-color">
                Forgot Password?
              </small>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              name={"SIGN IN"}
              bgcolor={"bg--[#000]"}
              pClass={"text-[#fff] font-medium"}
              className={"max-w-[10rem]"}
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
              }}
              // onClick={handelSubmit}
              isLoading={isLoading}
            />
          </div>
        </form>


        <div className="mt-[5rem] flex justify-center">
          <p className="text-center text-sm text-primary-color flex flex-row gap-2">
            Don’t have an account? <br />{" "}
            <Link href={"/auth/sign-up"} className="font-semibold"> SIGN UP </Link>{" "}
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Page;
