"use client";

import UserLayout from "@/layout/UserLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {

    const router = useRouter();

    // const variants = {
    //     hidden: { opacity: 0, x: -200, y: 0 },
    //     enter: { opacity: 1, x: 0, y: 0 },
    // }

    // const variants_fade_up = {
    //     hidden: { opacity: 0, y: -200, x: 0 },
    //     enter: { opacity: 1, y: 0, x: 0 },
    // }

    // const variants_on_scroll_1 = {
    //     hidden: {
    //         scale: 0,
    //         rotate: 180,
    //     },
    //     enter: {
    //         rotate: 0, scale: 1,
    //         transition: {
    //             type: "spring",
    //             bounce: 0.4,
    //             duration: 1.5
    //         }
    //     }
    // };

    const variants_on_scroll_2 = {
        hidden: {
            y: 300,
            rotate: -10,
            scale: 0,
        },
        enter: {
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },1000)
    },[])

  return (
    <UserLayout>
      <div className="w-full h-full flex justify-center items-center relative text-primary-color">
        <motion.div variants={variants_on_scroll_2} initial="hidden" animate="enter" transition={{ type: "spring", stiffness: 100, duration: 2 }} className="overflow-hidden">
          <img
            src="/images/checkout/thankyou.png"
            alt="img.png"
            className="w-full h-full"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
            {" "}
            THANK YOU!
          </h4>
        </motion.div>
      </div>
    </UserLayout>
  );
};

export default Page;
