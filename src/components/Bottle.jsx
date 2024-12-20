import React from "react"
import BottleImg from "../assets/elements/bottle.png"

const Bottle = () => {
  return (
    <div className="sm:w-1/2  flex justify-end items-center max-sm:justify-center">
      <img
        src={BottleImg}
        alt="BottleImage"
        className="sm:w-10/12 object-contain w-full"
      />
    </div>
  )
}

export default Bottle
