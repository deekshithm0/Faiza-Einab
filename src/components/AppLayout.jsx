import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Grape from "../assets/elements/grapes.png"

const GrapeImage = () => {
  return (
    <img
      src={Grape}
      alt=""
      className="fixed w-[40rem]"
      style={{ transform: "translate(68rem, -22rem) rotate(-10deg)" }}
    />
  )
}

const AppLayout = () => {
  return (
    <>
      <div className="bg-bacground h-screen relative">
        {/* <GrapeImage /> */}
        <NavBar />
        <div className="h-screen bg-blu-100 overflow-hidden relativ">
          <Outlet />
          <div className="absolute flex justify-center items-center">full</div>
        </div>
        <Footer />
      </div>
      <div className="fixed inset-0 bg-background z-[-1] h-screen w-screen blur overflow-hidden">
        <GrapeImage />
      </div>
    </>
  )
}

export default AppLayout
