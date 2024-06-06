"use client";

import Button from "@/components/button/Button";
import StoreLayout from "@/layout/StoreLayout";
import { FaAngleRight } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

import { Navigation } from "swiper/modules";
import Field from "@/components/inputFIeld/Field";
import { useVerifyKycMutation } from "@/redux/AuthSlice/AuthSlice";
import { getCookie, setCookie } from "cookies-next";
import ResponseToast from "@/components/toast/Toast";

import * as yup from "yup";

import { useFormik } from "formik";

export default function Home() {
  const [fileName, setFileName] = useState({
    company_registration: null,
    driving_license: null,
    w9form: null,
  });

  const [cookies, setCookies] = useState('')

  useEffect(() => {
    setCookies
      (getCookie("biosphereearth")
        ? JSON?.parse(getCookie("biosphereearth"))
        : getCookie("biosphereearth"))
  }, [])

  const storeid = cookies?._id;


  const [swiper, setSwiper] = useState(null);
  const [nextButtonText, setNextButtonText] = useState("Start Now");
  const [prevButtonText, setPrevButtonText] = useState("Previous");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = ["Start Now", "Continue", "Continue", "Submit"];

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        const activeIndex = swiper.activeIndex;
        const nextIndex = activeIndex + 1;
        const prevIndex = activeIndex - 1;

        if (nextIndex < slides.length) {
          setNextButtonText(`${slides[nextIndex]}`);
        } else {
          setNextButtonText("Next");
        }

        if (prevIndex >= 0) {
          setPrevButtonText(`Previous to ${slides[prevIndex]}`);
        } else {
          setPrevButtonText("Previous");
        }
      });
    }
  }, [swiper, slides]);

  // kyc api
  const [verifyKyc, { isLoading }] = useVerifyKycMutation();

  const handelSubmit = async () => {
    try {
      //// Validation Added
      if (storeid === undefined || storeid === "") {
        return ResponseToast({ message: "Please Login or Register to your account" })
      }

      const formData = new FormData();

      formData.append("desingnation", values.desingnation);
      formData.append("company_registration", values.company_registration);
      formData.append("driving_license", values.driving_license);
      formData.append("w9form", values.w9form);

      const res = await verifyKyc(storeid, formData);

      if (!res?.error) {
        ResponseToast({ res });
        swiper.slideTo(slides.length - 1);
        setCookie("biosphereearth", res?.data?.token);
        setCookies(JSON?.parse(getCookie("biosphereearth")))
      }

    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, handleChange, validateForm } = useFormik({
    initialValues: {
      desingnation: "",
      company_registration: null,
      driving_license: null,
      w9form: null,
    },
    validationSchema: yup.object({
      desingnation: yup.string().required("Designation is required*"),
      company_registration: yup
        .string()
        .required("Registration File is required*"),
      driving_license: yup.string().required("License is Required*"),
      w9form: yup.string().required("W9form is Required*"),
    }),
  });

  const handleButtonClick = async () => {
    const errors_ = await validateForm();

    if (Object?.keys(errors_)?.length === 0) {
      swiper.slideTo(swiper.activeIndex + 1);
    }

  };

  return (
    <StoreLayout>
      <h4 className="text-xl text-secondary-color mt-4">
        {" "}
        Dashboard Overview{" "}
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <div className="w-full h-fit bg-primary-color p-5 rounded-xl mt-2 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-medium text-[#fff]">
              {" "}
              Hello Tassy Omah!{" "}
            </h4>
            <p className="text-sm text-[#fff]">
              Have a nice day and don’t forget to take care of your health!
            </p>
            <small className="flex items-center text-[#7de77d] mt-5">
              {" "}
              Health Tips <FaAngleRight className="text-xs mt-[0.2rem] ms-2" />{" "}
            </small>
          </div>
          <img
            src="/images/pic_1.png"
            alt="img.png"
            className="w-[10rem] hidden sm:block"
          />
        </div>
        {cookies?.status?.[0] !== 'Pending' && cookies?.role?.[0] === 'StoreOwner' ?

          <div className="w-full h--[20rem] relative">
            {nextButtonText === "Submit" ? (
              <div
                className={`w-full absolute top-[80%] translate-y-[50%] z-[9999] flex justify-center`}
                ref={nextRef}
              >
                <Button
                  name={"Submit"}
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
            ) : nextButtonText === "Continue" ? (
              <div
                className={`w-full absolute top-[80%] translate-y-[50%] z-[9999] flex justify-center`}
                ref={nextRef}
              >
                <Button
                  name={"Continue"}
                  bgcolor={"bg--[#000]"}
                  pClass={"text-[#fff] font-medium"}
                  className={"max-w-[10rem]"}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
                  }}
                  onClick={handleButtonClick}
                  isLoading={isLoading}
                />
              </div>
            ) : (
              <div
                className={`w-full absolute top-[80%] translate-y-[50%] z-[9999] ${nextButtonText === "Next" ? "hidden" : "flex"
                  } justify-center`}
              >
                <div
                  className="custom-button next w--[10rem] h-[3rem] rounded-lg flex justify-center items-center text-white font-medium cursor-pointer p-3"
                  ref={nextRef}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
                  }}
                >
                  {nextButtonText}{" "}
                  {nextButtonText === "Start Now" ? (
                    <BsArrowUpRight className="ms-3 font-semibold animate-bounce" />
                  ) : nextButtonText === "Continue" ? (
                    <FaArrowRightLong className="ms-3 font-semibold animate-bounce" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}

            <Swiper
              navigation={{
                // prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={setSwiper}
              modules={[Navigation]}
              allowTouchMove={false}
              className="swiper-container rounded-xl blur_effect mySwiper h-full mb-3 "
            >
              <SwiperSlide className="flex flex-col justify-center items-center py-10 px-2 z-50">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/kyc_pic.png"
                    alt="img.png"
                    className="w--[10rem]"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl mt-3 font-medium text-center text-secondary-color mb-[6rem]">
                  Continue to KYC Verification
                </h2>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col justify-center items-center py-10 px-2">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center text-secondary-color mt-[5rem]">
                  KYC Verification
                </h2>

                <div className="flex flex-col justify-center items-center gap-4 p-2 mt-10">
                  <div>
                    <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg">
                      <Field
                        placeHolder={"Designation"}
                        className={"bg-transparent"}
                        name={"desingnation"}
                        value={values.desingnation}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-[red] ms-2"> {errors.desingnation} </p>
                  </div>

                  <div>
                    <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg p-[0.6rem]">
                      <label
                        htmlFor="fileInputRegistration"
                        className="flex items-center cursor-pointer px-2 py--2 rounded text-secondary-color transition-colors"
                      >
                        <FaUpload className="text-primary-color" />
                        <div className="ms-2">
                          {fileName.company_registration ||
                            "Company Registration Document"}
                        </div>
                      </label>
                      <input
                        type="file"
                        id="fileInputRegistration"
                        className="hidden"
                        name="company_registration"
                        onChange={(event) => {
                          setFileName({
                            ...fileName,
                            company_registration: event.target.files[0]?.name,
                          });
                          handleChange(event);
                        }}
                      />
                    </div>
                    <p className="text-[red] ms-2">
                      {errors.company_registration}
                    </p>
                  </div>

                  <div>
                    <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg p-[0.6rem]">
                      <label
                        htmlFor="fileInputLicense"
                        className="flex items-center cursor-pointer px-2 py--2 rounded text-secondary-color transition-colors"
                      >
                        <FaUpload className="text-primary-color" />
                        <div className="ms-2">
                          {fileName.driving_license || "Driving License"}
                        </div>
                      </label>
                      <input
                        type="file"
                        id="fileInputLicense"
                        className="hidden"
                        name="driving_license"
                        onChange={(event) => {
                          setFileName({
                            ...fileName,
                            driving_license: event.target.files[0]?.name,
                          });
                          handleChange(event);
                        }}
                      />
                    </div>
                    <p className="text-[red] ms-2">{errors.driving_license}</p>
                  </div>

                  <div className="mb-[6rem]">
                    <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg p-[0.6rem]">
                      <label
                        htmlFor="fileInputW9"
                        className="flex items-center cursor-pointer px-2 py--2 rounded text-secondary-color transition-colors"
                      >
                        <FaUpload className="text-primary-color" />
                        <div className="ms-2">
                          {fileName.w9form || "W9 Form Document"}
                        </div>
                      </label>
                      <input
                        type="file"
                        id="fileInputW9"
                        className="hidden"
                        name="w9form"
                        onChange={(event) => {
                          setFileName({
                            ...fileName,
                            w9form: event.target.files[0]?.name,
                          });
                          handleChange(event);
                        }}
                      />
                    </div>
                    <p className="text-[red] ms-2">{errors.w9form}</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col justify-center items-center py-10 px-2">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center text-secondary-color mt-[5rem]">
                  Bank Account
                </h2>
                <div className="flex flex-col justify-center items-center gap-4 p-2 mt-9">
                  <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg">
                    <Field
                      placeHolder={"Account Holder Name"}
                      className={"bg-transparent"}
                      name={"account_holder"}
                    // value={account_holder}
                    // onChange={handleOnChange}
                    />
                  </div>
                  <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg">
                    <Field
                      placeHolder={"Account Number"}
                      className={"bg-transparent"}
                      name={"account_number"}
                    // value={account_number}
                    // onChange={handleOnChange}
                    />
                  </div>
                  <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg">
                    <Field
                      placeHolder={"Bank Name"}
                      className={"bg-transparent"}
                      name={"bank_name"}
                    // value={bank_name}
                    // onChange={handleOnChange}
                    />
                  </div>
                  <div className="border-[1px] border-[silver] box_shadow_pri w-full sm:w-[30rem] rounded-lg mb-[6rem]">
                    <Field
                      placeHolder={"CVC"}
                      className={"bg-transparent"}
                      name={"cvc"}
                    // value={cvc}
                    // onChange={handleOnChange}
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col justify-center items-center py-10 px-2 z-50">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/kyc_pic.png"
                    alt="img.png"
                    className="w--[10rem]"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl mt-3 font-medium text-center text-secondary-color mb-[6rem] animate-pulse">
                  KYC Verification In Progress ...
                </h2>
              </SwiperSlide>
            </Swiper>


          </div>
          :
          <div className="swiper-container rounded-xl blur_effect mySwiper h-full mb-3 ">
            <div className="flex flex-col justify-center items-center py-10 px-2 z-50">
              <div className="flex justify-center items-center">
                <img
                  src="/images/kyc_pic.png"
                  alt="img.png"
                  className="w--[10rem]"
                />
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl mt-3 font-medium text-center text-secondary-color mb-[6rem] animate-pulse">
                KYC Verification In Progress ...
              </h2>
            </div>
          </div>
        }

      </div>
    </StoreLayout>
  );
}
