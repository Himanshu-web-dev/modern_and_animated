import { easeInOut, motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-900 border-t-2 border-t-green-500"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
    >
      <div className="textStructure mt-40 ">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker px-20">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                   whileInView={{ width: "10vw" }}
                    transition={{ ease: easeInOut, duration: 1 }}
                    className="w-[9vw] h-[6vw] relative
                  top-[1vw] bg-green-500"
                  ></motion.div>
                )}
                <h1 className="uppercase tracking-tighter leading-[7vw] text-[8vw] font-sans font-extrabold text-white">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 capitalize pt-4 border-zinc-700 mt-32 flex max-md:flex-col max-md:gap-20 justify-around w-full items-center ">
        {[
          "For Public and private companies",
          "from the first pitch to the IPO",
        ].map((item, ind) => {
          return (
            <p className="text-md text-white leading-none tracking-tight  growtesk font-lighthover:text-[1.0.2rem] hover:text-green-500 transition ease-in-out duration-500">
              {item}
            </p>
          );
        })}
        <div className="flex items-center">
          <div className="border-2  mx-2 border-zinc-500 rounded-full text-white p-1 px-4 hover:bg-white hover:text-[1.0.2rem] hover:text-black transition ease-in-out duration-500 font-bold">
            Start the project
          </div>
          <div className="border-2 h-10 w-10  ease-in-out duration-500 border-zinc-500 rounded-full text-white flex items-center px-1.5  hover:bg-white hover:text-black hover:border-neutral-50">
            <GoArrowUpRight className=" text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
