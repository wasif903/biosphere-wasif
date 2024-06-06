"use client";
import { FaCartShopping } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const UserLayout = ({ children }) => {
  const [cookieData, setCookieData] = useState()

  const router = useRouter()

  // Get User Data from cookie
  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");

  useEffect(() => {
    setCookieData(getCookieData)
  }, [])


  const isLoggin = cookieData ? true : false

  const handleLogout = () => {
    deleteCookie("biosphereearth")
    router.push("/auth/login")
  }

  return (
    <>
      <header
        className={`w-full px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-5`}
      >
        <nav className="border--2 border-[red] w-full h-[4rem] md:h-[5rem] flex justify-between">
          <div className="border--2 border-[green] w-[8rem] md:w-[11rem] h-full">
            <img src="/images/logo.png" alt="img" className="w-full h-full cursor-pointer" onClick={() => router.push("/")} />
          </div>
          <ul className="border--2 border-[red] w-full h-full lg:flex justify-center items-center gap-6 text-[#374D99] font-medium text-base hidden">
            <li> All Categories </li>
            <li> Membership </li>
            <li> Become A Supplier </li>
            <li> Help Center </li>
          </ul>
          <div className="border--2 border-[green] w--[10rem] min-w-fit h-full flex items-center gap-5">
            {isLoggin ?
              <span onClick={handleLogout} className="cursor-pointer">
                <p className="text-base text-[#374D99] min-w-fit font-medium">
                  Logout
                </p>
              </span>
              :
              <Link href={"/auth/login"} className="cursor-pointer">
                <p className="text-base text-[#374D99] min-w-fit font-medium">
                  Sign In
                </p>
              </Link>
            }
            <Link href={'/cart'}>
              <div className="border--2 border-[black] rounded-full bg-[#fff] w-fit h-fit p-2 flex justify-center items-center">
                <FaCartShopping className="text-lg text-[#374D99]" />
              </div>
            </Link>
          </div>
        </nav>
      </header>
      <div className="max-h-fit min-h-fit px-[1rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] py-[3rem] relative z-20">
        <img
          src="/images/dashboard_bg.png"
          alt="img.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {children}
      </div>
      <footer className="bg-[#374D99] text-white py--10 pt-20 pb-20 max-lg:overflow-x-hidden">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="mb-8 sm:mb-0 w-60 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full">
            <img
              src="/images/footer_logo.png"
              alt="Footer Logo"
              className="w-full h-auto rounded-x l"
            />
          </div>
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
    </>
  );
};

export default UserLayout;
