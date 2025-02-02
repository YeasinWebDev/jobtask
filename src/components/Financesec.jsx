import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Financesec = () => {
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

    return (
        <div className='relative flex items-start justify-between flex-col lg:flex-row pt-18 lg:pb-40 w-full]'>
            <div className=' lg:w-[55%] w-full'>
                <h6 className='text-[#1f80f0] font-bold tracking-widest text-sm md:text-[16px]'>POWERING THE FUTURE OF FINANCE</h6>
                <h2 className='text-[30px] md:text-[46px] lg:text-[56px]  font-semibold text-black leading-8 md:leading-15 pt-5'>
                    Uncovering new ways to delight customers
                </h2>
                <h6 className='font-semibold py-7'>
                    AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
                </h6>
                <h6>
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                </h6>
            </div>
            <div className='relative w-full lg:w-[50%] flex items-center lg:justify-end justify-center pt-10 lg:pt-0'>
                {/* <img className="absolute bottom-0 left-[10rem] rotate-180 z-10 " src='/assets/frames/carousel-image-frame-2.png' alt="image" /> */}
                <motion.img className="absolute lg:-top-40 -top-20 -z-10 " src='/assets/frames/carousel-image-frame-1.svg' alt="image" style={{ x: translateX1, y: translateY1 }} />
                <img className="absolute bottom-0 md:left-36 left-4" src='/assets/frames/founder/2.svg' alt="image" />
                <motion.img initial={{ y: 0 }} animate={{ y: 40 }} transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'reverse',
                }} className='absolute top-10 xl:-right-10 2xl:-right-1 lg:-right-4 md:right-32 -right-4' src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format" alt="" />
                <motion.img initial={{ y: -20 }} animate={{ y: 10 }} transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'reverse',
                }} className='absolute top-24 2xl:left-20 xl:left-2 lg:left-10 md:left-32 -left-4' src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format" alt="" />
                <motion.img initial={{ y: 0 }} animate={{ y: 20 }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'reverse',
                }} className='absolute  md:top-[12rem] xl:left-[11vw] lg:left-[10rem] md:left-[14rem] left-16' src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format" alt="" />
                <img className=' xl:h-[500px] 2xl:w-[400px] lg:w-[400px] md:w-[400px] w-[90%] object-cover rounded-sm shadow-2xl mr-0 2xl:mr-10 ' src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format" alt="" />
            </div>
            <div className="bg-gradient-to-b from-white to-[#F1F7FE] h-[30vh] absolute w-[130%] lg:w-[120%] xl:w-[130%] bottom-24 lg:bottom-20 xl:bottom-20 2xl:bottom-16 -left-[400px] -rotate-8 -z-10 hidden md:flex"></div>
        </div>
    )
}

export default Financesec