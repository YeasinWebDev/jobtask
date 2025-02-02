import { motion } from "framer-motion"

const InnovationSec = () => {
    const card = [
        {
            img: '/assets/icon-1.svg',
            title: "Full-suite solutions",
            para: 'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.'
        },
        {
            img: "/assets/icon-2.png",
            title: 'Simplify the complex',
            para: 'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.'
        },
        {
            img: "/assets/icon-3.svg",
            title: 'Cutting-edge tech',
            para: 'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.'
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center mt-10 md:mt-20 lg:mt-0 pb-10'>
            <h6 className='text-[#1f80f0] font-bold tracking-widest text-sm md:text-[16px] mb-5'>OUR PHILOSOPHY</h6>
            <h2 className='text-[30px] md:text-[46px] lg:text-[56px]  font-semibold text-black  w-full text-center mb-8'>
                Human-centred innovation
            </h2>
            <div>
                <img className='hidden md:flex' src="/assets/inova.avif" alt="" />
                <img className='md:hidden flex' src="/assets/mobileInvo.avif" alt="" />
            </div>
            <div className='flex  justify-between gap-4 mt-20 flex-wrap w-full'>
                {card.map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }} 
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.4 }}
                        viewport={{ amount: 0.5 , once: true}}
                        key={i}
                        className='flex flex-col items-start gap-4 bg-[#f8fcff] p-3 rounded-xl w-[20rem] lg:w-[18rem] xl:w-[18rem] 2xl:w-[22rem]'>
                        <img src={item.img} alt="" />
                        <h3 className='text-[#212121] text-[16px] md:text-[18px] lg:text-[22px] font-semibold pb-1'>{item.title}</h3>
                        <p className='text-[#636363] text-sm md:text-[15px] font-medium'>{item.para}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default InnovationSec