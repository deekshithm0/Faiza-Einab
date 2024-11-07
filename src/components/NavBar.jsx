import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="h-20 flex justify-between px-32 items-center fixed top-0 w-full bg-bacground">
      <div>Faiza einab</div>
      <div className="flex gap-16">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Product</NavLink>
      </div>
      <div className="border border-gold rounded-3xl px-3 py-1">Contact us</div>
    </div>
  )
}

export default NavBar
