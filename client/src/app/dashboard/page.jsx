"use client";
import React from "react";
import StoreLayout from "@/layout/StoreLayout";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Area,
} from "recharts";
import { SimpleTable } from "@/components/table/simpleTable";
import { getCookie } from "cookies-next";
import StoreDash from "@/components/DashBoard/StoreOwner/StoreDash";
import AdminDash from "@/components/DashBoard/Admin/AdminDash";





const Page = () => {
  const [isRole, setIsRole] = useState("");

  // Handle Get User Data
  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");
  const role = getCookieData?.role[0];

  useEffect(() => {
    setIsRole(role);
  }, [])

  return (
    <StoreLayout>
      <h4 className="text-xl text-secondary-color mt-4">
        {" "}
        Dashboard Overview{" "}
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <div className="w-full h-fit bg-primary-color p-5 rounded-xl mt-2 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-medium text-[#fff]">
              {" "}
              Hello Tassy Omah!{" "}
            </h4>
            <p className="text-sm text-[#fff]">
              Have a nice day and don’t forget to take care of your health!
            </p>
            <small className="flex items-center text-[#7de77d] mt-5">
              {" "}
              Health Tips <FaAngleRight className="text-xs mt-[0.2rem] ms-2" />{" "}
            </small>
          </div>
          <img
            src="/images/pic_1.png"
            alt="img.png"
            className="w-[10rem] hidden sm:block"
          />
        </div>

        {isRole !== "Admin" ?
          <StoreDash />
          :
          <AdminDash />
        }
      </div>
    </StoreLayout>
  );
};

export default Page;
