import React from "react"
import { Outlet } from "react-router-dom"
// import NavBar from "./NavBar"
import Grape from "../assets/elements/grapes.png"
import LeafeOutline from "../assets/elements/leaf outline.png"
import LeafFill from "../assets/elements/leaf fill.png"
import Spring from "../assets/elements/spring.png"

const GrapeImage = () => {
  return (
    <img
      src={Grape}
      alt="Grape"
      className="fixed blur w-[40rem]"
      style={{ transform: "translate(68rem, -22rem) rotate(-10deg)" }}
    />
  )
}

const LeafOutlineImg = (props) => {
  return (
    <img
      src={LeafeOutline}
      alt="LeafeOutline"
      className={`absolute blur-[2px] ${props.className}`}
      style={props.style}
    />
  )
}

const LeafFillImg = (props) => {
  return (
    <img
      src={LeafFill}
      alt="LeafFill"
      className={`absolute blur-[2px] ${props.className} `}
      style={props.style}
    />
  )
}

const SpringImg = (props) => {
  return (
    <img
      src={Spring}
      alt="springImage"
      className={`absolute blur-[2px] ${props.className} `}
      style={props.style}
    />
  )
}

const AppLayout = () => {
  return (
    <>
      <div className="bg-bacground h-screen relative flex flex-col ">
        {/* <NavBar /> */}
        <div className="h-screen bg-blu-100 overflow-hidden relativ">
          <Outlet />
          <div className="absolute flex justify-center items-center"></div>
        </div>
      </div>
      <div className="fixed inset-0 bg-background z-[-1] h-screen w-screen overflow-hidden">

        <LeafFillImg
          className="w-[4rem]"
          style={{ top: "20%", left: "80%", transform: "translate(10px, 20px) rotate(-120deg)" }}
        />
        <GrapeImage />
        <LeafOutlineImg
          className="w-[3rem]"
          style={{ top: "20%", left: "10%", transform: "translate(10px, 20px) rotate(15deg)" }}
        />
        <LeafOutlineImg
          className="w-[5rem]"
          style={{ top: "50%", left: "30%", transform: "translate(10px, 20px) rotate(-15deg)" }}
        />
        <LeafFillImg
          className="w-[2rem]"
          style={{ top: "30%", left: "50%", transform: "translate(10px, 20px) rotate(60deg)" }}
        />
        <LeafFillImg
          className="w-[4rem]"
          style={{ top: "90%", left: "40%", transform: "translate(10px, 20px) rotate(60deg)" }}
        />
        
        <LeafFillImg
          className="w-[4rem]"
          style={{ top: "80%", left: "70%", transform: "translate(10px, 20px) rotate(-60deg)" }}
        />

        <SpringImg 
          className="w-[3rem]"
          style={{top: "50%", left: "70%", transform: "translate(10px, 20px) rotate(20deg)"}}
        />
       
        <SpringImg 
          className="w-[2rem]"
          style={{top: "70%", left: "10%", transform: "translate(10px, 20px) rotate(20deg)"}}
        />



      </div>
    </>
  )
}

export default AppLayout

