import React from "react"
import Grapes from "../assets/elements/grapes.png"

const Hero = () => {
  return (
    <>
      <div className="h-[2vh] pt-20">
        <h1>This is hero section</h1>
      </div>
      <img src={Grapes} alt="" className="fixed w-1/3  right-6 top-[-200px]" />
    </>
  )
}

export default Hero
