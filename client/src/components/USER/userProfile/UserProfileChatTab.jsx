import Field from '@/components/inputFIeld/Field';
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const UserProfileChatTab = () => {
    return (
        <div className="w-[66vw] h-full flex gap-5 bg-white box_shadow_sec rounded-xl">
            <div className="  w-[25rem] max-lg:w-full h-full p-4 rounded-lg">
                <div className="flex justify-center items-center px-2 rounded-lg border">
                    <Field
                        placeHolder={"Search any keywords"}
                        bgColor={"bg-transparent"}
                    />
                </div>

                <div className="bg-[#374D99] border-2 mt-5 flex max-sm:flex-col justify-between gap-5 p-5 rounded-lg cursor-pointer">
                    <div className="w-full flex gap-3 overflow-hidden">
                        <img
                            src="/images/team-2.png"
                            alt="img"
                            className="w-[3rem] h-[3rem] rounded-full"
                        />
                        <div className="w-full flex flex-col justify-between">
                            <div className="w-full flex justify-between">
                                <h4 className="text-[#fff] text-base font-normal">
                                    Charlie Watson
                                    <br />
                                </h4>
                                <small className="text-[#fff] mt-1 min-w-fit"></small>
                            </div>
                            <p className="text-[#fff] text-sm"> Typing...</p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex max-sm:flex-col justify-between gap-5 p-5 rounded-lg cursor-pointer">
                    <div className="w-full flex gap-3 overflow-hidden">
                        <img
                            src="/images/team-2.png"
                            alt="img"
                            className="w-[3rem] h-[3rem] rounded-full"
                        />
                        <div className="w-full flex flex-col justify-between">
                            <div className="w-full flex justify-between">
                                <h4 className="text-primary-color text-base font-semibold">
                                    Charlie Watson
                                    <br />
                                </h4>
                                <small className="text-[#455154] mt-1 min-w-fit">
                                    1 day ago
                                </small>
                            </div>
                            <p className="text-secondary-color text-sm">
                                {" "}
                                Be sure to check it out if your dev …
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full rounded-lg p-3 max-lg:hidden h-[40rem]">
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
                        <div className="bg-[#F4F4F4] w-full h-[2.5rem] flex items-center justify-between p-3">
                            <p className="text-[#67748E] text-base">
                                {" "}
                                Sent a quote of 100kg panadol for $6.99 per kg.{" "}
                            </p>

                            <div className="flex gap-4">
                                <h4 className="text-[green] text-sm font-semibold cursor-pointer"> Accept </h4>
                                <h4 className="text-[red] text-sm font-semibold cursor-pointer"> Decline </h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between w-full h-[30rem]">
                        <div className="h-full flex overflow-hidden overflow-y-auto">
                            <ul className="h-fit w-full flex flex-col gap-4 p-2">
                                <li className="w-full flex flex-col items-start">
                                    <div className="bg-[#F4F4F4] text-[#67748E] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p>
                                            {" "}
                                            It contains a lot of good lessons about effective
                                            practices{" "}
                                        </p>
                                        <small className="text-left mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-end">
                                    <div className="bg-[#374D99] text-[#FFFFFF] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p className="font-normal">
                                            {" "}
                                            Can it generate daily design links that include essays
                                            an{" "}
                                        </p>
                                        <small className="text-right mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-start">
                                    <div className="bg-[#F4F4F4] text-[#67748E] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p>
                                            {" "}
                                            It contains a lot of good lessons about effective
                                            practices{" "}
                                        </p>
                                        <small className="text-left mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-end">
                                    <div className="bg-[#374D99] text-[#FFFFFF] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p className="font-normal">
                                            {" "}
                                            Can it generate daily design links that include essays
                                            an{" "}
                                        </p>
                                        <small className="text-right mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-start">
                                    <div className="bg-[#F4F4F4] text-[#67748E] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p>
                                            {" "}
                                            It contains a lot of good lessons about effective
                                            practices{" "}
                                        </p>
                                        <small className="text-left mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-end">
                                    <div className="bg-[#374D99] text-[#FFFFFF] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p className="font-normal">
                                            {" "}
                                            Can it generate daily design links that include essays
                                            an{" "}
                                        </p>
                                        <small className="text-right mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-start">
                                    <div className="bg-[#F4F4F4] text-[#67748E] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p>
                                            {" "}
                                            It contains a lot of good lessons about effective
                                            practices{" "}
                                        </p>
                                        <small className="text-left mt-1"> 4:42pm </small>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-end">
                                    <div className="bg-[#374D99] text-[#FFFFFF] w-[50%] p-3 rounded-xl flex flex-col">
                                        <p className="font-normal">
                                            {" "}
                                            Can it generate daily design links that include essays
                                            an{" "}
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
        </div>
    )
}

export default UserProfileChatTab
