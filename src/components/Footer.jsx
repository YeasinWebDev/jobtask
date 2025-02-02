import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <div className=''>
            {/* part-1  */}
            <div className='bg-[#002045] w-full h-[8rem] '>
                <div className='mx-5 xl:mx-[18%] flex items-center justify-between h-full'>
                    <img className="w-[180px] md:w-[250px]" src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format" alt="" />
                    <div className='lg:flex hidden'>
                        <span className='text-[#00E9E0] font-semibold border-r-[1px] border-[#164377] pr-6 mr-6 py-3'>Our Solutions</span>
                        <div className='flex items-center justify-center gap-5 ml'>
                            <span className='text-[#00E9E0] font-semibold'>AnyCaaS</span>
                            <span className='text-[#00E9E0] font-semibold'>nyBaaS</span>
                            <span className='text-[#00E9E0] font-semibold'>AnyPaaS</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-[2rem] gap-3 text-[#1563BE] lg:hidden'>
                        <FaLinkedin/>
                        <IoCall />
                        <IoMail />
                    </div>
                </div>
            </div>
            {/* part-2 */}
            <div className='bg-[#00152D] w-full h-fit'>
                <div className='mx-5 xl:mx-[18%] flex items-center justify-between flex-col md:flex-row h-full text-[#1F80E4] font-semibold text-[12px] py-4'>
                    <span>©2023 All rights reserved. Any Technology Pte Ltd.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer