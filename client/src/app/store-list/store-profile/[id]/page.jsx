"use client"
import { Card, CardContent } from '@/components/ui/card'
import StoreLayout from '@/layout/StoreLayout'
import Image from 'next/image'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <StoreLayout>
            <h2 className="text-xl text-primary-color mt-4">
                Store Profile
            </h2>
            <p className="text-md text-secondary-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex flex-col gap-5 mt-5">
                <div className="w-full h-fit bg-white p-5 rounded-xl mt-2 flex justify-between md:items-center items-start md:gap-0 gap-3 box_shadow_sec md:flex-row flex-col">
                    <div className='flex items-center gap-4 w-full'>
                        <Image src={"/images/gallery_01.png"} width={100} height={100} className='w-[6rem] h-[6rem] rounded-xl overflow-hidden' />
                        <div className='flex flex-col'>
                            <span className='flex items-center gap-3'>
                                <h3 className='text-primary-color text-xl font-semibold'>Rose & Co.</h3>
                                <Image src={"/images/storeProfile/verifiedTick.png"} width={100} height={100} className='w-[1.2rem] h-[1.2rem] rounded-xl overflow-hidden' />
                            </span>
                            <span className='flex gap-2 max-[400px]:gap-0 max-[400px]:flex-col'>
                                <p className='text-gray-400'>Supplier</p>
                                <p className='text-gray-400'>⭐⭐⭐⭐⭐ 4.7</p>
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex items-end justify-end'>
                        <div className='w-fit bg_gradient px-4 py-2 rounded-md'>
                            <select className='bg-transparent text-white outline-none'>
                                <option value="active" className='text-black'>Active</option>
                                <option value="Deactive" className='text-black'>Deactive</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card
                            x-chunk="dashboard-01-chunk-0"
                            className="w-full box_shadow_pri  flex justify-center items-center  p-5"
                        >
                            <CardContent className="w-fit flex items-center p-0 py-5">
                                <img
                                    src="/images/icon_1.png"
                                    alt="img.png"
                                    className="me-2 w-[3rem] h-[3rem]"
                                />
                                <div>
                                    <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                    <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                        Completed Orders
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            x-chunk="dashboard-01-chunk-0"
                            className="w-full box_shadow_pri  flex justify-center items-center  p-5"
                        >
                            <CardContent className="w-fit flex items-center p-0 py-5">
                                <img
                                    src="/images/storeProfile/storeCard2.png"
                                    alt="img.png"
                                    className="me-2 w-[3rem] h-[3rem]"
                                />
                                <div>
                                    <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                    <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                        Total Products
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            x-chunk="dashboard-01-chunk-0"
                            className="w-full box_shadow_pri  flex justify-center items-center  p-5"
                        >
                            <CardContent className="w-fit flex items-center p-0 py-5">
                                <img
                                    src="/images/storeProfile/storeCard3.png"
                                    alt="img.png"
                                    className="me-2 w-[3rem] h-[3rem]"
                                />
                                <div>
                                    <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                    <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                        Net Sales
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            x-chunk="dashboard-01-chunk-0"
                            className="w-full box_shadow_pri  flex justify-center items-center  p-5"
                        >
                            <CardContent className="w-fit flex items-center p-0 py-5">
                                <img
                                    src="/images/storeProfile/storeCard4.png"
                                    alt="img.png"
                                    className="me-2 w-[3rem] h-[3rem]"
                                />
                                <div>
                                    <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                    <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                        Plan's Details
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid grid-cols-3 rounded-xl  lg:h-[21rem] h-full gap-4">
                    <div className='flex flex-col gap-4 p-4 lg:col-span-1 col-span-full bg-white box_shadow_pri rounded-xl'>
                        <h3 className='text-gray-500 font-semibold'>Store’s Info</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. </p>
                        <div className='flex flex-col gap-2'>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>Full Name:</p>
                                <p className='text-gray-500'>Rose & Co.</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>Store ID:</p>
                                <p className='text-gray-500'>123 1234 123</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>KYC Status:</p>
                                <p className='text-gray-500'>Verified</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>Role:</p>
                                <p className='text-gray-500'>Supplier</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>Created Date:</p>
                                <p className='text-gray-500'>12 Dec 2025</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-primary-color font-semibold'>Plan Details:</p>
                                <p className='text-gray-500'>Gold</p>
                            </span>
                        </div>
                    </div>
                    <div className="blur_effect box_shadow_pri lg:col-span-2 col-span-full lg:h-[25rem] h-[22rem] relative p-1 ">
                        <div className='flex items-center justify-between max-[400px]:flex-col'>

                            <h4 className="p-2 px-5 pt-3 pb-3 font-semibold text-xl">
                                Store’s Analytics
                            </h4>
                            <div className='flex items-center gap-1 bg-[#59748a61] px-4 py-2 rounded-xl w-fit'>
                                <FaCalendarAlt color='#fff' />
                                <select className='bg-transparent text-white outline-none'>
                                    <option value="month" className='text-black'>This Month</option>
                                    <option value="year" className='text-black'>This Year</option>
                                </select>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height="" className={"max-[400px]:h-[70%] lg:h-[80%] h-[80%] ml-4"}>
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#3FBDF1" fill="#3FBDF1" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* <StoreDash /> */}

            </div>
        </StoreLayout>
    )
}

export default page
