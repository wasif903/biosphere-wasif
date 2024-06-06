"use client";

import { SimpleTable } from "@/components/table/simpleTable";
import UserLayout from "@/layout/UserLayout";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { ImBin2 } from "react-icons/im";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const queryTableHead = [
    "ID",
    "Product",
    "Variation",
    "Price",
    <div className="text-left"> Quantity </div>,
    "",
  ];
  const queryRawData = [
    {
      _id: 1,
      product: (
        <div className="flex justify-start items-center gap-3 w-[14rem]">
          <img
            src="images/bottel_.png"
            alt="img"
            className="w-[5rem] h-[5rem]"
          />
          <div>
            <h4 className="text-[#444444] text-lg font-semibold">
              Panadol Extra
            </h4>
            <small className="text-[#444444]">Product code: XYZ</small>
          </div>
        </div>
      ),
      variation: "Extra",
      price: "$49.00",
      quantity: (
        <div className="border-[1px] border-[silver] text-[#444444] w-[6rem] flex items-center justify-center gap-5 p-1">
          {" "}
          <FiMinus className="text-lg" /> 10 <GoPlus className="text-lg" />{" "}
        </div>
      ),
      delete: (
        <div className="flex justify-center">
          <ImBin2 className="text-[silver]" />
        </div>
      ),
    },
    {
      _id: 2,
      product: (
        <div className="flex justify-start items-center gap-3 w-[14rem]">
          <img
            src="images/bottel_.png"
            alt="img"
            className="w-[5rem] h-[5rem]"
          />
          <div>
            <h4 className="text-[#444444] text-lg font-semibold">
              Panadol Extra
            </h4>
            <small className="text-[#444444]">Product code: XYZ</small>
          </div>
        </div>
      ),
      variation: "Extra",
      price: "$49.00",
      quantity: (
        <div className="border-[1px] border-[silver] text-[#444444] w-[6rem] flex items-center justify-center gap-5 p-1">
          {" "}
          <FiMinus className="text-lg" /> 10 <GoPlus className="text-lg" />{" "}
        </div>
      ),
      delete: (
        <div className="flex justify-center">
          <ImBin2 className="text-[silver]" />
        </div>
      ),
    },
    {
      _id: 3,
      product: (
        <div className="flex justify-start items-center gap-3 w-[14rem]">
          <img
            src="images/bottel_.png"
            alt="img"
            className="w-[5rem] h-[5rem]"
          />
          <div>
            <h4 className="text-[#444444] text-lg font-semibold">
              Panadol Extra
            </h4>
            <small className="text-[#444444]">Product code: XYZ</small>
          </div>
        </div>
      ),
      variation: "Extra",
      price: "$49.00",
      quantity: (
        <div className="border-[1px] border-[silver] text-[#444444] w-[6rem] flex items-center justify-center gap-5 p-1">
          {" "}
          <FiMinus className="text-lg" /> 10 <GoPlus className="text-lg" />{" "}
        </div>
      ),
      delete: (
        <div className="flex justify-center">
          <ImBin2 className="text-[silver]" />
        </div>
      ),
    },
  ];
  // Mapping over your data to change the structure if needed
  const queryFormattedData = queryRawData.map((item) => ({
    id: item._id,
    product: item.product,
    variation: item.variation,
    price: item.price,
    quantity: item.quantity,
    delete: item.delete,
  }));
  const queryColumnClasses = [
    "hidden",
    "text-[#344767] text-left text-sm font-medium pl-5",
    "text-[#344767] text-sm font-medium",
    "text-[#344767] text-sm font-medium",
    "text-[#344767] text-sm font-medium w-[0rem]",
    "text-[#344767] text-sm font-medium w-[5rem]",
  ];

  return (
    <UserLayout>
      <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit relative">
        My Cart
      </h3>

      <div className="w-full h-fit mt-6 rounded-lg bg-[#fff] box_shadow_pri relative">
        <SimpleTable
          tableHeadNames={queryTableHead}
          filterClassName={"hidden"}
          tableData={queryFormattedData}
          columnClasses={queryColumnClasses}
        />
        <div className="border-t-[1px] border-[#c0c0c0b9] w-full h-fit h--[10rem] flex justify-end">
          <ul className="py-3 px-7 max-sm:w-full">
            <li className="text-[#444444] flex justify-between w-full sm:w-[18rem] font-medium">
              {" "}
              <span className="text-base">Subtotal</span>{" "}
              <span className="text-sm">$490.00</span>{" "}
            </li>
            <li className="text-[#444444] flex justify-between w-full sm:w-[18rem] font-medium mt-2">
              {" "}
              <span className="text-xl">Total</span>{" "}
              <span className="text-xl">$490.00</span>{" "}
            </li>
            <li>
              <div className="flex justify-end mt-6">
                <Button
                  name={"Checkout"}
                  bgcolor={"bg--[#000]"}
                  pClass={"text-[#fff] font-medium"}
                  className={"max-w-[10rem]"}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
                  }}
                  onClick={()=>router.push('/check-out')}
                  // onClick={handelSubmit}
                  //   isLoading={isLoading}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UserLayout>
  );
};

export default Page;
