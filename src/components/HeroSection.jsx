import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import { MdChevronRight } from 'react-icons/md'

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use spring for smooth animation
  const smoothX = useSpring(x, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX - window.innerWidth / 2);
      y.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const translateX1 = useTransform(smoothX, [-window.innerWidth / 2, window.innerWidth / 2], [-30, 30]);
  const translateY1 = useTransform(smoothY, [-window.innerHeight / 2, window.innerHeight / 2], [-30, 30]);
  const translateX2 = useTransform(smoothX, [window.innerWidth / 2, -window.innerWidth / 2], [-30, 30]);
  const translateY2 = useTransform(smoothY, [window.innerHeight / 2, -window.innerHeight / 2], [-30, 30]);
  return (
    <div>
      <div className=' bg-gradient-to-r from-indigo-600 to-blue-500 h-[35rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] relative lg:bottom-40 md:bottom-10 -rotate-5 md:w-[110%] w-[115%]  md:-left-10 -left-6 overflow-hidden'>
        <div className='rotate-5  w-[93%] h-full flex justify-end'>
          {/* left side */}
          <div className='bg-gradient-to-r from-indigo-600 to-blue-500 h-full z-20 absolute lg:-left-[20rem] xl:-left-[12rem] 2xl:left-0 lg:w-[80rem] xl:w-[90rem] lg:-rotate-45 xl:-top-24'>
            {/* parent */}
            <div className='w-full h-full lg:rotate-[44.5deg] pb-2 flex flex-col lg:justify-end justify-center mt-20 lg:mt-0 items-center'>
              {/* left content div */}
              <div className='xl:w-[50%] lg:w-[40%] md:w-[80%] w-[85%] ml-5 md:ml-0 h-full md:h-fit mt-10 md:mt-0'>
                <h1 className='text-[50px] lg:text-[46px] xl:text-[80px] font-semibold text-white xl:leading-24 lg:leading-12 md:leading-12 leading-14'>Embrace the future of finance</h1>
                <p className='text-white font-semibold xl:w-[70%] w-[90%] pt-5'>
                  Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
                </p>
                <div className="mt-10 group flex items-center justify-center font-semibold text-white rounded-sm py-3 px-6 bg-[#FE8B53] transition-all duration-300 w-full lg:w-fit text-lg cursor-pointer">
                  Reach Out to Us
                  <span className="icon ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <MdChevronRight size={25} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-green-500 h-full lg:w-[90%] xl:w-[70%] lg:pt-20 xl:pt-0 hidden lg:block'>
            <motion.img
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 1, type: 'spring', stiffness: 50 }}
              className='object-cover pt-20' src="/assets/heroimg.avif" alt="" />
          </div>
        </div>

        {/* line-1 */}
        <motion.div
          style={{ x: translateX1, y: translateY1 }}
          className='hidden lg:flex'
        >
          <div className='absolute bottom-3 left-[14rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[7rem] h-[60rem] rotate-x-50 rotate-z-30  -mt-20'></div>
          <div className='absolute bottom-[30rem] left-[37em] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[5rem] h-[13rem] rotate-x-50 rotate-z-30  -mt-10'></div>
          <div className='absolute bottom-[22rem] left-[48rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[6rem] h-[21rem] rotate-x-50 rotate-z-30  -mt-14'></div>

          <div className='absolute bottom-[10rem] right-[23rem] xl:right-[30rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[8rem] h-[60rem] rotate-x-70 rotate-z-20 -mt-36'></div>
          <div className='absolute bottom-[12rem] right-[25rem] xl:right-[26rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[5rem] h-[33rem] rotate-x-70 rotate-z-20 -mt-16'></div>
          <div className='absolute -bottom-[1rem] right-[8rem] xl:right-[10rem] bg-linear-to-bl from-[#1C7CEC] to-[#2BAAD3] opacity-55 w-[6rem] h-[52rem] rotate-x-70 rotate-z-20  -mt-20'></div>
        </motion.div>

        {/* line-2 */}
        <motion.div
          style={{ x: translateX2, y: translateY2 }}
          className='hidden lg:flex'
        >
          <div className='absolute bottom-[22rem] left-[8rem] bg-cyan-300 blur-lg w-[2rem] h-[15rem] rotate-42 -mt-12'></div>
          <div className='absolute bottom-20 left-[15rem] bg-cyan-300 blur-lg w-[2rem] h-[20rem] rotate-40 -mt-12'></div>
          {/* <div className='absolute bottom-40 left-[35rem] bg-cyan-300 blur-lg w-[5rem] h-[25rem] rotate-20 -mt-12'></div> */}
          <div className='absolute bottom-[30rem] right-[5rem] bg-[#1F80F0] blur-2xl w-[24rem] h-[24rem] rotate-20 rounded-full -mt-10'></div>

          <div className='absolute bottom-[20rem] right-[20rem] xl:right-[50rem] bg-cyan-300 blur-lg w-[23px] h-[17rem] rotate-48 -mt-12'></div>
          <div className='absolute -bottom-[8rem] right-[25rem] xl:left-[40rem] bg-cyan-300 blur-lg w-[23px] h-[17rem] rotate-50 -mt-12'></div>
          <div className='absolute bottom-[28rem] right-[7rem] xl:right-[30rem] bg-cyan-300 blur-lg w-[4rem] h-[14rem] rotate-32 -mt-12'></div>
        </motion.div>
      </div>
      <div className='bg-red-600 h-[20rem] -rotate-5 md:-mt-10 w-[110%] -mt-1 -ml-4 lg:hidden'>
        <img className='object-cover w-full h-full' src="/assets/heroimg.avif" alt="" />
      </div>
    </div>
  )
}

export default HeroSection
