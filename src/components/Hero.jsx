import React from "react"
import { motion } from "framer-motion"

import Bottle from "./Bottle"
import ProductCard from "./ProductCard"

import productimgs from "../assets/elements/bottle.png"
import ProductImg1 from "../assets/elements/ProductImg1.png"
import ProductImg2 from "../assets/elements/ProductImg2.png"
import BabyHyper from "../assets/elements/BabyHyper.png"
import MetroHyper from "../assets/elements/MetroHyper.png"
import RealHyperMarket from "../assets/elements/RealHyperMarket.png"
import NestoLogo from "../assets/elements/NESTOLOGO.png"
import GreenHyperMarket from "../assets/elements/GreensHyperMarket.png"


const Hero = () => {

  const imageVariants = {
    hidden: { x: "10%" },
    visible: {
      x: ["1500%", "-1000%"],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity
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

  return (

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-[100vh] flex flex-col overflow-y-scroll hideScrollBar max-w-[2000px]">

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className=" h-[50rem] flex items-center justify-center ">
        <div className="h-screen z-10 bg-cover bg-center flex flex-row items-center justify-center gap-80 " >
          <div className="flex flex-col pb-[170px] gap-4">
            <h1 className="font-italiana text-[6rem] leading-tight text-[#582E7D]">Simply <br /> Pure, Simply <br /> Delecious!</h1>
            <button className="w-40 h-12 ml-7 rounded-3xl bg-[#582E7D] text-white text-center">View Products</button>
          </div>
          <Bottle />
        </div>
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="h-[100rem] flex flex-col items-center pt-10">

        <div className="h-1/3 w-full flex felx-row item-center justify-center gap-4 pr-40">
          <div><img
            src={ProductImg2}
            alt="productImg2"
            className="h-[20rem] w-[35rem]"
          /></div>
          <div className="flex flex-col text-end gap-4 pr-16  bg-[#582E7D] h-[18rem] w-[55rem] rounded-2xl bg-opacity-20">
            <h2 className="font-shadowsIntoLight font-bold text-[50px] pt-3 pb-5 text-[#582E7D]">ProductName 2</h2>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="h-1/3 w-full flex felx-row justify-center items-center gap-4  ">
          <div className="flex flex-col text-start gap-4 pl-16 bg-gold h-[18rem] w-[55rem] rounded-2xl bg-opacity-20">
            <h2 className="font-shadowsIntoLight font-bold text-[50px] pt-3 pb-5 text-[#582E7D]">ProductName 1</h2>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <img
            src={ProductImg1}
            alt="productImg1"
            className="h-[35rem] w-[25rem] "
          />
        </div>

        <div className="h-[50rem] w-full flex flex-col gap-5 justify-center items-center">
          <div className="h-1/6 w-full flex items-cneter justify-center ">
            <h2 className="font-semibold text-[30px] text-[#582E7D] font-italiana">AVAILABLE IN </h2>

          </div>
          <div className="h-3/4 w-full flex flex-row items-center justify-center gap-36 ">
            <ProductCard productImg={productimgs} ml="250ml" />
            <ProductCard productImg={productimgs} ml="500ml" />
            <ProductCard productImg={productimgs} ml="750ml" />
          </div>
          <div className="h-40 w-52 font-semibold font-italiana text-[#582E7D] text-[30px] flex justify-center items-center">
            <h4>Our Clients</h4>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden h-72 pb-24  flex flex-row w-full bg-gradient-to-r from-transparent via-gold-600 to-transparent">
            
            <motion.div variants={imageVariants} className="w-28 h-28 absolute">
              <img src={BabyHyper} alt="client1" className="w-full h-full" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-28 h-28 absolute">
              <img src={MetroHyper} alt="client2" className="w-full h-full" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-28 h-28 absolute">
              <img src={RealHyperMarket} alt="client3" className="w-full h-full" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-24 h-20 absolute">
              <img src={NestoLogo} alt="client4" className="w-full h-full" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-28 h-24 absolute">
              <img src={GreenHyperMarket} alt="client5" className="w-full h-full" />
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

    </motion.div>

  )
}

export default Hero
