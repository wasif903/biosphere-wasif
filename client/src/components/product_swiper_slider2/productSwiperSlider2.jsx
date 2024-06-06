// export default ProductSwiperSlider2;
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { breakpoints } from "@/lib/BreakPointsLandingPageSlider";

const ProductSwiperSlider2 = ({ sliderData }) => {
  return (
    <Swiper
      breakpoints={breakpoints}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="border--2 border-[green] w-full h-fit mySwiper"
    >
      {Array.from({ length: 3 })?.map((i, index) => (

        <SwiperSlide key={index} >
          <div className="border-2 border-[red] h--[5rem] flex flex-col justify-center items--center ">
            <div className="flex justify-between sm:w-full ">
              <div className="relative sm:w-[16rem] sm:h-[16rem] rounded-xl overflow-hidden group ">
                <img
                  src={"/images/Browse_skincare.png"}
                  alt="img"
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-1"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 transition-opacity duration-300 ease-in-out">
                  <h3 className="text-white font-semibold">Browse skincare products trusted</h3>
                  <small className="text-white font-medium">Lorem Inc.</small>
                </div>

              </div>
              <div className="relative sm:w-[8rem] sm:h-[16rem] rounded-xl overflow-hidden group flex flex-col ">
                <img
                  src={"/images/galler_01.png"}
                  alt="First image"
                  className="w-full h-1/2 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-3"
                />
                <img
                  src={"/images/gallery_02.png"}
                  alt="Second image"
                  className="w-full h-1/2 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 p-3"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiperSlider2;