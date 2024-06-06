"use client";

import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
// import { SimpleTable } from "@/components/table/simpleTable";
import StoreLayout from "@/layout/StoreLayout";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SimpleTable } from "@/components/table/simpleTable";
import { SiMastercard } from "react-icons/si";

const data = [
  { Orders: 2400 },
  { Orders: 2600 },
  { Orders: 2800 },
  { Orders: 2900 },
  { Orders: 2000 },
  { Orders: 2200 },
  { Orders: 2400 },
  { Orders: 2600 },
  { Orders: 2800 },
  { Orders: 2900 },
  { Orders: 2000 },
  { Orders: 2200 },
];

const Page = () => {
  const tableHeadNames = ["", "", "", "", ""];

  const rawData = [
    {
      _id: 20252,
      icon: (
        <div className="border-2 border-[#c0c0c0b2] w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
          {" "}
          <FaLongArrowAltDown className="text-lg text-[#67e967]" />{" "}
        </div>
      ),
      title: "Withdraw",
      time: "06:24:45 AM",
      amount: "-$542",
      status: <span className="text-[#9C9C9C]">Pending</span>,
    },
    {
      _id: 20252,
      icon: (
        <div className="border-2 border-[#c0c0c0b2] w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
          {" "}
          <FaLongArrowAltUp className="text-lg text-[#374D99]" />{" "}
        </div>
      ),
      title: "Withdraw",
      time: "06:24:45 AM",
      amount: "-$542",
      status: <span className="text-[#67e967]">Complete</span>,
    },
    {
      _id: 20252,
      icon: (
        <div className="border-2 border-[#c0c0c0b2] w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
          {" "}
          <FaLongArrowAltDown className="text-lg text-[#67e967]" />{" "}
        </div>
      ),
      title: "Withdraw",
      time: "06:24:45 AM",
      amount: "-$542",
      status: <span className="text-[#9C9C9C]">Pending</span>,
    },
  ];

  // Mapping over your data to change the structure if needed
  const formattedData = rawData.map((item) => ({
    id: item._id,
    icon: item.icon,
    title: item.title,
    time: item.time,
    amount: item.amount,
    status: item.status,
  }));

  const columnClasses = [
    "hidden",
    "w-[1rem]",
    "text-base font-medium",
    "text-base font-medium",
    "text-base font-medium",
    "text-base font-medium",
  ];

  return (
    <StoreLayout>
      <h4 className="text-xl text-secondary-color my-3">
        Dashboard Overview{" "}
      </h4>
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white box_shadow_sec rounded-lg w-full p-4 flex flex-col gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary-color"> Wallet </h2>
            <p className="text-secondary-color text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className=" lg:w-full xl:w-[100%] flex max-xl:flex-col gap-5">
            <div
              className={`xl:w-[30rem] w-full h-[14rem] rounded-xl relative`}
            >
              <img src="/images/card.png" alt="img.png" className="absolute w-full h-full" />
              <h4 className="absolute top-7 left-8 text-white text-lg">Main Wallet</h4>
              <h4 className="absolute top-16 left-8 text-white text-xl">$45.500,12</h4>
              <div className="absolute bottom-5 left-8 max-[390px]:left-3">
                <h4 className="text-lg max-[390px]:text-base text-white">
                  444 221 224 ***
                </h4>
              </div>
              <SiMastercard className="text-[#ffffff8f] text-4xl max-[390px]:text-3xl absolute right-7 bottom-5 max-[390px]:right-3" />
            </div>

            <div className="flex justify-between xl:w-[20rem] py-4 gap-3">
              <ul className="flex flex-col gap-3">
                <li className="text-[#455154]">
                  <h4 className="text-[#455154] font-semibold"> Card Details </h4>
                </li>
                <li>
                  <p className="text-sm">John Doe</p>
                </li>
                <li>
                  <p className="text-sm">oliver@burrito.com</p>
                </li>
                <li>
                  <p className="text-sm">1011 654 6134</p>
                </li>
                <li>
                  <p className="text-sm">
                    1234 Maple Street Springfield, IL 62704 USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white box_shadow_sec rounded-lg w-full p-5">
          <div>
            <div className="flex flex-wrap max-sm:flex-col justify-between sm:items-center mb-4">
              <h2 className="text-[#455154]"> Activity </h2>
              <div className="flex flex-wrap justify-end xl:w-fit lg:w-full sm:w-fit w-full gap-3">
                <Button
                  name={"Monthly"}
                  bgcolor={"bg--[#000]"}
                  pClass={"text-secondary-color font-medium"}
                  className={"max-w-[5rem]"}
                  mainClass={"rounded-full px-6 py-2"}
                />
                <Button
                  name={"Weekly"}
                  bgcolor={"bg--[#000]"}
                  pClass={"text-secondary-color font-medium"}
                  className={"max-w-[5rem]"}
                  mainClass={"rounded-full px-6 py-2"}
                />
                <Button
                  name={"Today"}
                  bgcolor={"bg-[#374D99]"}
                  pClass={"text-[#fff] font-medium"}
                  mainClass={"rounded-full px-6 py-2"}
                />
              </div>
            </div>

            <div className="xl:h-[17rem] h-[24rem] overflow-auto">
              <SimpleTable
                tableData={formattedData}
                tableHeadNames={tableHeadNames}
                filterClassName={"hidden"}
                columnClasses={columnClasses}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white box_shadow_pri rounded-lg col-span-full max-lg:h--[20rem] lg:col-span-4 xl:col-span-5 relative p-5 mt-5">
        <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between  mb-4">
          <div className="flex flex-col gap-2">
            <h4 className=" font-semibold text-xl text-secondary-color max-sm:text-center">
              {" "}
              Overview Balance{" "}
            </h4>
            <p className="max-sm:text-center">
              {" "}
              Last Week <span className="text-[#37D159]"> $563,443 </span>{" "}
            </p>
          </div>

          <div className=" flex flex-col max-sm:items-center items-end gap-2">
            <div className="px-4 py-2 bg-primary-color  rounded-md">

              <select
                name=""
                id=""
                className="flex items-center justify-center text-white bg-transparent outline-none"
              >
                <option value="pending" className="text-[#000]">
                  Yearly (2024)
                </option>
                <option value="Cancelled" className="text-[#000]">
                  Yearly (2024)
                </option>
              </select>
            </div>
            <p className="text-base lg:text-xl font-medium flex max-sm:text-center">
              $557,235.31{" "}
              <span className="text-[#37D159] ms-4 flex items-center">
                7% <IoMdArrowDropup />{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="" className={"h-[20rem]"}>
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <YAxis axisLine={false} />
            <Tooltip />
            <Bar
              dataKey="Orders"
              fill="#0E45B7"
              radius={[10, 10, 10, 10]}
              barSize={25}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StoreLayout>
  );
};

export default Page;
