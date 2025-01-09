import React from "react";
import GrapeBottleImage from "../assets/elements/Grape_Image.jpg";
// import Footer from "../components/Footer"

const About = () => {
  return (
    <div className="flex h-screen xs:my-36 lg:mt-3 justify-center items-center max-w-[125rem]  md:h-[100vh] xs:h-full xs:p-2 sm:p-3 lg:p-0 ">
      <div className=" w-full  max-w-[1400px] flex flex-col space-y-10 ">
        <div className="  max-w-[124rem] flex   flex-row xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col md:flex md:flex-row">
          <div className=" ml-44 xs:ml-0 w-fit lg:ml-44 leading-none  ">
            <h1 className="text-[10rem] xs:text-[6rem] sm:text-[9rem] md:text-[9rem] lg:text-[10rem] italiana-regular">
              ABOUT
            </h1>
            <div className=" space-x-6 flex items-center">
              <h1 className="text-[10rem] xs:text-[6rem] sm:text-[9rem] md:text-[9rem] lg:text-[10rem] italiana-regular">
                US
              </h1>
              <div className="">
                <p className=" lg:text-[18px] sm:text-[14px] md:text-[16px] xs:text-[10px] font-dm-sans text-[#582E7D] leading-tight">
                  Grape juice is refreshing,
                  <br />
                  antioxidant-rich drink
                  <br />
                  made from fresh-pressed grapes.
                  <br />
                  good delicious
                  <br />
                  Grapes taste good
                </p>
              </div>
            </div>
          </div>
          <div className="border-3 w-full border-black flex justify-center items-center ">
            <img
              className="w-[500px] h-[300px] rounded-xl"
              src={GrapeBottleImage}
              alt="Grape Bottle"
            />
          </div>
        </div>
        <div className="max-w-[124rem] md:flex md:flex-row xs:flex xs:flex-col-reverse xs:items-center xs:gap-5 sm:gap-5 md:gap-0 xs:pl-0 lg:pl-44 md:space-x-12">
          <div className="">
            <img
              className="w-[440px] h-[280px] rounded-xl"
              src={GrapeBottleImage}
              alt="Grape Bottle"
            />
          </div>
          <div className="flex w-fit items-center max-w-[40rem] overflow-hidden">
            <p className="lg:text-[18px] sm:text-[14px] md:text-[16px] xs:text-[10px] xs:p-2 sm:p-4 md:p-2 lg:p-0 font-dm-sans max-h-[20rem] text-[#582E7D] font-mono leading-tight">
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
              Grape juice is a sweet, refreshing drink made from pressed grapes,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
