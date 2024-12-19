import React from "react"
import BottleImg from "../assets/elements/bottle.png"

const Bottle = () => {
  return (
    <div className="sm:w-1/2  flex justify-end items-center max-sm:justify-center">
      <img
        src={BottleImg}
        alt="BottleImage"
        className="xs:w-10/12 xs:rotate-[28deg]  xs:-mt-[35rem]  xs:ml-[2rem] sm:rotate-0 sm:ml-0 sm:mt-0 lg:rotate-0 object-contain w-full"
      />
    </div>
  )
}

export default Bottle
