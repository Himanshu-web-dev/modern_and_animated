import { easeInOut, motion } from "framer-motion";
import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Cards = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<RiStarSFill key={i} />);
  }
  return (
    <div className="w-full h-screen bg-zinc-300 flex max-md:flex-col gap-5 items-center py-20 px-10 text-white">
      <div className="cardContainer w-1/2 h-1/2 max-md:w-full">
        <motion.div
          initial={{ y: -80 }}
          whileInView={{ y: 0 }}
          transition={{ ease: easeInOut, duration: 1 }}
          className="card relative w-full h-full rounded-xl bg-[#135B50] playwrite flex items-center justify-center"
        >
          <h1 className="text-white font-bold"> HD designs</h1>
          <span className="first absolute bottom-5 left-5 text-sm p-3 border-[1px] rounded-full flex items-center justify-center">
            &copy;2018-2024
          </span>
        </motion.div>
      </div>
      <div className="cardContainer w-1/2 h-1/2 flex gap-5 max-md:flex-col max-md:w-full max-md:h-full">
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ ease: easeInOut, duration: 1 }}
          className="card relative w-full bg-zinc-800 rounded-xl playwrite flex items-center justify-center flex-col max-md:h-full"
        >
          <h1 className="font-bold">Clutch</h1>
          <div className="stars flex text-yellow-400">{stars}</div>
          <span className="first absolute bottom-5 left-5 text-sm p-3 border-[1px] rounded-full flex items-center justify-center">
            5 star ratings by clutch
          </span>
        </motion.div>
        <motion.div
          initial={{ y: -80 }}
          whileInView={{ y: 0 }}
          transition={{ ease: easeInOut, duration: 1 }}
          className="card relative w-full bg-zinc-800 rounded-xl playwrite flex items-center justify-center max-md:w-full max-md:h-full flex-col "
        >
          <img
            className="w-12"
            src="https://i.pinimg.com/originals/9a/ae/4a/9aae4aa197faf5148d02bbd8ff9325a9.png"
            alt="academyLogo"
          />
          <h1 className="font-bold"> XYZ Academy</h1>
          <span className="first absolute bottom-5 left-5 text-sm p-3 border-[1px] rounded-full flex items-center justify-center">
            XYZ Academy Alumni
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
