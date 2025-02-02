import { useMotionValue, useSpring, useTransform, motion, useInView } from 'framer-motion';
import React, { useEffect } from 'react'
import { MdChevronRight } from 'react-icons/md'

const LegacySec = () => {
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
    <section className="!overflow-hidden h-[500px] bg-gradient-to-r from-indigo-600 to-blue-500 rotate-8 -bottom-36 w-[150%] md:w-[120%] -left-20 relative">

      {/* line-1 */}
      <motion.div
        style={{ x: translateX1, y: translateY1 }}
        className='hidden lg:flex'
      >
        <div className='absolute left-[20rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[7rem] h-[60rem] rotate-20 -mt-20'></div>
        <div className='absolute left-[10rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[5rem] h-[10rem] rotate-20 -mt-10'></div>
        <div className='absolute left-[16rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[6rem] h-[21rem] rotate-20 -mt-14'></div>

        <div className='absolute right-[23rem] xl:right-[38rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[10rem] h-[60rem] rotate-32 -mt-36'></div>
        <div className='absolute right-[25rem] xl:right-[50rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[5rem] h-[12rem] rotate-32 -mt-16'></div>
        <div className='absolute right-[8rem] xl:right-[44rem] bg-linear-to-bl from-[#1C7CEC] to-[#004CBA] opacity-55 w-[6rem] h-[22rem] rotate-32 -mt-20'></div>
      </motion.div>

      {/* line-2 */}
      <motion.div
        style={{ x: translateX2, y: translateY2 }}
        className='hidden lg:flex'
      >
        <div className='absolute left-[8rem] bg-cyan-300 blur-lg w-[2rem] h-[15rem] rotate-20 -mt-12'></div>
        <div className='absolute left-[15rem] bg-cyan-300 blur-lg w-[2rem] h-[20rem] rotate-20 -mt-12'></div>
        <div className='absolute left-[35rem] bg-cyan-300 blur-lg w-[5rem] h-[25rem] rotate-20 -mt-12'></div>
        <div className='absolute left-[22rem] bg-cyan-300 blur-2xl w-[12rem] h-[12rem] rotate-20 rounded-full -mt-10'></div>

        <div className='absolute right-[20rem] xl:right-[48rem] bg-cyan-300 blur-lg w-[23px] h-[17rem] rotate-32 -mt-12'></div>
        <div className='absolute right-[25rem] xl:right-[54rem] bg-cyan-300 blur-lg w-[23px] h-[17rem] rotate-32 -mt-12'></div>
        <div className='absolute right-[15rem] xl:right-[38rem] bg-cyan-300 blur-lg w-[23px] h-[22rem] rotate-32 -mt-12'></div>
        <div className='absolute right-[7rem] xl:right-[20rem] bg-cyan-300 blur-lg w-[5rem] h-[22rem] rotate-32 -mt-12'></div>
      </motion.div>
      
      <div className="relative z-10 text-start ml-[6rem] pt-14 md:pt-20 xl:pt-16 md:ml-[5rem] lg:ml-[5rem] xl:ml-[18rem] 2xl:ml-[20rem] -rotate-8 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Legacy no longer</h1>
        <p className="mt-4 text-sm lg:text-lg w-[70%] md:w-full">Talk to us to find out how we can transform your organisation for the future</p>

        <h3 className="group flex items-center justify-center font-semibold text-lg text-white rounded-sm py-2 px-3 bg-[#FE8B53] hover:bg-amber-600 transition-all duration-300 cursor-pointer lg:w-fit mt-5 md:w-[12rem] w-[20rem]">
          Contact Us
          <span className="icon ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
            <MdChevronRight size={25} />
          </span>
        </h3>
      </div>
    </section >

  )
}

export default LegacySec