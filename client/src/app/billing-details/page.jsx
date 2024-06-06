import Button from '@/components/button/Button'
import Card from '@/components/card/Card'
import StoreLayout from '@/layout/StoreLayout'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'


function page() {

    const plan = {
        type: 'Sliver',
        price: '50',
        details: [
            '2 team members',
            '2 team members',
            '2 team members',
            '2 team members',
            '2 team members',
            '2 team members',
            '2 team members 2 team members 2 team members 2 team members 2 team members ',
        ]
    }

    const splitArray = (array, columns) => {
        const length = Math.ceil(array.length / columns);
        return new Array(columns).fill().map((_, index) => array.slice(index * length, (index + 1) * length));
    };

    const isTwoColumns = plan.details.length > 6;
    const columns = isTwoColumns ? splitArray(plan.details, 2) : [plan.details];


    return (
        <StoreLayout>
            <div className="flex flex-col justify-center items-center p-2">
                <h4 className="text-secondary-color text-[2rem] xl:text-[3rem] text-center pt-10">
                    {" "}
                    Choose Your Pricing Plan{" "}
                </h4>
                <p className="text-secondary-color text-center w-[100%] md:w-[80%] xl:w-[70%] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='xl:flex xl:flex-row gap-5 flex flex-col-reverse px-3 pb-6'>

                <div className='xl:w-[70%] flex flex-col justify-center blur_effect xl:py-[2rem] xl:px-[2rem] p-3'>

                    <h4 className="text-secondary-color text-[1.5rem] xl:text-[2rem] ">
                        {" "}
                        Choose Your Pricing Plan{" "}
                    </h4>

                    <div className='flex justify-between xl:w-[15rem]  py-4'>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <p className=''>
                                    Plan Name:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Purchased Date:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Expiry Date:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Price:
                                </p>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <p className='text-primary-color'>
                                    Gold
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    12 Dec 2023
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    11 Dec 2024
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    $99/month
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='xl:w-1/4'>
                        <Button name={'Change Plan'} className={'px-1'} bgcolor={'transparent'} pClass={"bg_gradient text-white rounded-lg py-3"} />
                    </div>

                    <div className='py-3'>
                        <h4 className="text-secondary-color text-[1.5rem] xl:text-[2rem] ">
                            {" "}
                            Plan Features:
                        </h4>

                        <div className={isTwoColumns ? 'flex flex-wrap' : ''}>
                            {columns.map((col, colIndex) => (
                                <ul className='w-full md:w-1/2' key={colIndex}>
                                    {col.map((detail, i) => (
                                        <li className="py-2 px-2" key={i}>
                                            {" "}
                                            <div className="flex gap-3 items-center ">
                                                {" "}
                                                <FaCheckCircle className="text-green-500" />{" "}
                                                <span className="w-[100%]">{detail}</span>{" "}
                                            </div>{" "}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className='py-3'>
                        <h4 className="text-secondary-color text-[1.5rem] xl:text-[2rem] ">
                            {" "}
                            Plan Description:
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>


                <div className='xl:w-[30%] flex flex-col justify-center blur_effect xl:py-[1rem] xl:px-[1rem] p-3 h-fit' >

                    <h4 className="text-secondary-color text-[1.5rem] xl:text-[2rem] ">
                        {" "}
                        Card Details:
                    </h4>

                    <div className='pt-5 lg:w-1/2 xl:w-[100%]'>
                        <Card />
                    </div>

                    <div className='flex  justify-between xl:w-[15rem]  py-4'>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <p className=''>
                                    Plan Name:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Purchased Date:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Expiry Date:
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Price:
                                </p>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <p className='text-primary-color'>
                                    Gold
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    12 Dec 2023
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    11 Dec 2024
                                </p>
                            </li>
                            <li>
                                <p className='text-primary-color'>
                                    $99/month
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-1/2'>
                        <Button name={'Checkout'} className={'px-1'} bgcolor={'transparent'} pClass={"bg_gradient text-white rounded-lg py-3"} />
                    </div>
                </div>

            </div>
        </StoreLayout>
    )
}

export default page
