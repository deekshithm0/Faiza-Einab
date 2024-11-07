import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Grape from "../assets/elements/grapes.png"

const GrapeImage = () => {
  return (
    <img src={Grape} alt="" className="fixed w-1/3  right-6 top-[-200px]" />
  )
}

const AppLayout = () => {
  return (
    <div className="bg-background h-screen relative">
      {/* <GrapeImage /> */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
