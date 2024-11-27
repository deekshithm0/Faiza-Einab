import React from "react";
import GrapeBottleImage from "../assets/elements/Grape_Image.jpg";

const About = () => {
    return (
        <div className="space-y-2 max-w-[2000px] h-screen flex items-center justify-center">
            <div className=" w-full  max-w-[1400px] flex flex-col space-y-10 ">
                <div className="  max-w-[124rem] flex flex-row">
                    <div className=" ml-44 leading-none ">
                        <div className="">
                            <h1 className="text-[10rem] italiana-regular">ABOUT</h1>
                        </div>
                        <div className=" space-x-6 flex items-center">
                            <div className="">
                                <h1 className="text-[10rem] italiana-regular ">US</h1>
                            </div>
                            <div className="">
                                <p className=" text-[18px] font-dm-sans text-[#582E7D] leading-tight">
                                    Grape juice is refreshing,
                                    <br />
                                    antioxidant-rich drink
                                    <br />
                                    made from fresh-pressed grapes.good delicious
                                    <br />
                                    Grapes taste good
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-3  w-full border-black flex justify-center items-center ">
                        <img className="w-[500px] h-[300px] rounded-xl" src={GrapeBottleImage} alt="Grape Bottle" />
                    </div>
                </div>
                <div className=" flex pl-44 space-x-12">
                    <div className=" ">
                        <img className="w-[440px] h-[280px] rounded-xl" src={GrapeBottleImage} alt="Grape Bottle" />
                    </div>
                    <div className="flex items-center ">
                        <p className="text-[18px] font-dm-sans text-[#582E7D] font-mono leading-tight">
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                            Grape juice is a sweet, refreshing drink made from pressed grapes, <br />
                        </p>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default About;
