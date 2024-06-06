"use client";

import { SimpleTable } from "@/components/table/simpleTable";
import UserLayout from "@/layout/UserLayout";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { ImBin2 } from "react-icons/im";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import Field from "@/components/inputFIeld/Field";

const Page = () => {
  const router = useRouter();

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
      quantity: 10,
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
      quantity: 10,
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
      quantity: 10,
    },
  ];
  // Mapping over your data to change the structure if needed
  const queryFormattedData = queryRawData.map((item) => ({
    id: item._id,
    product: item.product,
    variation: item.variation,
    price: item.price,
    quantity: item.quantity,
  }));
  const queryColumnClasses = [
    "hidden",
    "text-[#344767] text-left text-sm font-medium pl-5",
    "text-[#344767] text-sm font-medium",
    "text-[#344767] text-sm font-medium",
    "text-[#344767] text-sm font-medium w-[0rem] text-center",
    "text-[#344767] text-sm font-medium w-[5rem] px-10",
  ];

  return (
    <UserLayout>
      <h3 className="text-[#374D99] text-2xl md:text-3xl font-semibold min-w-fit relative">
        Checkout
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg bg-[#fff] box_shadow_pri relative p-5 mt-6 gap-5 xl:gap-10">
        <div>
          <div className="w-full mt--6 rounded-lg bg-[#fff] box_shadow_sec relative h-[19rem] overflow-auto">
            <h4 className="text-[#444444] p-5 text-lg md:text-xl font-semibold">
              Order Summary
            </h4>
            <SimpleTable
              filterClassName={"hidden"}
              tableData={queryFormattedData}
              columnClasses={queryColumnClasses}
              headerClasses="hidden"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-[#444444] text-lg md:text-xl font-semibold min-w-fit relative">
              Shipping Address
            </h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="col-span-full">
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  {" "}
                  Address line 1{" "}
                </label>
                <Field
                  placeHolder={"Your Complete address..."}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  {" "}
                  City{" "}
                </label>
                <Field placeHolder={"Your city..."} className={"mt-1"} />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  {" "}
                  State{" "}
                </label>
                <Field placeHolder={"Your state..."} className={"mt-1"} />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  {" "}
                  Landmark{" "}
                </label>
                <Field
                  placeHolder={"Any landmark (famous place or mall)"}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  {" "}
                  Postal code{" "}
                </label>
                <Field placeHolder={"ZIP Code (231216)"} className={"mt-1"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="form_personal_detail">
            <h3 className="text-[#444444] text-lg md:text-xl font-semibold min-w-fit relative">
              Personal Details
            </h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  First name
                </label>
                <Field
                  placeHolder={"Enter your first name..."}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Last name
                </label>
                <Field
                  placeHolder={"Enter your last name..."}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Email
                </label>
                <Field placeHolder={"Enter your Email..."} className={"mt-1"} />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Phone number
                </label>
                <Field
                  placeHolder={"Enter your Phone number..."}
                  className={"mt-1"}
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Address (Optional)
                </label>
                <Field
                  type="textarea"
                  placeHolder={"Enter your Phone number..."}
                  className={"mt-1"}
                />
              </div>
            </div>
          </div>
          <div className="form_payment_detail mt-5">
            <h3 className="text-[#444444] text-lg md:text-xl font-semibold min-w-fit relative">
              Payment Details
            </h3>
            <ul className="flex flex-wrap gap-5 py-5">
              <li className="min-w-fit">
                {" "}
                <img src="/images/checkout/visa.png" alt="img.png" />{" "}
              </li>
              <li className="min-w-fit">
                {" "}
                <img src="/images/checkout/stripe.png" alt="img.png" />{" "}
              </li>
              <li className="min-w-fit">
                {" "}
                <img src="/images/checkout/paypal.png" alt="img.png" />{" "}
              </li>
              <li className="min-w-fit">
                {" "}
                <img src="/images/checkout/mastercard.png" alt="img.png" />{" "}
              </li>
              <li className="min-w-fit">
                {" "}
                <img src="/images/checkout/google_pay.png" alt="img.png" />{" "}
              </li>
            </ul>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Card holder name
                </label>
                <Field
                  placeHolder={"Enter your first name..."}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Card number
                </label>
                <Field
                  placeHolder={"Enter your Card number..."}
                  className={"mt-1"}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  CVV
                </label>
                <Field placeHolder={"Example: 4567"} className={"mt-1"} />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#374D99] text-base font-semibold"
                >
                  Expiration Date
                </label>
                <Field placeHolder={"MM/YY"} className={"mt-1"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-span-full py-7">
          <Button
            name={"Place Order"}
            bgcolor={"bg--[#000]"}
            pClass={"text-[#fff] font-medium"}
            className={"max-w-[11rem]"}
            style={{
              backgroundImage:
                "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
            }}
            onClick={()=>router.push('/thank-you')}
            // onClick={handelSubmit}
            //   isLoading={isLoading}
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default Page;
