"use client";

import StoreLayout from "@/layout/StoreLayout";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useGetSingleProductQuery } from "@/redux/ProductSlice/productslice";
import { getCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import { FaRegEnvelope } from "react-icons/fa";
import ProductSwiperSlider from "@/components/product_swiper_slider/productSwiperSlider";
import Field from "@/components/inputFIeld/Field";
import { Progress } from "@/components/ui/progress";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  //   const getCookieData = getCookie("biosphereearth")
  //     ? JSON?.parse(getCookie("biosphereearth"))
  //     : getCookie("biosphereearth");
  //   const storeID = getCookieData?._id;
  //   const { id: prodID } = useParams();

  //   const getSingleProduct = useGetSingleProductQuery({ storeID, prodID });
  //   const data = getSingleProduct?.data;

  // const getSingleProduct = useGetSingleProductQuery({ slug });
  // const data_ = getSingleProduct?.data;
  // console.log(data_);

  const slider_1 = [
    {
      id: 1,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 2,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 3,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 4,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 5,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 6,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 7,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 8,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
    {
      id: 9,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc.",
      rating: "4.5",
      star: <FaStar className="text-yellow-400 text-sm" />,
    },
  ];

  const data = {
    galleryImages: [
      "/images/bottle.png",
      "/images/bottle.png",
      "/images/bottle.png",
      "/images/bottle.png",
      "/images/bottle.png",
    ],
  };

  return (
    <StoreLayout>
      <div
        className={`popupChat border--2 border-[red] bg-white box_shadow_sec max-sm:w-full w-[40rem] h-[35rem] rounded-xl overflow-hidden z-50 absolute right-0 top-[50%] translate-y-[-60%] max-lg:translate-y-[56%] ${
          open != true ? "translate-x-[1000vw]" : "translate-x-0"
        } transition-all duration-500`}
      >
        <div className="bg-white w-full rounded-lg p-3">
          <div className="w-full h-full">
            <div className="flex flex-col items--center gap-3 overflow-hidden">
              <div className="flex items-center relative">
                <img
                  src="/images/team-2.png"
                  alt="img"
                  className="w-[5rem] h-[5rem] rounded-full"
                />
                <div className="flex flex-col justify-between">
                  <div className="w-full flex justify-between">
                    <h4 className="text-[#344767] text-xl font-semibold">
                      Charlie Watson
                      <br />
                      <span className="text-[#344767ce] text-sm">
                        {" "}
                        last seen today at 1:53am{" "}
                      </span>
                    </h4>
                  </div>
                </div>
                <IoClose
                  className="text-[#6E7191] text-base absolute top-3 right-3 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="border--2 border-[green] flex flex-col justify-between w-full h--[84.5%]">
              <div className="border--2 border-[blue] h-[42vh] flex overflow-hidden overflow-y-auto">
                <ul className="h-fit w-full flex flex-col gap-4 p-2">
                  <li className="w-full flex flex-col items-start">
                    <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="text-sm">
                        {" "}
                        It contains a lot of good lessons about effective
                        practices{" "}
                      </p>
                      <small className="text-left mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-end">
                    <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="font-normal text-sm">
                        {" "}
                        Can it generate daily design links that include essays
                        an{" "}
                      </p>
                      <small className="text-right mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-start">
                    <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="text-sm">
                        {" "}
                        It contains a lot of good lessons about effective
                        practices{" "}
                      </p>
                      <small className="text-left mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-end">
                    <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="font-normal text-sm">
                        {" "}
                        Can it generate daily design links that include essays
                        an{" "}
                      </p>
                      <small className="text-right mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-start">
                    <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="text-sm">
                        {" "}
                        It contains a lot of good lessons about effective
                        practices{" "}
                      </p>
                      <small className="text-left mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-end">
                    <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="font-normal text-sm">
                        {" "}
                        Can it generate daily design links that include essays
                        an{" "}
                      </p>
                      <small className="text-right mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-start">
                    <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="text-sm">
                        {" "}
                        It contains a lot of good lessons about effective
                        practices{" "}
                      </p>
                      <small className="text-left mt-1"> 4:42pm </small>
                    </div>
                  </li>
                  <li className="w-full flex flex-col items-end">
                    <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] p-3 rounded-xl flex flex-col">
                      <p className="font-normal text-sm">
                        {" "}
                        Can it generate daily design links that include essays
                        an{" "}
                      </p>
                      <small className="text-right mt-1"> 4:42pm </small>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="h-[4rem] flex justify-between items-center p-2 gap-4">
                <div className="w-full flex justify-center items-center px-3 rounded-lg bg-white box_shadow_pri">
                  <Field placeHolder={"Type here"} bgColor={"bg-transparent"} />
                </div>
                <div className="bg-[#374D99] w-[3.5rem] h-full flex justify-center items-center rounded-lg py-3">
                  <RiSendPlaneFill className="text-xl text-[#fff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5 rounded-lg bg-white box_shadow_sec h-fit lg:sticky lg:top-0">
          <div className="w-full">
            <>
              <div className="flex flex-col w-full h-fit sm:h-[30rem] lg:h-[40vw] box_shadow_sec rounded-xl overflow-hidden mb-4">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 w-full h-fit"
                >
                  {data?.galleryImages?.map((item, i) => (
                    <React.Fragment key={i}>
                      <SwiperSlide className="h-fit mb-0">
                        <img
                          src={item}
                          // src={data?.productImage}
                          alt="img.png"
                          className="w-full h-full object-center mb-0 object-cover"
                        />
                      </SwiperSlide>
                    </React.Fragment>
                  ))}
                </Swiper>
              </div>
            </>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 max-lg:p-8">
          <div className="rounded-lg h-fit p-0 max-sm:p-5">
            <h1 className="text-primary-color ">Ordinary Face Serum</h1>
            <h4 className="text-primary-color text-base font-medium mt-5">
              {" "}
              Lorem Inc...{" "}
            </h4>
          </div>

          <div className="p--5 rounded-lg bg-white box_shadow_sec h-fit p-8 max-sm:p-5">
            <h4 className="text-xl font-semibold text-[#455154]">Price</h4>
            {/* {data?.variations?.map((item, i) => ( */}
            <div className="flex items-center w-full h-fit gap-2 mt-3">
              <input type="radio" name="price" />
              <h4
                className="text-primary-color text-lg font-medium"
                // key={i + 4}
              >
                US$62
                {/* {item?.price} */}
                <span className="text-secondary-color ms-2">
                  {" "}
                  (1 - 99 pieces){" "}
                  {/* ({item?.minQty} - {item?.maxQty} pieces){" "} */}
                </span>
              </h4>
            </div>

            <div className="flex items-center w-full h-fit gap-2 mt-3">
              <input type="radio" name="price" />
              <h4 className="text-primary-color text-lg font-medium">
                US$60
                <span className="text-secondary-color ms-2">
                  {" "}
                  (99 - 999 pieces){" "}
                </span>
              </h4>
            </div>

            <div className="flex items-center w-full h-fit gap-2 mt-3">
              <input type="radio" name="price" />
              <h4 className="text-primary-color text-lg font-medium">
                US$58
                <span className="text-secondary-color ms-2">
                  {" "}
                  (1000 - 9999 pieces){" "}
                </span>
              </h4>
            </div>
            {/* ))} */}
          </div>

          {/* <div className="p--5 rounded-lg bg-white box_shadow_sec h-fit p-8 max-sm:p-5">
            <h4 className="text-xl font-semibold text-[#455154]">Variation</h4>
            <h4 className="text-[#222222] text-base font-medium mt-2">
              Total options: 4 Color.
            </h4>
            <h3 className="text-primary-color text-sm font-medium mt-2">
              1. Color(4)
            </h3>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-4"
            >
              {data?.galleryImages?.map((item, i) => (
                <React.Fragment key={i + 1}>
                  <SwiperSlide className="border--2 border-[green] max-w-[5rem] max-h-[5rem] box_shadow_sec rounded-xl overflow-hidden cursor-pointer">
                    <img
                      src={item}
                      alt="img"
                      className="w-full h-full h--[8rem]"
                    />
                  </SwiperSlide>
                </React.Fragment>
              ))}
            </Swiper>
          </div> */}

          <div className="rounded-lg bg-[#fff] h-fit p-8 max-sm:p-5">
            <h4 className="text-xl font-semibold text-[#455154]">Shipping</h4>
            <p className="text-[#6E7191] text-sm font-medium mt-2">
              Ocean+Express US Spot Rate (Economy) Shipping total: $537.47 for
              60 pieces Estimated delivery by Jul 19-Aug 2
            </p>
            <div className="flex gap-4 my-5 flex-wrap">
              <Button
                name={"Start order"}
                bgcolor={"bg-[#374D99]"}
                pClass={"text-[#fff] text-sm font-normal p-0 m-0"}
                className={"max-w-[10rem] rounded-[10rem] py-3 max-sm:px-4"}
                style={{
                  borderRadius: "10rem",
                }}
              />
              <Button
                name={"Add to cart"}
                bgcolor={"bg-[#fff]"}
                pClass={"text-[#222222] text-sm font-medium p-0 m-0"}
                className={
                  "border-[1px] border-[#222222] max-w-[10rem] rounded-[10rem] py-3 max-sm:px-4"
                }
                style={{
                  borderRadius: "10rem",
                }}
                onClick={()=>router.push('/cart')}
              />
              <Button
                icon={<FaRegEnvelope className="text-[#222222] text-xl" />}
                bgcolor={"bg-[#fff]"}
                // pClass={"text-[#222222] text-xs font-medium p-0 m-0"}
                className={"border-[1px] border-[#222222] max-w-fit"}
                style={{
                  borderRadius: "10rem",
                  padding: "0.7rem",
                }}
                onClick={() => setOpen(true)}
              />
            </div>
            <h4 className="text-xl font-semibold text-[#455154]">
              Product Description
            </h4>
            <p className="text-[#6E7191] text-sm font-medium mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-[3rem] max-lg:p-8">
        <div className="w-full flex justify-between items-center pb-5">
          <h3 className="text-[#374D99] text-2xl md:text-3xl font-medium min-w-fit max-sm:text-[16px]">
            Other Products Like this
          </h3>
          <div className="flex justify-center">
            <Button
              name={"View More"}
              bgcolor={"bg-[#374D99]"}
              pClass={"text-[#fff] text-xs font-normal p-0 m-0"}
              className={"max-w-[12rem] rounded-[10rem] py-3 max-sm:px-4"}
              style={{
                borderRadius: "10rem",
              }}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <ProductSwiperSlider sliderData={slider_1} />
        </div>
      </div>

      <div className="w-full max-lg:p-8">
        <h3 className="text-[#374D99] text-2xl md:text-3xl font-medium min-w-fit max-sm:text-[16px]">
          Rating & Reviews
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-[1.5rem]">
          <div className="bg-white box_shadow_pri p-4 max-h-fit flex flex-col justify--center items-center rounded-xl">
            <h3 className="text-primary-color text-lg text-center font-semibold">
              {" "}
              Ratings & Reviews{" "}
            </h3>
            <small className="text-[#5B555C] text-base font-medium mt-2">
              {" "}
              Add Rating{" "}
            </small>
            <div className="w-full flex justify-center mt-2 gap-2">
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-[#E8E8E8] text-2xl" />
              <FaStar className="text-[#E8E8E8] text-2xl" />
              <FaStar className="text-[#E8E8E8] text-2xl" />
            </div>
            <Field
              type="textarea"
              placeHolder={"Write A Review"}
              className={"mt-4 h-[7rem]"}
            />
            <div className="w-full flex justify-center mt-4">
              <Button
                name={"Submit"}
                bgcolor={"bg-[#374D99]"}
                pClass={"text-[#fff] text-xs font-normal p-0 m-0"}
                className={"max-w-full rounded-[10rem] py-3 max-sm:px-4"}
              />
            </div>
          </div>

          <div className="bg-white box_shadow_pri p-4 max-h-fit flex flex-col justify--center items-center rounded-xl">
            <h3 className="text-primary-color text-lg text-center font-semibold">
              {" "}
              Product Ratings{" "}
            </h3>
            <small className="text-primary-color text-4xl font-medium">
              4.3
            </small>
            <div className="w-full flex justify-center mt-2 gap-2">
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-yellow-400 text-2xl" />
              <FaStar className="text-[#E8E8E8] text-2xl" />
            </div>
            <small className="text-[#5B555C] text-sm font-medium mt-2">
              Rated By 200+ Users
            </small>
            <div className="w-full max-sm:px-0 p-5 flex flex-col gap-1">
              <div className="flex justify-between items-center px-3 text-[#5B555C]">
                <span className="min-w-[2.5rem]"> 75% </span>
                <div className="w-[90%] px-2 flex justify-center items-center">
                  <Progress
                    className="bg-primary-color rounded-sm"
                    reverse={true}
                    additionalClass="h-[0.8rem] rounded-sm"
                    value={75}
                  />
                </div>
                <span className="min-w-fit"> 5 Stars </span>
              </div>
              <div className="flex justify-between items-center px-3 text-[#5B555C]">
                <span className="min-w-[2.5rem]"> 16% </span>
                <div className="w-[90%] px-2 flex justify-center items-center">
                  <Progress
                    className="bg-primary-color rounded-sm"
                    reverse={true}
                    additionalClass="h-[0.8rem] rounded-sm"
                    value={16}
                  />
                </div>
                <span className="min-w-fit"> 4 Stars </span>
              </div>
              <div className="flex justify-between items-center px-3 text-[#5B555C]">
                <span className="min-w-[2.5rem]"> 5% </span>
                <div className="w-[90%] px-2 flex justify-center items-center">
                  <Progress
                    className="bg-primary-color rounded-sm"
                    reverse={true}
                    additionalClass="h-[0.8rem] rounded-sm"
                    value={5}
                  />
                </div>
                <span className="min-w-fit"> 3 Stars </span>
              </div>
              <div className="flex justify-between items-center px-3 text-[#5B555C]">
                <span className="min-w-[2.5rem]"> 1% </span>
                <div className="w-[90%] px-2 flex justify-center items-center">
                  <Progress
                    className="bg-primary-color rounded-sm"
                    reverse={true}
                    additionalClass="h-[0.8rem] rounded-sm"
                    value={1}
                  />
                </div>
                <span className="min-w-fit"> 2 Stars </span>
              </div>
              <div className="flex justify-between items-center px-3 text-[#5B555C]">
                <span className="min-w-[2.5rem]"> 1% </span>
                <div className="w-[90%] px-2 flex justify-center items-center">
                  <Progress
                    className="bg-primary-color rounded-sm"
                    reverse={true}
                    additionalClass="h-[0.8rem] rounded-sm"
                    value={1}
                  />
                </div>
                <span className="min-w-fit"> 1 Stars </span>
              </div>
            </div>
          </div>

          <div className="bg-white box_shadow_pri p-7 max-h-fit flex flex-col justify--center items-center rounded-xl">
            <h3 className="text-primary-color text-lg text-center font-semibold">
              {" "}
              Product Reviews{" "}
            </h3>
            <div className="w-full mt-2 flex flex-col items-start gap-2 pb-3">
              <div className="w-full flex gap-3">
                <img
                  src="/images/pic.png"
                  alt="img"
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <div>
                  <h4 className="text-[#261E27] font-semibold">
                    {" "}
                    Charlie Jayson{" "}
                  </h4>
                  <div className="flex mb-1">
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-[#c0c0c0e5] text-base" />
                  </div>
                </div>
              </div>
              <p className="text-secondary-color text-sm font-normal mt--2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full mt-2 flex flex-col items-start gap-2 pb-3">
              <div className="w-full flex gap-3">
                <img
                  src="/images/pic.png"
                  alt="img"
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <div>
                  <h4 className="text-[#261E27] font-semibold">
                    {" "}
                    Charlie Jayson{" "}
                  </h4>
                  <div className="flex mb-1">
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-yellow-500 text-base" />
                    <FaStar className="text-[#c0c0c0e5] text-base" />
                  </div>
                </div>
              </div>
              <p className="text-secondary-color text-sm font-normal mt--2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default Page;
