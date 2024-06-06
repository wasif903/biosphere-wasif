"use client";

import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import Link from "next/link";
import AuthLayout from "@/layout/AuthLauout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRegisterMutation, useUserRegisterMutation } from "@/redux/AuthSlice/AuthSlice";
import ResponseToast from "@/components/toast/Toast";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { FaUpload } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();

  const [findUser, setFindUser] = useState("")
  const [fileName, setFileName] = useState("");

  const { values, errors, handleChange, validateForm, setFieldValue } = useFormik({
    initialValues: {
      username: "",
      storeName: "",
      email: "",
      password: "",
      isManufacturer: false,
      img: null,
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required*"),
      storeName: yup.string().required("Store Name is required*"),
      email: yup
        .string()
        .test("is-valid-email", "Email is not valid", function (value) {
          return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
        })
        .test("has-com", "Email is not valid", function (value) {
          return value.includes(".com");
        })
        .required("Email is required*"),
      password: yup
        .string()
        .min(6, "Password should be of minimum 6 characters length")
        .required("Password is required*"),
      img: yup.string().required("logo is required*"),
    }),
  });

  const handleSelect = (e) => {
    setFindUser(e.target.value)
    setFieldValue('isManufacturer', e.target.value === "Manufacture" ? true : e.target.value === "Supplier" ? false : false);
  }

  const [submitFormData, { isLoading }] = useRegisterMutation();

  const handelSubmit = async () => {
    try {
      const error_ = await validateForm();

      if (Object?.keys(error_).length === 0) {
        const formData = new FormData();

        if (findUser === "" || findUser === undefined) {
          return ResponseToast({ message: "Please select a role first" })
        }
        formData.append("username", values.username);
        formData.append("storeName", values.storeName);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("isManufacturer", values.isManufacturer);
        formData.append("logo ", values.img);

        const res = await submitFormData(formData);

        if (!res?.error) {
          ResponseToast({ res });
          const otp_data = res?.data?.toValidate;
          if (findUser === "Supplier " || findUser === "Manufacture") {
            history.pushState({ otp_data }, "", "/auth/verify-store");
            router.push("/auth/verify-store");
          } else {
            ResponseToast({ res });
            router.push("/auth/login");
          }
        }
      }
    } catch (error) {
      console.log(error);
      ResponseToast({ message: "Error occured while signup" });
    }
  };


  // Create a new user account API
  const [createUserAPI, { isLoading: userLoading }] = useUserRegisterMutation()

  // Handle Create a new user account
  const handleCreateUser = async () => {
    try {
      const error_ = await validateForm();

      const keysToCheck = ["username", "email"];

      const filteredErrors = keysToCheck.reduce((acc, key) => {
        if (error_[key]) {
          acc[key] = error_[key];
        }
        return acc;
      }, {});

      if (Object.keys(filteredErrors).length === 0) {

        const res = await createUserAPI({
          username: values.username,
          email: values.email,
          password: values.password,
          cpass: values.password,
        })

        if (!res.error) {
          ResponseToast({ res })
          router.push("/dashboard")
        }

      } else {
        ResponseToast({ message: "All fields required" })
      }
    } catch (error) {

    }
  }

  return (
    <AuthLayout>
      <div className="rounded-md h--[20rem] max-sm:w-full w-[80%] xl:w-[65%] flex flex-col gap-2 max-sm:py-2 max-sm:p-3 py-16 p-5 lg:p-10 sm:hover:-translate-x-5 transition-all sm:hover:shadow-xl">
        <h1 className="max-sm:text-3xl text-4xl font-semibold text-center text-primary-color">
          {" "}
          SIGN UP{" "}
        </h1>
        <p className="text-sm text-center px-3 md:px-5 lg:px-7 xl:px-10 text-secondary-color">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet massa quis arcu posuere.{" "}
        </p>

        <div className="flex flex-col gap-5 mt-10 ">
          <div className="border-[1px] border-[silver]  rounded-lg overflow-hidden pr-3">
            <select
              onChange={(e) => handleSelect(e)}
              className="w-full p-3 text-primary-color font-semibold pr-4 outline-none"
            >
              <option value="Supplier">Supplier</option>
              <option value="Manufacture">Manufacture</option>
              <option value="User">User</option>
            </select>
          </div>

          <div>
            <Field
              placeHolder={"Username"}
              className={
                "border-[1px] border-[silver] min-w-full bg-transparent"
              }
              name={"username"}
              value={values.username}
              onChange={handleChange}
            />
            <p className="text-[red] max-xl:text-sm ms-2">
              {" "}
              {errors.username}{" "}
            </p>
          </div>
          {findUser !== "User" &&
            <div>
              <Field
                placeHolder={"storeName"}
                className={
                  "border-[1px] border-[silver] min-w-full bg-transparent"
                }
                name={"storeName"}
                value={values.storeName}
                onChange={handleChange}
              />
              <p className="text-[red] max-xl:text-sm ms-2">
                {" "}
                {errors.storeName}{" "}
              </p>
            </div>
          }

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

          <div>
            <Field
              placeHolder={"Password"}
              className={
                "border-[1px] border-[silver] min-w-full bg-transparent"
              }
              name={"password"}
              value={values.password}
              onChange={handleChange}
            />
            <p className="text-[red] max-xl:text-sm ms-2">
              {" "}
              {errors.password}{" "}
            </p>
          </div>
          {findUser !== "User" &&
            <div>
              <div className="border-[1px] border-[silver] box_shadow_pri w-full rounded-lg p-[0.6rem]">
                <label
                  htmlFor="fileInputW9"
                  className="flex items-center cursor-pointer px-2 py--2 rounded text-secondary-color transition-colors"
                >
                  <FaUpload className="text-primary-color" />
                  <div className="ms-2">{fileName || "Upload logo file"}</div>
                </label>
                <input
                  type="file"
                  id="fileInputW9"
                  className="hidden"
                  name="img"
                  onChange={(event) => {
                    setFileName(event.target.files[0]?.name);
                    handleChange(event);
                  }}
                />
              </div>
              <p className="text-[red] max-xl:text-sm ms-2">{errors.img}</p>
            </div>
          }
        </div>

        <div className="flex justify-center mt-8">
          <Button
            name={"CONTINUE"}
            bgcolor={"bg--[#000]"}
            pClass={"text-[#fff] font-medium"}
            className={"max-w-[10rem]"}
            style={{
              backgroundImage:
                "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
            }}
            onClick={findUser !== "User" ? handelSubmit : handleCreateUser}
            isLoading={isLoading || userLoading}
          />
        </div>

        <div className="max-sm:mt-[2rem] flex justify-center mt-3">
          <p className="text-center text-sm text-primary-color flex flex-row gap-2">
            {" "}
            Already have an account? <br />{" "}
            <Link href={"/auth/login"} className="font-semibold"> SIGN IN </Link>{" "}
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Page;
