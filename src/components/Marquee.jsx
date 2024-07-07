import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      className=" w-full py-6 bg-[#135B50] rounded-tr-3xl rounded-tl-3xl"
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
    >
      <div className=" border-t-2 border-b-2 py-2 border-zinc-100 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[8vw] text-white leading-none playwrite  font-semibold tracking-tight uppercase"
        >
          We are HD designs
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[8vw] text-white leading-none playwrite  font-semibold tracking-tight uppercase"
        >
          We are HD designs
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
