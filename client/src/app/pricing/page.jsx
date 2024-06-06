"use client";

import StoreLayout from "@/layout/StoreLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCrown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Button from "@/components/button/Button";
import { breakpoints } from "@/lib/BreakPoints";
import { useGetPlansQuery } from "@/redux/PlanSlice/PlanSlice";
import React from "react";

const Page = () => {

  const { data: plans } = useGetPlansQuery();
  // console.log(data);

  const plan = [
    {
      type: "Sliver",
      price: "50",
      details: [
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members 2 team members 2 team members 2 team members 2 team members ",
      ],
    },
    {
      type: "Gold",
      price: "50",
      details: [
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
      ],
    },
    {
      type: "Platinum",
      price: "50",
      details: [
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
        "2 team members",
      ],
    },
  ];

  return (
    <StoreLayout>
      <div className="flex flex-col justify-center items-center p-2 mb-3">
        <h4 className="text-secondary-color font-semibold text-[1.5rem] sm:text-[2rem] lg:text-[3rem] text-center pt-10">
          {" "}
          Choose Your Pricing Plan{" "}
        </h4>
        <p className="text-secondary-color text-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[50%] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-2 2xl:px-[12rem]">
        <Swiper
          breakpoints={breakpoints}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full h-full mySwiper mb-10"
        >
          {plans?.map((item, i) => (
            <React.Fragment key={i + 1}>
              <SwiperSlide
                className="box_shadow_pri bg-[#FFFFFF] rounded-lg flex flex-col justify-between max-sm:px-0 py-5 px-12 w-[25rem]"
              >
                <div className="flex flex-col gap-5 justify-center items-center">
                  {item.role === "Sliver" ? (
                    <FaCrown className="text-4xl sm:text-5xl lg:text-6xl text-[#bbbbbb]" />
                  ) : item.role === "Gold" ? (
                    <FaCrown className="text-4xl sm:text-5xl lg:text-6xl text-[#FFDE50]" />
                  ) : item.role === "Platinum" ? (
                    <FaCrown className="text-4xl sm:text-5xl lg:text-6xl text-[#0222AE]" />
                  ) : (
                    ""
                  )}
                  <h4 className="font-medium text-xl lg:text-3xl text-secondary-color">
                    {item.role}
                  </h4>
                  <h4 className="font-medium text-xl lg:text-2xl text-secondary-color">
                    {item.title}
                  </h4>
                  <h4 className="text-black text-[1.2rem] lg:text-[1.8rem] font-semibold">
                    $ {item.price}
                  </h4>
                </div>
                <div className="my-12 h-[15rem] overflow-auto" dangerouslySetInnerHTML={{ __html: item.description }} >
                </div>

                <Button
                  name={"Subscribe"}
                  pClass={
                    "bg_gradient text-white rounded-lg py-3"
                  }
                />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </StoreLayout>
  );
};

export default Page;
