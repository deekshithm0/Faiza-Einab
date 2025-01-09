import React from "react"
import BottleImg from "../assets/elements/bottle.png"

const Bottle = () => {
  return (
    <div className="sm:w-1/2 flex justify-end items-center max-sm:justify-center">
      <img
        src={BottleImg}
        alt="BottleImage"
        className="lg:w-[25rem] xs:w-11/12 xs:rotate-[28deg]  xs:-mt-[45rem]  xs:ml-[2rem] sm:rotate-0 sm:ml-0 sm:mt-0 lg:rotate-0 object-contain "
      />
    </div>
  )
}

export default Bottle
