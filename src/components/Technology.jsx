import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"; 

import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css'

// import required modules
import { Pagination } from 'swiper/modules';

const Technology = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef()

    const handleTabClick = (i) =>{
        setActiveIndex(i)
        if(swiperRef.current){
            swiperRef.current.slideTo(i);
        }
    }
    return (
        <div className='mb-10 relative'>
            <h6 className='text-[#1f80f0] font-bold tracking-widest text-sm md:text-[16px] mb-5 w-full text-center  mt-20'>TECHNOLOGY BUILT FOR YOU</h6>
            <h2 className='text-[30px] md:text-[46px] lg:text-[56px]  font-semibold text-black  w-full text-center mb-8'>
                The future of finance
            </h2>

            <div>
                {/* Tab Navigation */}
                <div className="md:flex justify-center mt-6 gap-4 pb-10 flex-wrap hidden">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`px-6 font-semibold py-3 rounded-full cursor-pointer text-[#1f80f0] text-[18px] transition-all ${activeIndex === index ? "bg-[#b9d9ff] font-semibold" : ""
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSwiper={(s) => (swiperRef.current = s)}
                    className="mt-10"
                >
                    {
                        swiperData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex items-start justify-baseline gap-5 flex-col lg:flex-row p-3 rounded-2xl border-[1px] border-[#f2f2f2]'>
                                    <div className='lg:w-[50%]'>
                                        <h6 className='text-[#1f80f0] font-bold tracking-widest text-sm md:text-[16px] mb-5'>{item?.title}</h6>
                                        <h2 className='text-[30px] md:text-[46px] lg:text-[46px]  font-semibold text-black leading-10 md:leading-12  mb-5 '>
                                            {item?.header}
                                        </h2>
                                        <img className=' md:hidden w-full h-[10rem] object-cover rounded-xl' src={item?.img} alt="" />
                                        <h6 className='font-semibold py-7'>
                                            {item?.para1}
                                        </h6>

                                        <h6 className=''>
                                            {item?.para2}
                                        </h6>
                                    </div>
                                    <div className='lg:w-[60%]'>
                                        <img className='hidden md:flex w-[80rem] h-[26rem] object-cover rounded-xl' src={item?.img} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="bg-gradient-to-b from-white to-[#F1F7FE] h-[30vh] absolute w-[130%] lg:w-[120%] xl:w-[130%] bottom-5 lg:-bottom-2 xl:bottom-20 2xl:-bottom-20 -left-[400px] -rotate-8 -z-10 hidden md:flex "></div>
        </div>
    )
}

export default Technology


const swiperData = [
    {
        title: 'Customer focused',
        header: 'Purpose-built financial services',
        para1: 'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
        para2: 'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.',
        img: '/assets/tech/t-1.avif'
    },
    {
        title: 'Agile and adaptable',
        header: "Agile and adaptable for growth",
        para1: 'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.',
        para2: 'Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
        img: '/assets/tech/t-2.avif'
    },
    {
        title: 'Compliance ready',
        header: 'Manage compliance with ease',
        para1: 'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
        para2: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
        img: '/assets/tech/t-3.avif'
    },
    {
        title: "Secure and safe",
        header: 'Highly secure and safe',
        para1: 'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.',
        para2: 'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.',
        img: '/assets/tech/t-4.avif'
    }
]
const tabs = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
];