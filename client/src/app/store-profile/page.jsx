"use client";

import StoreLayout from "@/layout/StoreLayout";
import { FaStar } from "react-icons/fa";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaUserEdit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";

const Page = () => {
  const [isRole, setIsRole] = useState("");

  // Handle Get User Data
  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");
  const role = getCookieData?.role[0];

  useEffect(() => {
    setIsRole(role);
  }, [])

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <StoreLayout>
      <div className="rounded-lg h-fit">
        <div className="my-6">
          <h1 className="text-primary-color">Profile</h1>
          <p className="text-[#6E7191]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white box_shadow_sec mt-5 flex max-sm:flex-col items-center justify-between gap-5 p-5 rounded-lg">
          <div className="flex gap-3 items-center">
            <img
              src="/images/bruce-mars.png"
              alt="img"
              className="w-[5rem] h-[5rem] rounded-xl"
            />
            <span className="flex flex-col">
              <h4 className="text-xl text-primary-color font-semibold">
                Alec Thompson
              </h4>
              <p className="text-secondary-color text-sm"> Super Admin </p>
            </span>
          </div>
          {isRole !== "Admin" &&
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
          }
        </div>
      </div>
      {isRole !== "Admin" ?
        <div className={`mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5`}>
          <div className="bg-white box_shadow_pri rounded-lg relative p-7 mt-5 h-[27rem] overflow-hidden overflow-y-auto">
            <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between">
              <h4 className="pb-3 font-semibold text-xl text-primary-color max-sm:text-center">
                Profile Ratings
              </h4>
            </div>
            <div className="rounded-b-xl overflow-hidden">
              <ResponsiveContainer width="" height="" className={"h-[20rem]"}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3000 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#2D9CDB"
                    fill="#2D9CDB"
                    dot={true}
                    activeDot={{ r: 8 }}
                    strokeWidth={4}
                  />

                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white box_shadow_pri rounded-lg relative p-7 mt-5 h-[27rem] overflow-hidden overflow-y-auto">
            <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between">
              <h4 className="pb-3 font-semibold text-xl text-primary-color max-sm:text-center">
                Profile Information
              </h4>
              <FaUserEdit className="text-secondary-color text-xl cursor-pointer" />
            </div>
            <p className="text-secondary-color font-medium">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
              no. If two equally difficult paths, choose the one more painful in
              the short term(pain avoidance is creating an illusion of equality).
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-primary-color font-semibold text-lg">
                Full Name:
                <span className="text-secondary-color font-medium text-base">

                  Alec M. Thompson
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Mobile:
                <span className="text-secondary-color font-medium text-base">

                  (44) 123 1234 123
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Email:
                <span className="text-secondary-color font-medium text-base">

                  alecthompson@mail.com
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Location:
                <span className="text-secondary-color font-medium text-base">

                  USA
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg flex items-center gap-2">
                Social:
                <span className="text-secondary-color font-medium text-base flex gap-3">
                  <FaFacebook className="text-primary-color text-xl" />
                  <FaTwitter className="text-[#3EA1EC] text-xl" />
                  <FaInstagram className="text-primary-color text-xl" />
                </span>
              </h4>
            </div>
          </div>

          <div className="bg-white box_shadow_pri rounded-lg relative p-7 mt-5 h-[27rem] overflow-hidden overflow-y-auto max-xl:col-span-full">
            <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between ">
              <h4 className=" font-semibold text-xl text-primary-color max-sm:text-center">
                Convesations
              </h4>
            </div>
            {Array.from({ length: 10 }).map((_item, i) => (

              <div className=" mt-3 flex justify-between max-sm:items-start max-sm:gap-2 items-center gap-5 pb-3" key={i}>
                <div className="flex gap-2 items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/images/profile/kal-visuals-square.jpg"
                    alt="img"
                    className="w-[4rem] h-auto rounded-xl"
                  />
                  <span>
                    <h3 className="text-primary-color text-md font-semibold">
                      Sophie B.
                    </h3>
                    <p className="text-secondary-color text-sm">

                      Hi! I need more information..
                    </p>
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#5BC1E9] font-semibold active:scale-[0.98]" role="button">Reply</h4>
                </div>
              </div>
            )
            )}

          </div>
        </div>
        :
        <div className={`mt-5 grid grid-cols-1 lg:grid-cols-2  gap-3 lg:gap-5`}>

          <div className="bg-white box_shadow_pri rounded-lg relative p-7 mt-5 h-[27rem] overflow-hidden overflow-y-auto">
            <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between  mb-4">
              <h4 className="pb-3 font-semibold text-xl text-primary-color max-sm:text-center">
                Profile Information
              </h4>
              <FaUserEdit className="text-secondary-color text-xl cursor-pointer" />
            </div>
            <p className="text-secondary-color font-medium">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
              no. If two equally difficult paths, choose the one more painful in
              the short term(pain avoidance is creating an illusion of equality).
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-primary-color font-semibold text-lg">
                Full Name:
                <span className="text-secondary-color font-medium text-base">

                  Alec M. Thompson
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Mobile:
                <span className="text-secondary-color font-medium text-base">

                  (44) 123 1234 123
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Email:
                <span className="text-secondary-color font-medium text-base">

                  alecthompson@mail.com
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg">
                Location:
                <span className="text-secondary-color font-medium text-base">

                  USA
                </span>
              </h4>
              <h4 className="text-primary-color font-semibold text-lg flex items-center gap-2">
                Social:
                <span className="text-secondary-color font-medium text-base flex gap-3">
                  <FaFacebook className="text-primary-color text-xl" />
                  <FaTwitter className="text-[#3EA1EC] text-xl" />
                  <FaInstagram className="text-primary-color text-xl" />
                </span>
              </h4>
            </div>
          </div>

          <div className="bg-white box_shadow_pri rounded-lg relative p-7 mt-5 h-[27rem] overflow-hidden overflow-y-auto max-xl:col-span-full">
            <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between pb-2">
              <h4 className=" font-semibold text-xl text-primary-color max-sm:text-center">
                Convesations
              </h4>
            </div>
            {Array.from({ length: 10 }).map((_item, i) => (
              <div className=" mt-2 flex justify-between max-sm:items-start max-sm:gap-2 items-center gap-5 pb-3" key={i}>
                <div className="flex gap-2 items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/images/profile/kal-visuals-square.jpg"
                    alt="img"
                    className="w-[4rem] h-auto rounded-xl"
                  />
                  <span>
                    <h3 className="text-primary-color text-md font-semibold">
                      Sophie B.
                    </h3>
                    <p className="text-secondary-color text-sm">

                      Hi! I need more information..
                    </p>
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#5BC1E9] font-semibold active:scale-[0.98]" role="button">Reply</h4>
                </div>
              </div>
            )
            )}

          </div>
        </div>}
    </StoreLayout>
  );
};

export default Page;
