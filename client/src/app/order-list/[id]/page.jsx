"use client";

import StoreLayout from "@/layout/StoreLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { SimpleTable } from "@/components/table/simpleTable";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Page = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const tableHeadNames = [
    "ID",
    "Item",
    "Category",
    "Variant",
    "Quantity",
    "Price",
    "Tax",
    "Amount",
    "Status",
  ];

  const rawData = [
    {
      _id: 1,
      item: "Panadol",
      category: "Pills",
      variant: "50mg",
      quantity: "2.00kg",
      price: "$20.00",
      tax: "$2.00",
      amount: "$200.00",
      status: (
        <Badge
          className={
            "bg-[#e27b054f] text-[#e27b05] max-sm:hidden px-3 py-1 hover:bg-[#e27b054f]"
          }
        >
          Packaging
        </Badge>
      ),
    },
  ];



  // Mapping over your data to change the structure if needed
  const formattedData = rawData.map((item) => ({
    id: item._id,
    item: item.item,
    category: item.category,
    variant: item.variant,
    quantity: item.quantity,
    price: item.price,
    tax: item.tax,
    amount: item.amount,
    status: item.status,
  }));

  return (
    <StoreLayout>
      <Card
        x-chunk="dashboard-01-chunk-0"
        className="w-full box_shadow_pri blur_effect flex justify--center items-center p-4 mt-5"
      >
        <CardContent className="w-full flex flex-col gap-5 items--center p-0 py--5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-primary-color text-2xl font-medium">
                #90377
              </h4>
              <Badge
                className={
                  "bg-[#D8FFEF] text-[#25B178] max-sm:hidden px-3 py-1 hover:bg-[#D8FFEF]"
                }
              >
                Paid
              </Badge>
              <Badge
                className={
                  "bg-[#e27b054f] text-[#e27b05] max-sm:hidden px-3 py-1 hover:bg-[#e27b054f]"
                }
              >
                In Progress
              </Badge>
            </div>
            <div className="bg_gradient rounded-md px-2">
              <select
                name=""
                id=""
                className="p-[0.3rem] bg-transparent  text-[#fff] outline-none "
              >
                <option value="pending" className="text-[#000]">
                  Active
                </option>
                <option value="Cancelled" className="text-[#000]">
                  Cancelled
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <Progress value={progress} className="w-[100%] bg-[#25B178]" />
              <h4 className="text-base text-[#25B178]">Confirmation</h4>
            </div>
            <div>
              <Progress value={progress} className="w-[100%] bg-[#25B178]" />
              <h4 className="text-base text-[#25B178]">Payment </h4>
            </div>
            <div>
              <Progress value={progress} className="w-[70%] bg-[#EE940E]" />
              <h4 className="text-base text-[#25B178]">Packaging </h4>
            </div>
            <div>
              <Progress value={progress} className="w-[0%] bg-[#EE940E]" />
              <h4 className="text-base text-secondary-color">Shipping </h4>
            </div>
            <div>
              <Progress value={progress} className="w-[0%] bg-[#EE940E]" />
              <h4 className="text-base text-secondary-color">Delivered </h4>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-secondary-color text-xl" />
            <h4 className="text-sm text-secondary-color">
              Estimated Shipping Date:{" "}
              <span className="text-primary-color font-medium">
                22 May 2024
              </span>{" "}
            </h4>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 mt-5">
        <Card
          x-chunk="dashboard-01-chunk-0"
          className="w-full box_shadow_pri blur_effect p-1 col-span-full lg:col-span-4 h-[19.5rem] overflow-auto"
        >
          <h4 className="px-3 pt-3 font-semibold text-xl"> Products </h4>

          <SimpleTable
            tableHeadNames={tableHeadNames}
            tableData={formattedData}
          />
        </Card>

        <Card
          x-chunk="dashboard-01-chunk-0"
          className="w-full box_shadow_pri blur_effect p-1 col-span-full lg:col-span-2 h-[19.5rem] overflow-auto"
        >
          <h4 className="px-3 pt-3 font-semibold text-xl"> Payment </h4>
          <ul className="px-3 pt-3 flex flex-col gap-1">
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Product Price:{" "}
              <span className="text-secondary-color font-medium">$90</span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Variant:{" "}
              <span className="text-secondary-color font-medium">A5</span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Delivery:{" "}
              <span className="text-secondary-color font-medium">$14</span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Taxes:{" "}
              <span className="text-secondary-color font-medium">
                $1.95
              </span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Quantity:{" "}
              <span className="text-secondary-color font-medium">
                2.00kg
              </span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Total:{" "}
              <span className="text-secondary-color font-medium">
                $200.00
              </span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              Shipping:{" "}
              <span className="text-secondary-color font-medium">
                +$50.00
              </span>{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center text-lg mt-3">
              {" "}
              Subtotal:{" "}
              <span className="text-secondary-color font-medium">
                $250.00
              </span>{" "}
            </li>
          </ul>
        </Card>

        <Card
          x-chunk="dashboard-01-chunk-0"
          className="w-full box_shadow_pri blur_effect p-1 col-span-full lg:col-span-2 h-[19.5rem] overflow-auto"
        >
          <h4 className="px-3 pt-3 font-semibold text-xl">
            {" "}
            Shipping Details{" "}
          </h4>

          <ul className="px-3 pt-3 flex flex-col gap-2">
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              John Doe{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              oliver@burrito.com{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              +1 654 613452{" "}
            </li>
            <li className="text-[#6E7191] flex justify-between items-center">
              {" "}
              1234 Maple Street Springfield, IL 62704USA{" "}
            </li>
            <li className="text-[#6E7191] text-lg mt-3"> Details: </li>
            <li className="border-[1px] text-[#6E7191] mt--3 rounded-xl box_shadow_pri flex items-center justify-between p-2 gap-2">
              <div className="max-xl:text-xs">
                <img src="/images/mastercard.png" alt="img.png" />
              </div>{" "}
              **** **** **** 7852{" "}
              <IoIosInformationCircleOutline className="text-xl" />
            </li>
          </ul>
        </Card>
      </div>

      <Card
        x-chunk="dashboard-01-chunk-0"
        className="w-full box_shadow_pri blur_effect flex flex-col items--center max-md:p-2 p-4 mt-5"
      >
        <h4 className="px-3 pt--3 font-semibold text-xl"> Products </h4>
        <ul className="max-md:px-2 px-3 pt-3 flex flex-col gap-5">
          <li className="text-[#6E7191] max-sm:flex-col flex sm:justify-between sm:items-center">
            {" "}
            <div className="flex gap-2">
              <IoIosCheckmarkCircleOutline className="max-md:text-3xl text-4xl text-[#80808052]" />
              <div className="text-[#344767] max-md:text-sm">
                This order has been confirmed
                <p className="text-secondary-color text-sm mt-1 max-md:text-xs">
                  {" "}
                  Lorem Ipsum Dolor Sit Amet.{" "}
                </p>
              </div>
            </div>
            <span className="max-sm:ps-8 max-sm:pt-2 max-md:text-sm text-secondary-color font-medium">
              12-Dec-2024
            </span>{" "}
          </li>
          <li className="text-[#6E7191] max-sm:flex-col flex sm:justify-between sm:items-center">
            {" "}
            <div className="flex gap-2">
              <IoIosCheckmarkCircleOutline className="max-md:text-3xl text-4xl text-[#80808052]" />
              <div className="text-[#344767] max-md:text-sm">
                This order has been confirmed
                <p className="text-secondary-color text-sm mt-1 max-md:text-xs">
                  {" "}
                  Lorem Ipsum Dolor Sit Amet.{" "}
                </p>
              </div>
            </div>
            <span className="max-sm:ps-8 max-sm:pt-2 max-md:text-sm text-secondary-color font-medium">
              12-Dec-2024
            </span>{" "}
          </li>
          <li className="text-[#6E7191] max-sm:flex-col flex sm:justify-between sm:items-center">
            {" "}
            <div className="flex gap-2">
              <IoIosCheckmarkCircleOutline className="max-md:text-3xl text-4xl text-[#80808052]" />
              <div className="text-[#344767] max-md:text-sm">
                This order has been confirmed
                <p className="text-secondary-color text-sm mt-1 max-md:text-xs">
                  {" "}
                  Lorem Ipsum Dolor Sit Amet.{" "}
                </p>
              </div>
            </div>
            <span className="max-sm:ps-8 max-sm:pt-2 max-md:text-sm text-secondary-color font-medium">
              12-Dec-2024
            </span>{" "}
          </li>
        </ul>
      </Card>
    </StoreLayout>
  );
};

export default Page;
