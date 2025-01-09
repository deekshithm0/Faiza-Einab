import React from "react";
import { motion } from "framer-motion";

import Bottle from "./Bottle";
import ProductCard from "./ProductCard";

import productimgs from "../assets/elements/bottle.png";
import ProductImg1 from "../assets/elements/ProductImg1.png";
import ProductImg2 from "../assets/elements/ProductImg2.png";
import BabyHyper from "../assets/elements/BabyHyper.png";
import MetroHyper from "../assets/elements/MetroHyper.png";
import RealHyperMarket from "../assets/elements/RealHyperMarket.png";
import NestoLogo from "../assets/elements/NESTOLOGO.png";
import GreenHyperMarket from "../assets/elements/GreensHyperMarket.png";

const Hero = () => {
  const imageVariants = {
    hidden: { x: "10%" },
    visible: {
      x: ["1500%", "-1000%"],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/7034002989", "_blank");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=" flex flex-col space-y-10  overflow-y-scroll hideScrollBar max-w-full"
    >
      {/* 0 */}
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className=" flex items-center  justify-center"
      >
        <div className=" sm:h-auto overflow-hidden xs:ml-0  z-10 bg-cover bg-center flex xs:gap-3 lg:gap-64 max-sm:flex-col items-center justify-evenly px-16">
          <div className=" flex flex-col gap-4 xs:space-y-72 sm:space-y-0 py-5">
            <h1 className="font-italiana w-full text-[3rem] xs:mr-24 sm:mr-0 max-sm:h-full xs:text-[2.3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[5rem] leading-tight text-[#582E7D]">
              Simply <br />
              Pure, Simply
              <br /> Delecious!
            </h1>
            <div className=" xs:flex xs:justify-center sm:justify-start">
              <button
                className="w-40 h-12 xs:z-10 rounded-3xl bg-[#582E7D] text-white text-center xs:m-[59px]"
                onClick={openWhatsapp}
              >
                Get in touch
              </button>
            </div>
          </div>
          <Bottle />
        </div>
      </motion.div>

      {/* product 1 , 2 */}
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="flex flex-col  items-center "
      >
        <div className="w-fit xs:space-y-6 sm:space-y-0 ">
          <div className="h-1/3 w-full xs:p-2  overflow-hidden flex felx justify-center items-center sm:gap-4 xs:gap-0 md:gap-24 ">
            <div className="flex flex-col text-start xs:ml-5 xs:pl-2 xs:p-2 sm:gap-0 md:gap-4 md:pl-16 bg-[#6ef634] lg:h-[18rem] lg:w-[55rem] sm:h-[18rem] sm:w-[30rem] rounded-2xl bg-opacity-20">
              <h2 className="font-shadowsIntoLight xs:whitespace-nowrap font-bold lg:text-[50px] md:text-[42px] sm:text-[35px] xs:text-[25px] xs:pt-1 pb-5 text-[#582E7D]">
                ProductName 1
              </h2>
              <p className="font-medium w-fit xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xs:leading-tight sm:leading-tight md:leading-none ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam,
                <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
                <br />
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img
              src={ProductImg1}
              alt="productImg1"
              className="lg:h-[35rem] lg:w-[25rem] md:h-[28rem] md:w-[20rem] sm:h-96 sm:w-[18rem] xs:h-64 xs:w-64 "
            />
          </div>
          <div className="h-1/3 w-full  flex items-center justify-around gap-4 xs:pr-4 sm:pr-20 md:pr-20">
            <img
              src={ProductImg2}
              alt="productImg2"
              className=" lg:h-[23rem] lg:w-[32rem] md:h-[28rem] md:w-[20rem] sm:h-96 sm:w-[40rem] xs:h-1/2 xs:w-1/2 "
            />
            <div className="flex flex-col sm:gap-4 sm:pr-2 xs:p-2 md:pr-16 bg-violet-600 xs:pr-2 md:h-[18rem] md:w-[55rem] rounded-2xl bg-opacity-20 items-end">
              <h2 className="font-shadowsIntoLight xs:whitespace-nowrap font-bold lg:text-[50px] md:text-[42px] sm:text-[35px] xs:text-[25px] xs:pt-1 pt-3 pb-5 text-[#582E7D]">
                ProductName 2
              </h2>
              <p className="font-medium w-fit xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xs:leading-tight sm:leading-tight md:leading-none text-end ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, <br />
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. <br /> Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" w-full flex flex-col space-y-16 gap-5 justify-center items-center">
          <div className="xs:space-y-10 p-2 mt-10 sm:space-y-16 flex flex-col items-center">
            <div className="h-1/6 w-full flex items-cneter justify-center ">
              <h2 className="font-semibold text-[30px] text-[#582E7D] font-italiana">
                AVAILABLE IN
              </h2>
            </div>
            <div className="h-3/4 w-full xs:space-y-4 sm:flex sm:flex-row sm:items-center sm:gap-4 md:gap-20 lg:gap-36 ">
              <ProductCard productImg={productimgs} ml="250ml" />
              <ProductCard productImg={productimgs} ml="500ml" />
              <ProductCard productImg={productimgs} ml="750ml" />
            </div>
            <div className="h-1 w-10/12 mt-3 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-6">
            <div className=" font-semibold font-italiana text-[#582E7D] text-[30px] ">
              <h4>Our Clients</h4>
            </div>
            <div className=" flex flex-row w-full pb-20 items-center  ">
              <div className="lg:grid lg:grid-cols-6 lg:gap-10 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 xs:p-2 xs:gap-4 lg:p-4 mx-auto">
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={MetroHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={RealHyperMarket}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={NestoLogo}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={GreenHyperMarket}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex itmes-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex itmes-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex itmes-center justify-center">
                  <img
                    src={BabyHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={MetroHyper}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="sm:h-24 sm:w-40 xs:h-20 xs:w-36 bg-gray-400 bg-opacity-15 rounded-xl flex items-center justify-center">
                  <img
                    src={RealHyperMarket}
                    alt="Client1"
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
