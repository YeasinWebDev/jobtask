import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 600) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };


        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    console.log(scrolled)


    return (
        <nav className={`fixed px-6 py-4 flex justify-between items-center w-full z-[99] backdrop-blur-lg transition-colors duration-300 ${scrolled ? "bg-blue-600" : "bg-transparent"}`}>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 w-full mx-5 xl:mx-[18%] justify-between">
                <img className="w-32" src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format" alt="" />
                <div className="flex items-center gap-10 ">
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`text-white  flex items-center gap-0 font-medium text-lg cursor-pointer`}
                        >
                            Solutions <IoIosArrowDown />
                        </motion.button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 transition-opacity duration-300">
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] !border-[#f2f2f2]">
                                    AnyCaaS
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] !border-[#f2f2f2]">
                                    AnyBaaS
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    AnyPaaS
                                </Link>
                            </div>
                        )}
                    </div>
                    <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }} >
                        <Link href="#" className="font-medium text-lg text-white">
                            Services
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }} >
                        <Link href="#" className="font-medium text-lg text-white flex overflow-hidden flex-col">
                            About Us
                        </Link>
                    </motion.div>
                    <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
                        className="flex items-center gap-1 border p-3 rounded-full text-white border-white cursor-pointer"
                    >
                        <FaGlobe /> EN <IoIosArrowDown />
                    </motion.button>
                </div>
                <div>
                    <motion.h3 
                    whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
                    className="group flex items-center justify-center font-medium text-xl  border-[1px] rounded-sm py-2 px-3 hover:bg-white transition-all duration-300 hover:text-blue-400 cursor-pointer text-white">
                        Contact Us
                        <span className="icon ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                            <MdChevronRight size={25} />
                        </span>
                    </motion.h3>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center justify-between w-full h-[13vw] md:h-[7vw]">
                <img className="w-32" src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format" alt="" />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 w-full h-[100vh] bg-blue-700 z-50 flex flex-col items-center space-y-6 pt-20 text-white transform ${isMenuOpen ? "-translate-x-20" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden pl-10`}
            >
                <Link href="#" className="text-lg hover:text-gray-300">
                    Solutions
                </Link>
                <Link href="#" className="text-lg hover:text-gray-300">
                    Services
                </Link>
                <Link href="#" className="text-lg hover:text-gray-300">
                    About Us
                </Link>

                {/* Language Selector */}
                <button className="text-white flex items-center gap-1 border border-white px-3 py-1 rounded-md hover:bg-white hover:text-blue-600">
                    <FaGlobe /> EN <IoIosArrowDown />
                </button>

                {/* Contact Button */}
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-white hover:bg-blue-600 hover:text-white">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
