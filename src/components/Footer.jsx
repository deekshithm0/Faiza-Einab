import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex mt-auto max-w-[125rem] justify-center items-center bg-customPurple">
      <div className="flex flex-col xs:p-2 lg:p-0 items-center w-full space-y-10">
        <div className="w-full flex justify-evenly mt-10 ">
          <div className="">
            <div className="space-y-3">
              <h1 id="contact" className="font-bold text-white ">
                Contact Us
              </h1>
              <p className="text-gray-300 xs:text-[11px] lg:text-[15px] font-lato">
                FAIZA EINAB DRINK <br />
                Kandathuvayal, Vellamunda post <br />
                Wayanad, Kerala, 670731
              </p>
              <p className=" text-gray-300 xs:text-[11px] lg:text-[15px] font-lato">Faiza5up@gmail.com</p>
              <p className="text-gray-300 xs:text-[11px] lg:text-[15px] font-lato">+91 9447 081 494</p>
            </div>
          </div>
          <div className="space-y-2 ">
            <h1 className="font-bold text-white">Quick Links</h1>
            <ul className="space-y-2 xs:text-[11px] lg:text-[15px] text-gray-300">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <div className="space-y-3">
              <h1 className="font-bold text-white">Follow Us</h1>
              <ul className="flex lg:space-x-4 lg:flex-row lg:space-y-0 xs:text-[11px] lg:text-[15px] text-gray-300 xs:flex xs:flex-col xs:space-x-0 xs space-y-2 ">
                <li>
                  <img src="\icons8-facebook-logo.svg" alt="" />
                  <p>Facebook</p>
                </li>
                <li>
                  <img src="\icons8-instagram-logo.svg" alt="" />
                  <p>instagram</p>
                </li>
                <li>
                  <img src="\icons8-twitter-logo.svg" alt="" />
                  <p>Twitter</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="bg-gray-300 w-1/2" />
        <p className="text-gray-300 pb-7 xs:text-[10px] lg:text-[13px]">
          © 2024 All Rights Reserved. Your Company Name
        </p>
      </div>
    </div>
  );
};

export default Footer;
