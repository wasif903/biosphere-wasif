"use client";
import { RiShutDownLine } from "react-icons/ri";
import Field from "@/components/inputFIeld/Field";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import styles from "@/layout/layout.module.css";
import { usePathname, useRouter } from "next/navigation";

// Fill Icons
import { AiFillHome } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { BiSolidPackage } from "react-icons/bi";

// Outline Icons
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { deleteCookie, getCookie } from "cookies-next";
import ResponseToast from "@/components/toast/Toast";
import { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import Link from "next/link";

const StoreLayout = ({ children }) => {

  const [cookieData, setCookieData] = useState()

  const router = useRouter();
  const pathName = usePathname()

  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");

  useEffect(() => {
    setCookieData(JSON?.parse(getCookie("biosphereearth")))
  }, [])

  const handleLogout = () => {
    try {
      if (getCookieData) {
        deleteCookie("biosphereearth")
        router.push("/auth/login")
      }
    } catch (error) {
      ResponseToast({ message: "Error logging out" })
    }
  }

  return (
    <main className="w-full h-screen flex justify-between overflow-hidden relative">
      <img src="/images/dashboard_bg.png" alt="img.png" className="absolute top-0 left-0 w-full h-full object-cover" />
      {/* sidebar */}
      {cookieData?.role?.[0] === "StoreOwner" ?
        <div className="w-[8.7rem] p-5 py-5 max-lg:hidden z-50">
          <div className="w-full h-full rounded-[10rem] bg-primary-color flex flex-col justify-between items-center pt-5 overflow-hidden overflow-y-auto">
            <ul className="w-fit h-fit flex flex-col gap-8 py-10">
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/dashboard')}>
                <div>
                  {pathName === "/dashboard" ?
                    <AiFillHome className="text-[1.5rem] text-[#fff]" />
                    :
                    <AiOutlineHome className="text-[1.5rem] text-[#fff]" />
                  }

                </div>
                <h4 className="text-[#fff] text-sm" > Dashboard </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/product-list')}>
                <div>
                  {pathName.startsWith("/product-list") || pathName === "/add-product" ?
                    <AiFillShop className="text-[1.5rem] text-[#fff]" />
                    :
                    <AiOutlineShop className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm" > Products </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/order-list')}>
                <div>
                  {pathName.startsWith("/order-list") ?
                    <RiShoppingBagFill className="text-[1.5rem] text-[#fff]" />
                    :
                    <RiShoppingBagLine className="text-[1.5rem] text-[#fff]" />}
                </div>
                <h4 className="text-[#fff] text-sm"> Orders </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" >
                <div>
                  {pathName === "/chat" ?
                    <FaQuestionCircle className="text-[1.5rem] text-[#fff]" />
                    :
                    <FaRegQuestionCircle className="text-[1.5rem] text-[#fff]" />
                  }

                </div>
                <h4 className="text-[#fff] text-sm"> Inquiries </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/billing-details')}>
                <div>
                  {pathName === "/billing-details" ?
                    <IoWallet className="text-[1.5rem] text-[#fff]" />
                    :
                    <IoWalletOutline className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Wallet </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push("/store-profile")}>
                <div>
                  {pathName === "/store-profile" ?
                    <FaUser className="text-[1.5rem] text-[#fff]" />
                    :
                    <FaRegUser className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Profile </h4>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center gap-1 py-10 cursor-pointer" onClick={handleLogout}>
              <div>
                <RiShutDownLine className="text-[1.5rem] text-[#fff]" />
              </div>
            </div>
          </div>
        </div>
        :
        <div className="w-[8.7rem] p-5 py-5 max-lg:hidden z-50">
          <div className="w-full h-full rounded-[10rem] bg-primary-color flex flex-col justify-between items-center pt-5 overflow-hidden overflow-y-auto">
            <ul className="w-fit h-fit flex flex-col gap-8 py-10">
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/dashboard')}>
                <div>
                  {pathName === "/dashboard" ?
                    <AiFillHome className="text-[1.5rem] text-[#fff]" />
                    :
                    <AiOutlineHome className="text-[1.5rem] text-[#fff]" />
                  }

                </div>
                <h4 className="text-[#fff] text-sm" > Dashboard </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push("/category-list")}>
                <div>
                  {pathName === "/category-list" ?
                    <MdCategory className="text-[1.5rem] text-[#fff]" />
                    :
                    <MdOutlineCategory className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Category </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/store-list')}>
                <div>
                  {pathName.startsWith("/store-list") ?
                    <AiFillShop className="text-[1.5rem] text-[#fff]" />
                    :
                    <AiOutlineShop className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm" > Stores </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push("/plan")}>
                <div>
                  {pathName === "/plan" ?
                    <BiSolidPackage className="text-[1.5rem] text-[#fff]" />
                    :
                    <BiPackage className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Pricing </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push("/chat")}>
                <div>
                  {pathName === "/chat" ?
                    <FaQuestionCircle className="text-[1.5rem] text-[#fff]" />
                    :
                    <FaRegQuestionCircle className="text-[1.5rem] text-[#fff]" />
                  }

                </div>
                <h4 className="text-[#fff] text-sm"> Inquiries </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push('/wallet')}>
                <div>
                  {pathName === "/wallet" ?
                    <IoWallet className="text-[1.5rem] text-[#fff]" />
                    :
                    <IoWalletOutline className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Wallet </h4>
              </li>
              <li className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => router.push("/store-profile")}>
                <div>
                  {pathName === "/store-profile" ?
                    <FaUser className="text-[1.5rem] text-[#fff]" />
                    :
                    <FaRegUser className="text-[1.5rem] text-[#fff]" />
                  }
                </div>
                <h4 className="text-[#fff] text-sm"> Profile </h4>
              </li>

            </ul>

            <div className="flex flex-col justify-center items-center gap-1 py-10 cursor-pointer" onClick={handleLogout}>
              <div>
                <RiShutDownLine className="text-[1.5rem] text-[#fff]" />
              </div>
            </div>
          </div>
        </div>

      }

      <div className="w-[100%]">
        {/* header */}
        <div className="w-full h-[4.5rem] flex p-2 justify-between pr-10">
          <div className="border-[1px] border-[#808080ef] p-2 h-fit w-fit rounded-xl box_shadow_pri z-50 lg:hidden flex ">
            <FaBars className="text-3xl" color="black" />
          </div>
          <Link href={'/'}>
            <div className="w-fit h-full flex justify-between  items-center max-md:flex-row-reverse relative">
              <img src="/images/logo.png" alt="logo" className="mt-2 w-[7rem]" />
              {/* <div className={`${styles.logo_effect} border--2 border-[red] w-[13rem] h-[8rem] absolute z-[9999] left-[56%] top-[1rem] rounded-xl translate-x-[-20%] bg-[#ffffffbe] lg:flex justify-center items-center p-3 hidden`}>
              <img src="/images/logo.png" alt="logo" className="blur-0" />
            </div> */}
              <div className="max-lg:block hidden max-md:hidden"></div>
            </div>
          </Link>
          <div className=" h-full flex justify-center items-center max-md:hidden z-50 ">
            <div className="flex justify-center items-center px-3 rounded-lg box_shadow_pri">
              <div>
                <IoSearch className="text-2xl" />{" "}
              </div>
              <Field
                placeHolder={"Search any keywords"}
                bgColor={"bg-transparent"}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.mainarea} w--full h-screen overflow-hidden overflow-y-auto relative z-50 p-2`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default StoreLayout;
