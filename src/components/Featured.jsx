import React from "react";
import { easeIn, motion } from "framer-motion";
const Featured = () => {
  return (
    <div
      className="w-full py-40"
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl playwrite font-bold text-white max-sm:text-6xl">
          Featured Projects
        </h1>
      </div>
      <div className="outerCards px-20">
        <div className="cards w-full flex gap-10 mt-10 max-md:flex-col overflow-hidden">
          <motion.div
            className="card w-1/2 h-[70vh] rounded-xl max-md:w-full"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ ease: easeIn, duration: 1 }}
          >
            <div className="innerCard w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            className="card w-1/2 h-[70vh] rounded-xl max-md:w-full"
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ ease: easeIn, duration: 1 }}
          >
            <div className="innerCard w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover border-[1px] border-zinc-700"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
