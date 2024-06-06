"use client";

import Field from "@/components/inputFIeld/Field";
import StoreLayout from "@/layout/StoreLayout";
import { RiSendPlaneFill } from "react-icons/ri";

const Page = () => {
  return (
    <StoreLayout>
      <div className="bg-white box_shadow_sec w-full rounded-lg p-3">
        <div className="w-full h-full">
          <div className="flex flex-col items--center gap-3 overflow-hidden">
            <div className="flex items-center">
              <img
                src="/images/team-2.png"
                alt="img"
                className="w-[5rem] h-[5rem] rounded-full"
              />
              <div className="flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <h4 className="text-[#344767] text-xl font-semibold">
                    Charlie Watson
                    <br />
                    <span className="text-[#344767ce] text-sm">
                      {" "}
                      last seen today at 1:53am{" "}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F4F4] w-full md:h-[2.5rem] flex max-sm:flex-col items-center justify-between p-3">
              <p className="text-[#67748E] text-base">
                {" "}
                Sent a quote of 100kg panadol for $6.99 per kg.{" "}
              </p>
              <div className="flex gap-4 max-sm:mt-4">
                <h4 className="text-[green] text-sm font-semibold cursor-pointer">
                  {" "}
                  Accept{" "}
                </h4>
                <h4 className="text-[red] text-sm font-semibold cursor-pointer">
                  {" "}
                  Decline{" "}
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full h-[84.5%]">
            <div className="h-full flex overflow-hidden overflow-y-auto">
              <ul className="h-fit w-full flex flex-col gap-4 p-2">
                <li className="w-full flex flex-col items-start">
                  <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p>
                      {" "}
                      It contains a lot of good lessons about effective
                      practices{" "}
                    </p>
                    <small className="text-left mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-end">
                  <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p className="font-normal">
                      {" "}
                      Can it generate daily design links that include essays an{" "}
                    </p>
                    <small className="text-right mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-start">
                  <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p>
                      {" "}
                      It contains a lot of good lessons about effective
                      practices{" "}
                    </p>
                    <small className="text-left mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-end">
                  <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p className="font-normal">
                      {" "}
                      Can it generate daily design links that include essays an{" "}
                    </p>
                    <small className="text-right mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-start">
                  <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p>
                      {" "}
                      It contains a lot of good lessons about effective
                      practices{" "}
                    </p>
                    <small className="text-left mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-end">
                  <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p className="font-normal">
                      {" "}
                      Can it generate daily design links that include essays an{" "}
                    </p>
                    <small className="text-right mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-start">
                  <div className="bg-[#F4F4F4] text-[#67748E] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p>
                      {" "}
                      It contains a lot of good lessons about effective
                      practices{" "}
                    </p>
                    <small className="text-left mt-1"> 4:42pm </small>
                  </div>
                </li>
                <li className="w-full flex flex-col items-end">
                  <div className="bg-[#374D99] text-[#FFFFFF] w-[95%] md:w-[80%] lg:w-[50%] p-3 rounded-xl flex flex-col">
                    <p className="font-normal">
                      {" "}
                      Can it generate daily design links that include essays an{" "}
                    </p>
                    <small className="text-right mt-1"> 4:42pm </small>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-[4rem] flex justify-between items-center p-2 gap-4">
              <div className="w-full flex justify-center items-center px-3 rounded-lg bg-white box_shadow_pri">
                <Field placeHolder={"Type here"} bgColor={"bg-transparent"} />
              </div>
              <div className="bg-[#374D99] w-[3.5rem] h-full flex justify-center items-center rounded-lg py-3">
                <RiSendPlaneFill className="text-xl text-[#fff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default Page;
