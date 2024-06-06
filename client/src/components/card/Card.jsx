import { RiVisaLine } from "react-icons/ri";
import { MdOutlineWifi } from "react-icons/md";
import { BsSim } from "react-icons/bs";
import React from 'react'


function Card() {
    return (
        <div className={`bg_gradient w-full h-[14rem] rounded-xl relative`}>
            <RiVisaLine className='text-white text-7xl max-[390px]:text-6xl absolute top-2 left-8 max-[390px]:left-3' />
            <div className='absolute bottom-5 left-8 max-[390px]:left-3'>
                <h4 className='text-lg max-[390px]:text-base text-white'>
                    0123 4567 9875
                </h4>
                <div className='mt-1 flex gap-3 justify-between'>
                    <p className='text-sm max-[390px]:text-xs text-white'>
                        Joe Biden
                    </p>
                    <p className='text-sm max-[390px]:text-xs text-white'> 12/26 </p>
                </div>
            </div>
            <MdOutlineWifi className='text-[#ffffff8f] text-4xl max-[390px]:text-3xl absolute right-7 top-20 rotate-90 max-[390px]:right-3' />
            <BsSim className='text-[#ffffff8f] text-4xl max-[390px]:text-3xl absolute right-7 bottom-5 rotate-90 max-[390px]:right-3' />
        </div>
    )
}

export default Card
