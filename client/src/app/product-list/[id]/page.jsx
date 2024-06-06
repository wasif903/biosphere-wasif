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
import { useParams } from "next/navigation";

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getCookieData = getCookie("biosphereearth")
    ? JSON?.parse(getCookie("biosphereearth"))
    : getCookie("biosphereearth");
  const storeID = getCookieData?._id;
  const { id: slug } = useParams();

  const getSingleProduct = useGetSingleProductQuery({ slug });
  const data = getSingleProduct.data;
  console.log(data);

  return (
    <StoreLayout>
      <h4 className="text-xl text-secondary-color  mb-4">
        Dashboard Overview{" "}
      </h4>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5 rounded-lg bg-white box_shadow_sec h-fit lg:sticky lg:top-0">
          <div className="flex justify-between mb-5">
            {/* <div>
              <h1 className="text-primary-color"> {} </h1>
              <p className="text-[#6E7191]">
                {}
              </p>
            </div> */}
            <div className="flex gap-4">
              <div className="border-2 border-primary-color w-[2.2rem] h-[2.2rem] rounded-full bg-white flex justify-center items-center cursor-pointer">
                <MdModeEdit className="text-primary-color text-xl" />
              </div>
              <div className="w-[2.2rem] h-[2.2rem] rounded-full bg_gradient flex justify-center items-center cursor-pointer">
                <MdDelete className="text-white text-xl" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <>
              <div className="flex flex-col w-full h-fit sm:h-[30rem] lg:h-[25vw] box_shadow_sec rounded-xl overflow-hidden mb-4">
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
                      <SwiperSlide className="h-fit mb-0" >
                        <img
                          src={item}
                          // src={data?.productImage}
                          alt="img.png"
                          className="w-full h-full object-center mb-0"
                        />
                      </SwiperSlide>
                    </React.Fragment>
                  ))}
                </Swiper>
              </div>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {data?.galleryImages?.map((item, i) => (
                  <React.Fragment key={i + 1}>
                    <SwiperSlide className="box_shadow_sec rounded-xl overflow-hidden cursor-pointer">
                      <img src={item} alt="img" className="w-full h-[8rem]" />
                    </SwiperSlide>
                  </React.Fragment>
                ))}
              </Swiper>
            </>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="p--5 rounded-lg bg-white box_shadow_sec h-fit p-10 max-sm:p-5">
            <h1 className="text-primary-color ">{data?.title}</h1>
            <h4 className="text-primary-color text-base font-medium mt-5">
              {" "}
              Product Description{" "}
            </h4>
            <p className="text-[#6E7191] text-sm font-normal mt-2">
              {data?.desc}
            </p>
            {data?.category?.map((item) => (
              <div className="flex gap-8 mt-5" key={item?._id}>
                <div>
                  <h4 className="text-base font-medium">Slug:</h4>
                  <p className="text-[#6E7191] text-sm font-normal mt-1">
                    {item?.slug}
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-medium">Category:</h4>
                  <p className="text-[#6E7191] text-sm font-normal mt-1">
                    {item?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p--5 rounded-lg bg-white box_shadow_sec h-fit p-10 max-sm:p-5">
            <h1 className="text-primary-color ">Variation 1</h1>
            {data?.variations?.map((item, i) => (
              <h4
                className="text-primary-color text-base font-medium mt-5"
                key={i + 4}
              >
                US${item?.price}
                <span className="text-secondary-color ms-2">
                  {" "}
                  ({item?.minQty} - {item?.maxQty} pieces){" "}
                </span>
              </h4>
            ))}
          </div>

          <div className="p--5 rounded-lg bg-white box_shadow_sec h-fit p-10 max-sm:p-5">
            <h1 className="text-primary-color ">Ratings & Reviews</h1>
            <div className="border-b-2 border-[#80808050] mt-5 flex max-sm:flex-col max-sm:items-start max-sm:gap-2 items-center gap-5 pb-3">
              <img
                src="/images/pic.png"
                alt="img"
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <p className="text-secondary-color text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente est ipsa nostrum voluptates eveniet, eligendi aliquid,{" "}
              </p>
              <div>
                <div className="flex mb-1">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <h4>4.7 Ratings</h4>
              </div>
            </div>
            <div className="border-b-2 border-[#80808050] mt-5 flex max-sm:flex-col max-sm:items-start max-sm:gap-2 items-center gap-5 pb-3">
              <img
                src="/images/pic.png"
                alt="img"
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <p className="text-secondary-color text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente est ipsa nostrum voluptates eveniet, eligendi aliquid,{" "}
              </p>
              <div>
                <div className="flex mb-1">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <h4>4.7 Ratings</h4>
              </div>
            </div>
            <div className="border-b-2 border-[#80808050] mt-5 flex max-sm:flex-col max-sm:items-start max-sm:gap-2 items-center gap-5 pb-3">
              <img
                src="/images/pic.png"
                alt="img"
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <p className="text-secondary-color text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente est ipsa nostrum voluptates eveniet, eligendi aliquid,{" "}
              </p>
              <div>
                <div className="flex mb-1">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <h4>4.7 Ratings</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default Page;
