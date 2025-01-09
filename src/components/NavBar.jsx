import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className=" max-w-[125rem] flex flex-col items-center">
      <div className="h-20 flex justify-between px-32 max-md:px-10 max-sm:hidden items-center w-full">
        <div>Faiza einab</div>
        <div className="w-96 flex items-center justify-center gap-16 font-shadowsIntoLight text-[#582E7D] font-bold tracking-widest">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Products">Product</NavLink>
        </div>
        <div className="border border-yellow-500 text-yellow-500 rounded-3xl px-3 py-1 z-10">
          <a href="#contact">Contact us</a>
        </div>
      </div>
      <div className="sm:hidden h-20 flex w-full justify-between px-10 items-center bg-backgound">
        <div>Faiza einab</div>
        <CiMenuFries
          size={"30px"}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      {menuOpen && (
        <div className="sm:hidden absolute top-20 w-auto right-0 bg-white p-5 shadow-lg z-50">
          <AiOutlineClose
            size={"24px"}
            onClick={toggleMenu}
            className="cursor-pointer ml-auto mb-5"
          />
          <div className="flex flex-col gap-5 font-shadowsIntoLight bg-whte text-[#582E7D] font-bold tracking-widest">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/Products" onClick={toggleMenu}>
              Product
            </NavLink>
            <a href="#contact" onClick={toggleMenu}>
              Contact us
            </a>
          </div>
        </div>
      )}
      <div className="h-0.5 w-10/12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </div>
  )
}

export default NavBar
