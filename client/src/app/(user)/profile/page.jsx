"use client"
import UserProfileChatTab from '@/components/USER/userProfile/UserProfileChatTab'
import UserProfileOrderTable from '@/components/USER/userProfile/UserProfileOrderTable'
import UserLayout from '@/layout/UserLayout'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [selectTab, setSelectTab] = useState("Orders")

    // Get Tab Names
    const handleTabNames = (e) => {
        setSelectTab(e.target.innerText)
    }

    return (
        <UserLayout>
            <div className='relative z-50 flex items-center justify-center flex-col gap-8'>
                <Image src={"/images/UserProfile/userProfileImg.jpg"} width={200} height={200} className='rounded-full w-[12rem] h-[12rem]' />
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='capitalize text-primary-color'>john doe</h1>
                    <div className='flex items-center text-secondary-color gap-4'>
                        <span className='flex items-center gap-1'>
                            <p>Member ID:</p>
                            <p>5124 32156</p>
                        </span>
                        <span className='flex items-center gap-1'>
                            <p>Email:</p>
                            <p>johndoe@example.com</p>
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 rounded-full bg-white p-1 box_shadow_sec'>
                    <p className={`text-xl px-8 py-2  rounded-full font-semibold cursor-pointer active:scale-[0.95] ${selectTab === "Orders" ? "bg-primary-color text-white" : "bg-white text-primary-color"}`} onClick={handleTabNames}>Orders</p>
                    <p className={`text-xl px-8 py-2  rounded-full font-semibold cursor-pointer active:scale-[0.95] ${selectTab === "Messages" ? "bg-primary-color text-white" : "bg-white text-primary-color"}`} onClick={handleTabNames}>Messages</p>
                    <p className={`text-xl px-8 py-2  rounded-full font-semibold cursor-pointer active:scale-[0.95] ${selectTab === "Inquiries" ? "bg-primary-color text-white" : "bg-white text-primary-color"}`} onClick={handleTabNames}>Inquiries</p>
                </div>
                <div>
                    {selectTab === "Orders" ?
                        <UserProfileOrderTable />
                        : selectTab === "Messages" ? <UserProfileChatTab />
                            : selectTab === "Inquiries" ?
                                <UserProfileOrderTable />
                                : null}
                </div>
            </div>
        </UserLayout>
    )
}

export default page
