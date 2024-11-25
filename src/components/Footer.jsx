import React from "react";

const Footer = () => {
    return (
        <div className="max-w-[2000px] flex  justify-center items-center bg-customPurple" >
           <div className="max-w-[1575px] flex flex-col items-center space-y-10">
           <div className="flex justify-evenly mt-10  ">
                <div className="w-[450px] ">
                    <div className="space-y-3">
                        <h1 className="font-bold text-white ">About Us</h1>
                        <p className=" text-gray-300 font-lato">
                            we are a team dedicated to provide best <br /> grape juice across in india{" "}
                        </p>
                    </div>
                </div>
                <div className="w-[450px] ">
                    <div className="space-y-3">
                        <h1 className="font-bold text-white">Quick Links</h1>
                        <ul className="space-y-2 text-gray-300">
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[450px] ">
                    <div className="space-y-3">
                        <h1 className="font-bold text-white">Follow Us</h1>
                        <ul className="flex space-x-2  text-gray-300 ">
                            <li  >
                                <img src="./public\icons8-facebook-logo.svg" alt="" />
                                <p>Facebook</p>
                            </li>
                            <li>
                                <img src="public\icons8-instagram-logo.svg" alt="" />
                                <p>instagram</p>
                            </li>
                            <li>
                                <img src="./public\icons8-twitter-logo.svg" alt="" />
                                <p>Twitter</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="bg-gray-300 w-full" />
            <p className="text-gray-300 pb-7">© 2024 All Rights Reserved. Your Company Name</p>

           </div>
        </div>


    );
};

export default Footer;