import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex flex-col items-center max-w-[2000px]">
      <div className="h-20 flex justify-between px-32 items-center w-full bg-backgound">
        <div>Faiza einab</div>
        <div className="w-96 flex items-center justify-center gap-16 font-shadowsIntoLight text-[#582E7D] font-bold tracking-widest">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/" >Product</NavLink>
        </div>
        <div className="border border-gold rounded-3xl px-3 py-1 z-10 text-white"> 
          Contact us
        </div>
      </div>
      <div className="h-0.5 w-10/12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </div>
  )
}

export default NavBar
