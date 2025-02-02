import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Trusted = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className='2xl:mt-40'>
            <h6 className='text-[#1f80f0] font-bold tracking-widest text-sm md:text-[16px] mb-5 w-full text-center 2xl:pt-14'>TRUSTED BY THE BEST</h6>

            <div className='flex lg:items-center flex-col lg:flex-row justify-between w-full'>
                <div ref={ref}>
                    <CountUp start={0} end={inView ? 20 : 0} delay={2} duration={2}  scrollSpyOnce={true}>
                        {({ countUpRef }) => (
                            <div className="lg:w-fit flex lg:flex-col flex-row border-b-[1px] border-dashed border-blue-200 lg:border-0 justify-between w-full items-center">
                                <div className="flex items-center text-[50px]  md:text-[60px]  lg:text-[96px] font-semibold bg-gradient-to-b from-blue-500 to-[#0057BB] bg-clip-text text-transparent">
                                    <FaGreaterThan className='text-[#106CD6]' /> <span ref={countUpRef}>20</span>
                                </div>
                                <h4 className="lg:w-full lg:text-center font-medium">Years of Experience</h4>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div ref={ref}>
                    <CountUp start={0} end={inView ? 40 : 0} delay={2} duration={2}  scrollSpyOnce={true}>
                        {({ countUpRef }) => (
                            <div className="lg:w-fit flex lg:flex-col flex-row border-b-[1px] border-dashed border-blue-200 lg:border-0 justify-between w-full items-center">
                                <div className="flex items-center text-[50px]  md:text-[60px]  lg:text-[96px] font-semibold bg-gradient-to-b from-blue-500 to-[#0057BB] bg-clip-text text-transparent">
                                    <span ref={countUpRef}>40</span> <FaPlus className='text-[#106CD6]' />
                                </div>
                                <p className="lg:w-full lg:text-center font-medium">Financial Institutions</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div ref={ref}>
                    <CountUp start={0} end={inView ? 200 : 0} delay={2} duration={2} scrollSpyOnce={true}>
                        {({ countUpRef }) => (
                            <div className="lg:w-fit flex lg:flex-col flex-row border-b-[1px] border-dashed border-blue-200 lg:border-0 justify-between w-full items-center">
                                <div className="flex items-center text-[50px]  md:text-[60px]  lg:text-[96px] font-semibold bg-gradient-to-b from-blue-500 to-[#0057BB] bg-clip-text text-transparent">
                                    <FaGreaterThan className='text-[#106CD6]' /> <span ref={countUpRef}>200</span>m
                                </div>
                                <p className="lg:w-full lg:text-center font-medium">Customers Each</p>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>

            {/* list of image */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 py-20 gap-14 w-full h-full">
                {images.map((src, index) => (
                    <img
                        key={index}
                        className={`w-[14rem] h-20 ${[1, 3, 5, 7, 10, 13, 15].includes(index + 1) ? "object-cover" : "object-contain"}`}
                        src={src}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
            <div className='my-10 md:hidden'>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper">

                {
                    images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-[14rem] h-20 object-contain" src={src} alt={`Image ${index + 1}`} />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </div>
    )
}

export default Trusted


const images = [
    "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
];