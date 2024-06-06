"use client";
import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductSwiperSlider from "@/components/product_swiper_slider/productSwiperSlider";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import required modules
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import { BreakPointsRecomand } from "@/lib/BreakPointsRecomand";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useGetProductsByQuery } from "@/redux/ProductSlice/productslice";

const Page = () => {
  const [hover, setHover] = useState(false);
  const [lastBoxHover, setLastBoxHover] = useState(false);
  const router = useRouter();

  const slider_1 = [
    {
      id: 1,
      img: "/images/med_1.png",
      name: "Ordinary Face Serum",
      ammount: "US$0.45 - US$1.50",
      order: "Min. order: 2 pieces",
      desc: "Lorem Inc. sadsadsad acsasdsada asdsafasf DSAFDADA SADSAFAFA",
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

  const slider_2 = [
    {
      id: 1,
      img: "/images/Browse_skincare.png",
      name: "Browse skincare products trusted",
      desc: "Lorem Inc.",
      gallery1: "/images/gallery_01.png",
      gallery2: "/images/gallery_02.png",
    },
    {
      id: 2,
      img: "/images/product_2.png",
      name: "South Korean skincare",
      desc: "Lorem Inc.",
      gallery1: "/images/gallery_01.png",
      gallery2: "/images/gallery_02.png",
    },
    {
      id: 3,
      img: "/images/Browse_skincare.png",
      name: "South Korean skincare",
      desc: "Lorem Inc.",
      gallery1: "/images/gallery_03.png",
      gallery2: "/images/gallery_04.png",
    },
    {
      id: 4,
      img: "/images/product_2.png",
      name: "South Korean skincare",
      desc: "Lorem Inc.",
      gallery1: "/images/gallery_03.png",
      gallery2: "/images/gallery_04.png",
    },
    {
      id: 5,
      img: "/images/Browse_skincare.png",
      name: "South Korean skincare",
      desc: "Lorem Inc.",
      gallery1: "/images/gallery_03.png",
      gallery2: "/images/gallery_04.png",
    },
  ];

  const { data:getTopRatedProducts}  = useGetProductsByQuery();
  const topRatedProducts = getTopRatedProducts?.products;
  // console.log(topRatedProducts);

  return (
    <div style={{background: 'linear-gradient(to right top, rgba(255,255,255, 50%), rgba(255,255,255, 50%), rgba(255,255,255, 50%)), url(/images/dashboard_bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: ''}}>
      <header
        className={`landing_bg_gif border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-5`}
      >
        <nav className="border--2 border-[red] w-full h-[4rem] md:h-[5rem] flex justify-between">
          <div className="border--2 border-[green] w-[8rem] md:w-[11rem] h-full">
            <img src="/images/logo.png" alt="img" className="w-full h-full" />
          </div>
          <ul className="border--2 border-[red] w-full h-full lg:flex justify-center items-center gap-6 text-[#374D99] font-medium text-base hidden">
            <li> All Categories </li>
            <li> Membership </li>
            <li> Become A Supplier </li>
            <li> Help Center </li>
          </ul>
          <div className="border--2 border-[green] w--[10rem] min-w-fit h-full flex items-center gap-5">
            <Link href={"/auth/login"}>
              <p className="text-base text-[#374D99] min-w-fit font-medium">
                Sign In
              </p>
            </Link>

            <Link href={'/cart'}>
              <div className="border--2 border-[black] rounded-full bg-[#fff] w-fit h-fit p-2 flex justify-center items-center">
                <FaCartShopping className="text-lg text-[#374D99]" />
              </div>
            </Link>
          </div>
        </nav>
        <div className="w-full h-fit flex flex-col items-center gap-8 my-[4rem]">
          <h1 className="text-[#374D99] text-center">
            Safe, Fast, and Reliable Online Medicine Store.
          </h1>
          <p className="text-[#6E7191] text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id odio eu purus feugiat dapibus. Nulla facilisi. <br /> Sed eget
            sem sit amet eros fringilla consequat. Nullam malesuada nun
          </p>
          <div className="bg-[#fff] flex justify-center items-center px-3 rounded-[10rem] box_shadow_pri w-[80%]">
            <Field placeHolder={"e.g: panadol"} bgColor={"bg-transparent"} />
            <div className="bg-[#374D99] rounded-[10rem] sm:w-[10rem] flex items-center gap-3 p-[0.3rem]">
              <IoSearch className="text-[#fff] text-2xl sm:ms-3" />{" "}
              <h4 className="text-[#fff] font-normal hidden sm:block">
                {" "}
                Search{" "}
              </h4>
            </div>
          </div>
        </div>
      </header>

      <div className="border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[5rem] pb-4 hidden sm:block">
        <div className="border--2 border-[blue] w-full max-lg:h-[15rem] flex justify-between items-center relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/images/sec_2_img_1.png"
                alt="img"
                className="w-full h-full object-cover rounded-xl px-1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/sec_2_img_1.png"
                alt="img"
                className="w-full h-full object-cover rounded-xl px-1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/sec_2_img_1.png"
                alt="img"
                className="w-full h-full object-cover rounded-xl px-1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/sec_2_img_1.png"
                alt="img"
                className="w-full h-full object-cover rounded-xl px-1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[5rem]">
        <div className="border--2 border-[blue] w-full flex justify-between items-center pb-5">
          <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit">
            TOP RATED
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
          <ProductSwiperSlider 
          sliderData={topRatedProducts} 
          // sliderData={slider_1} 
          />
        </div>
      </div>

      <div className="border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[2rem]">
        <div className="border--2 border-[blue] w-full flex flex-col justify-center items-center pb-5">
          <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit">
            CATEGORIES
          </h3>
          <p className="text-[#6E7191] text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id odio eu purus feugiat dapibus. Nulla facilisi. Sed eget sem sit
            amet eros
          </p>
        </div>

        <div className="border--2 border-[green] w-full hidden max-lg:block">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className={`bg-[#EEEEEE] w-full h-[20rem] rounded-2xl p-5 flex relative`}
              >
                <div className="border--2 border-[red] min-w-fit h-fit">
                  <h3
                    className={`text-[#444444] font-medium text-xl sm:text-3xl`}
                  >
                    {" "}
                    Oral Medications{" "}
                  </h3>
                  <h4
                    className={`font-extrabold text-[#4C4C4C] mt-3 text-3xl sm:text-5xl`}
                  >
                    PILLS
                  </h4>
                  <div
                    className={`border-2 border-[#4C4C4C] w-fit h-fit text-xs sm:text-sm text-[#fff] bg-[#444444] p-2 sm:px-4 sm:py-2 flex items-center gap-3 mt-3`}
                  >
                    SHOP NOW <FaArrowRight className="text-[#fff]" />
                  </div>
                </div>

                <img
                  src="/images/pills_bottle.png"
                  alt="img"
                  className={`w--[55%] max-xl:h-[70%] h-[90%] object-center absolute right-[2vw] bottom-[0vw] `}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`bg-[#8bd5f58c] w-full h-[20rem] rounded-2xl p-5 flex relative`}
              >
                <div className="border--2 border-[red] min-w-fit h-fit">
                  <h3
                    className={`text-[#0a74a1] font-medium text-xl sm:text-3xl`}
                  >
                    {" "}
                    Oral Medications{" "}
                  </h3>
                  <h4
                    className={`font-extrabold text-[#4C4C4C] mt-3 text-3xl sm:text-5xl`}
                  >
                    PILLS
                  </h4>
                  <div
                    className={`border-2 border-[#0A73A1] w-fit h-fit text-xs sm:text-sm text-[#fff] bg-[#0A73A1] p-2 sm:px-4 sm:py-2 flex items-center gap-3 mt-3`}
                  >
                    SHOP NOW <FaArrowRight className="text-[#fff]" />
                  </div>
                </div>

                <img
                  src="/images/injection.png"
                  alt="img"
                  className={`max-xl:h-[70%] h-[90%] object-center absolute right-[2vw] bottom-[0vw] `}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`bg-[#FEF9C4] w-full h-[20rem] rounded-2xl p-5 flex relative`}
              >
                <div className="border--2 border-[red] min-w-fit h-fit">
                  <h3
                    className={`text-[#D4B100] font-medium text-xl sm:text-3xl`}
                  >
                    {" "}
                    Topical Medications{" "}
                  </h3>
                  <h4
                    className={`font-extrabold text-[#4C4C4C] mt-3 text-3xl sm:text-5xl`}
                  >
                    FACE CREAM
                  </h4>
                  <div
                    className={`border-2 border-[#F3D228] w-fit h-fit text-xs sm:text-sm text-[#fff] bg-[#F3D228] p-2 sm:px-4 sm:py-2 flex items-center gap-3 mt-3`}
                  >
                    SHOP NOW <FaArrowRight className="text-[#fff]" />
                  </div>
                </div>

                <img
                  src="/images/cream.png"
                  alt="img"
                  className={`max-xl:h-[70%] h-[90%] object-center absolute right-[2vw] bottom-[0vw] `}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="border--2 border-[green] w-full flex justify-between gap-5 mt-5 max-lg:hidden">
          <div
            className={`bg-[#EEEEEE] ${
              hover || lastBoxHover !== false ? "w-[20vw]" : "w-[38vw]"
            } h-[20rem] rounded-2xl transition-all duration-1000 p-5 flex relative`}
          >
            <div className="border--2 border-[red] min-w-fit h-fit">
              <h3
                className={`text-[#444444] text--3xl font-medium transition-all duration-500 ${
                  hover || lastBoxHover !== false ? "text-2xl" : "text-3xl"
                }`}
              >
                {" "}
                Oral Medications{" "}
              </h3>
              <h4
                className={`font-extrabold text-[#4C4C4C] text--5xl mt-3 transition-all duration-500 ${
                  hover || lastBoxHover !== false
                    ? "translate-y-[-0.5vw] text-4xl"
                    : "text-5xl"
                }`}
              >
                PILLS
              </h4>
              <div
                className={`border-2 border-[#4C4C4C] w-fit h-fit text-sm text-[#fff] bg-[#444444] px-4 py-2 flex items-center gap-3 mt-5 transition-all duration-500 ${
                  hover || lastBoxHover !== false
                    ? "translate-x-[-2vw] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                SHOP NOW <FaArrowRight className="text-[#fff]" />
              </div>
            </div>

            <img
              src="/images/pills_bottle.png"
              alt="img"
              className={`xl: w-[55%] max-xl:h--[70%] h-[90%] object-center absolute right-[2vw] bottom-[0vw] transition-all duration-1000 
              ${
                hover || lastBoxHover !== false
                  ? "xl: w-[100%] max-xl: h-44 h--[11.5rem] object-fill translate-x-[1vw] translate-y-[-1vw] bottom-[0vw]"
                  : ""
              }
              `}
            />
          </div>

          <div
            className={`box_2 bg-[#8bd5f58c] ${
              hover !== false ? "w-[38vw]" : "w-[20vw]"
            } h-[20rem] rounded-2xl transition-all duration-1000 p-5 flex relative`}
            onMouseEnter={() => setHover(true)}
            onMouseMoveCapture={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <div className="border--2 border-[red] min-w-fit h-fit">
              <h3
                className={`text-[#0A73A1] text--3xl font-medium transition-all duration-500 ${
                  hover !== true ? "text-2xl" : "text-3xl"
                }`}
              >
                {" "}
                Injectable Medications{" "}
              </h3>
              <h4
                className={`font-extrabold text-[#4C4C4C] text--5xl mt-3 transition-all duration-500 ${
                  hover !== true ? "translate-y-[-0.5vw] text-4xl" : "text-5xl"
                }`}
              >
                SYRINGE
              </h4>
              <div
                className={`border-2 border-[#0A73A1] w-fit h-fit text-sm text-[#fff] bg-[#0A73A1] px-4 py-2 flex items-center gap-3 mt-5 transition-all duration-500 ${
                  hover !== true
                    ? "translate-x-[-2vw] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                SHOP NOW <FaArrowRight className="text-[#fff]" />
              </div>
            </div>

            <img
              src="/images/injection.png"
              alt="img"
              className={`xl: w-[55%] max-xl:h--[70%] h-[90%] object-center absolute right-[1vw] bottom-[-2vw] transition-all duration-1000 
              ${
                hover !== true
                  ? "xl: w-[100%] max-xl: h-44 h--[11.5rem] object-fill translate-x-[1vw] translate-y-[-1vw] bottom-[0vw]"
                  : ""
              }
              `}
            />
          </div>

          <div
            className={`box_3 bg-[#FEF9C4] ${
              lastBoxHover !== false ? "w-[38vw]" : "w-[20vw]"
            } h-[20rem] rounded-2xl transition-all duration-1000 p-5 flex relative`}
            onMouseEnter={() => setLastBoxHover(true)}
            onMouseMoveCapture={() => setLastBoxHover(true)}
            onMouseOut={() => setLastBoxHover(false)}
          >
            <div className="border--2 border-[red] min-w-fit h-fit">
              <h3
                className={`text-[#D4B100] text--3xl font-medium transition-all duration-500 ${
                  lastBoxHover !== true ? "text-2xl" : "text-3xl"
                }`}
              >
                {" "}
                Topical Medications{" "}
              </h3>
              <h4
                className={`font-extrabold text-[#4C4C4C] text--5xl mt-3 transition-all duration-500 ${
                  lastBoxHover !== true
                    ? "translate-y-[-0.5vw] text-4xl"
                    : "text-5xl"
                }`}
              >
                FACE CREAM
              </h4>
              <div
                className={`border-2 border-[#F3D228] w-fit h-fit text-sm text-[#fff] bg-[#F3D228] px-4 py-2 flex items-center gap-3 mt-5 transition-all duration-500 ${
                  lastBoxHover !== true
                    ? "translate-x-[-2vw] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                SHOP NOW <FaArrowRight className="text-[#fff]" />
              </div>
            </div>

            <img
              src="/images/cream.png"
              alt="img"
              className={`xl: w-[55%] max-xl:h--[70%] h-[80%] object-center absolute right-[2vw] bottom-[0vw] transition-all duration-1000 
              ${
                lastBoxHover !== true
                  ? "xl: w-[100%] max-xl: h-32  h--[11.5rem] object-fill translate-x-[1vw] translate-y-[-1vw] bottom-[0vw]"
                  : ""
              }
              `}
            />
          </div>
        </div>

        <div className="flex justify-center py-5">
          <Button
            name={"View More"}
            bgcolor={"bg-[#374D99]"}
            pClass={"text-[#fff] text-xs font-normal p-0 m-0"}
            className={"max-w-[9rem] rounded-[10rem] py-3 max-sm:px-4"}
            style={{
              borderRadius: "10rem",
            }}
          />
        </div>

        <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit mt-10 mb-10">
          NEW MEDICINES
        </h3>

        <Tabs defaultValue="mostPopular">
          <div className="border--2 border-[blue] w-full flex justify-between items-center pb--5 max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:py-2">
            <TabsList
              className={`text-[#374D99] text-xl md:text-2xl font-medium min-w-fit bg-transparent gap-5`}
            >
              <TabsTrigger
                value="mostPopular"
                className="border-[1px] border-[silver] px-[1.5rem] py-3 rounded-[10rem] data-[state=active]:bg-[#374D99] data-[state=active]:text-[#fff]"
              >
                Most popular
              </TabsTrigger>
              <TabsTrigger
                value="hotSelling"
                className="border-[1px] border-[silver] px-[1.5rem] py-3 rounded-[10rem] data-[state=active]:bg-[#374D99] data-[state=active]:text-[#fff]"
              >
                Hot selling
              </TabsTrigger>
              <TabsTrigger
                value="bestReviewed"
                className="border-[1px] border-[silver] px-[1.5rem] py-3 rounded-[10rem] data-[state=active]:bg-[#374D99] data-[state=active]:text-[#fff]"
              >
                Best reviewed
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-center sm:px--[3rem]  max-sm:hidden">
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

          <TabsContent
            value="mostPopular"
            className="border--2 border-[red] tab-content"
          >
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
          </TabsContent>

          <TabsContent value="hotSelling" className="tab-content">
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
          </TabsContent>

          <TabsContent value="bestReviewed" className="tab-content">
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
            <div className="w-full flex justify-center mt-10">
              <ProductSwiperSlider sliderData={slider_1} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[3rem]">
        <div className="border--2 border-[blue] w-full flex justify-between items-center pb-5">
          <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit max-sm:text-[16px]">
            YOUR BROWSING HISTORY
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

      <div className="border--2 border-[green] w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[3rem]">
        <div className="border--2 border-[blue] w-full flex justify-between items-center pb-5">
          <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit">
            RECOMMENDED TO START YOUR BUSINESS
          </h3>
          <div className="flex justify-center"></div>
        </div>

        <div className="w-full flex justify-center ">
          <Swiper
            // breakpoints={breakpoints}
            breakpoints={BreakPointsRecomand.breakpoints}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-fit mySwiper"
          >
            {slider_2?.map((i) => (
              <SwiperSlide key={i.id}>
                <div className="w--[25rem] h--[5rem] flex justify-center">
                  <div className="flex justify-between w-full">
                    <div className="relative sm:w --[16rem] sm:h-[16rem] rounded-xl overflow-hidden flex">
                      <img
                        src={i.img}
                        alt="img"
                        className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-1 max-sm:w-[50rem]"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-white font-semibold">{i.name}</h3>
                        <small className="text-white font-medium">
                          {i.desc}
                        </small>
                      </div>
                    </div>

                    <div className="relative w-full sm:w-[10rem] md:w-[8rem] rounded-xl overflow-hidden md:flex flex-col hidden">
                      <img
                        src={i.gallery1}
                        alt="First image"
                        className="w-full h-1/2 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-3 max-sm:w-[8rem] "
                      />
                      <img
                        src={i.gallery2}
                        alt="Second image"
                        className="w-full h-1/2 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-3 max-sm:w-[8rem]"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <ProductSwiperSlider2 sliderData={slider_2} /> */}
        </div>
      </div>

      <footer className="bg-[#374D99] text-white py-10 pt-20 pb-20 max-lg:overflow-x-hidden">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="mb-8 sm:mb-0 w-60 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full">
            <img
              src="/images/footer_logo.png"
              alt="Footer Logo"
              className="w-full h-auto rounded-x l"
            />
          </div>
          {/* <div className=" ml-[10rem] max-sm:ml-0 md:ml-[4.5rem] max-sm:flex max-sm:justify-center">
            <h3 className="text-md font-semibold mb-4">Get support</h3>
            <ul className="text-[0.86rem]  font-light space-y-4">
              <li>Help Center</li>
              <li>Live chat</li>
              <li>Check order status</li>
              <li>Refunds</li>
              <li>Report abuse</li>
            </ul>
          </div> */}
          <div className="ml-[10rem] max-sm:ml-0 md:ml-[4.5rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
            <h3 className="text-md font-semibold mb-4">Get support</h3>
            <ul className="text-[0.86rem] font-light space-y-4 max-sm:text-center">
              <li>Help Center</li>
              <li>Live chat</li>
              <li>Check order status</li>
              <li>Refunds</li>
              <li>Report abuse</li>
            </ul>
          </div>

          <div className="ml-[10rem] max-sm:ml-0 md:ml-[4.5rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
            <h3 className="text-md font-semibold mb-4">Sell on Biosphere</h3>
            <ul className="text-[0.86rem] font-light space-y-4 max-sm:text-center">
              <li>Start selling</li>
              <li>Seller Central</li>
              <li>Become a Verified Supplier</li>
              <li>Partnerships</li>
              <li>Download the app for sellers</li>
            </ul>
          </div>
          <div className="ml-[10rem] max-sm:ml-0 md:ml-[4.5rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
            <h3 className="text-md font-semibold mb-2  max-sm:flex max-sm:justify-center">
              Get to know us
            </h3>
            <ul className="text-[0.86rem] font-light space-y-4 max-sm:text-center">
              <li>About Biosphere</li>
              <li>Corporate responsibility</li>
              <li>Check order status</li>
              <li>News center</li>
              <li>Careers</li>
            </ul>
            <div className="mt-4 flex space-x-3 max-lg:overflow-x-hidden max-sm:flex max-sm:justify-center">
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaFacebook size="1.3em" color="white" />
              </a>
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaLinkedin size="1.3em" color="white" />
              </a>
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaTwitter size="1.3em" color="white" />
              </a>
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram size="1.3em" color="white" />
              </a>
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaYoutube size="1.3em" color="white" />
              </a>
              <a
                href="#"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <FaTiktok size="1.3em" color="white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
