import React from "react"
import Grapes from "../assets/elements/grapes.png"
import Bottle from "./Bottle"
import ProductImg1 from "../assets/elements/ProductImg1.png"
import ProductImg2 from "../assets/elements/ProductImg2.png"



const Hero = () => {
  return (

    <div class="h-screen bg-red-500 pt-10 flex flex-col overflow-y-scroll max-w-[2000px]">

      <div class="h-3/4 flex items-center justify-center bg-yellow-500">
        <div className="h-screen z-10 bg-cover bg-center flex flex-row items-center justify-center gap-80 " >
          <div className="flex flex-col pb-[170px] gap-4">
            <h1 className="font-italiana text-[6rem] leading-tight text-[#582E7D]">Simply <br /> Pure Simply <br /> Delecious</h1>
            <button className="w-40 h-12 ml-7 rounded-3xl bg-[#582E7D] text-white text-center">View Products</button>
          </div>
          <Bottle />
        </div>
      </div>

      <div className="h-[50rem] flex flex-col gap-4 items-center bg-green-500 ">

        <div className="h-1/2 w-full flex felx-row item-center justify-center gap-4 pt-10 w-fit bg-violet-500">
          <div><img
            src={ProductImg2}
            alt="productImg2"
            className="h-[20rem] w-[35rem]"
          /></div>
          <div className="flex flex-col text-end gap-4 pr-16 pt-16">
            <h2>ProductName 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="h-1/2 w-full flex felx-row justify-center items-center gap-4 bg-rose-400 ">
          <div className="flex flex-col text-start gap-4 pl-10">
            <h2>ProductName 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <img
            src={ProductImg1}
            alt="productImg1"
            className="h-[35rem] w-[25rem] "
          />
        </div>

      </div>

      <div className="h-2/4 bg-violet-700 ">

      </div>

    </div>

  )
}

export default Hero
