"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";
import { breakpoints } from "@/lib/BreakPointsLandingPageSlider";
import React, { useState } from "react";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

function getStars(percentage, maxStars = 5) {
  // Ensure percentage is a valid number
  percentage = Number(percentage);

  // Clamp percentage to be between 0 and 100
  if (isNaN(percentage) || percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  const normalizedRating = (percentage / 100) * maxStars; // Normalize rating to a maxStars scale
  const fullStars = Math.max(
    0,
    Math.min(Math.floor(normalizedRating), maxStars)
  ); // Number of full stars
  const emptyStars = Math.max(0, maxStars - fullStars); // Remaining empty stars

  return [...Array(fullStars).fill("full"), ...Array(emptyStars).fill("empty")];
}

const ProductSwiperSlider = ({ sliderData }) => {

  const [prodID, setProdID] = useState('');
  // console.log(prodID);

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
      className="w-full h-fit flex justify-between mySwiper gap-5"
    >
      {sliderData?.map((item) => {
        // Assuming item.averageRating is a percentage value
        const stars = getStars(item.averageRating);

        return (
          <SwiperSlide key={item.id}>
            <Link 
              href={`/${item?.slug}`} 
              // as={{ pathname: `/${item?.slug}`, state: { id: item.id } }}
              >
              <div className="bg--[#fff] sm:w-full flex flex-col justify-center items-center gap-1" onClick={()=>setProdID(item?._id)}>
                <div className="border-[1px] border-[#c0c0c06b] sm:w--[12rem] w-full sm:h-[12rem] rounded-xl overflow-hidden">
                  <img
                    src={
                      !item?.productImage
                        ? "/images/med_1.png"
                        : item?.productImage
                    }
                    alt="img"
                    className="w-full sm:w--[12rem] sm:h-[12rem] hover:scale-125 transition-all"
                  />
                </div>
                <div className="w-full p-2">
                  <h3 className="text-[#374D99] font-semibold">{item?.slug}</h3>
                  <p className="text-[#374D99] text-sm font-semibold">
                    {item?.variations?.[0]?.price}$
                  </p>
                  <small className="text-[#666666] font-medium" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Min. order: {item?.variations?.[0]?.minQty} pieces
                  </small>
                  <div className="flex justify-between items-center gap-1 mt-1">
                    <small className="text-[#666666] font-semibold">
                      {item?.averageRating}%
                    </small>
                    <div className="flex">
                      {stars.map((star, index) =>
                        star === "full" ? (
                          <FaStar
                            key={index}
                            className="text-yellow-400 text-sm"
                          />
                        ) : (
                          <FaRegStar
                            key={index}
                            className="text-yellow-400 text-sm"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSwiperSlider;

// // export default ProductSwiperSlider;
// "use client";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay } from "swiper/modules";
// import { breakpoints } from "@/lib/BreakPointsLandingPageSlider";
// import React from "react";
// import Link from "next/link";
// import { FaStar, FaRegStar } from "react-icons/fa";

// function getStars(rating, maxRating = 5) {
//   const normalizedRating = (rating / maxRating) * 5; // Normalize rating to a 5-star scale
//   const fullStars = Math.floor(normalizedRating); // Number of full stars
//   const emptyStars = 5 - fullStars; // Remaining empty stars

//   return [...Array(fullStars).fill("full"), ...Array(emptyStars).fill("empty")];
// }

// const ProductSwiperSlider = ({ sliderData }) => {
//   const stars = getStars(rating = 6, maxRating = 5);

//   return (
//     <Swiper
//       breakpoints={breakpoints}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay]}
//       className="w-full h-fit flex justify-between mySwiper gap-5"
//     >
//       {sliderData?.map((item) => (
//         <SwiperSlide key={item.id}>
//           <Link href={"/single-product"}>
//             <div className="bg--[#fff] box_shadow__pri sm: w-full w--fit h--[5rem] flex flex-col justify-center items--center gap-1">
//               <div className="sm:w--[12rem] sm:h-[12rem] rounded-xl overflow-hidden">
//                 <img
//                   src={item?.productImage}
//                   // src={item?.img}
//                   alt="img"
//                   className="w-full sm:w--[12rem] sm:h-[12rem] hover:scale-125 transition-all"
//                 />
//               </div>
//               <div className="p-2">
//                 <h3 className="text-[#374D99] font-semibold">
//                   {/* {item?.name} */}
//                   {item?.slug}
//                 </h3>
//                 <p className="text-[#374D99] text-xs font-semibold">
//                   {/* {item?.amount} */}
//                   {item?.variations?.[0]?.price}$
//                 </p>
//                 <small className="text-[#666666] font-medium">
//                   {item.order}
//                 </small>
//                 <div className="flex  justify-between">
//                   <small
//                     className="text-[#666666] font-medium"
//                     style={{
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       display: "-webkit-box",
//                       WebkitBoxOrient: "vertical",
//                       WebkitLineClamp: 1,
//                     }}
//                   >
//                     {item?.desc}
//                   </small>
//                   <div className="flex items-center gap-1">
//                     <small className="text-[#666666] font-medium">
//                       {/* {item?.rating} */}
//                       {item?.averageRating}
//                     </small>
//                     <div className="flex">
//                       {/* {
//                         Array.from({length: 5}).map((_,index)=>(
//                           // item.star
//                           <FaStar className="text-yellow-400 text-sm" />
//                         ))
//                       } */}

//                       {stars.map((star, index) =>
//                         star === "full" ? (
//                           <FaStar
//                             key={index}
//                             className="text-yellow-400 text-sm"
//                           />
//                         ) : (
//                           <FaRegStar
//                             key={index}
//                             className="text-yellow-400 text-sm"
//                           />
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ProductSwiperSlider;
