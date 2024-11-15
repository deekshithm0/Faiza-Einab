import React from "react"
import Grapes from "../assets/elements/grapes.png"
import Bottle from "./Bottle"

const Hero = () => {
  return (
    <div className="h-screen z-10 bg-cover bg-center flex flex-row items-center justify-center gap-80 " >
      <div className="flex flex-col pb-[170px] gap-4">
        <h1 className="font-italiana text-[6rem] leading-tight text-[#582E7D]">Simply <br /> Pure Simply <br /> Delecious</h1>
        <button className="w-40 h-12 ml-7 rounded-3xl bg-[#582E7D] text-white text-center">View Products</button>
      </div>
      <Bottle />
    </div>
  )
}

export default Hero
