import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="h-20 flex justify-between px-32 items-center w-full bg-backgound">
      <div>Faiza einab</div>
      <div className="flex gap-16">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
      <div className="border border-gold rounded-3xl px-3 py-1 z-10">
        Contact us
      </div>
    </div>
  )
}

export default NavBar
