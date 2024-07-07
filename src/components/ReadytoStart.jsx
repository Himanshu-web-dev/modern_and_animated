import React from "react";

const ReadytoStart = () => {
  return (
    <div
      className="w-100% h-[100vh]  p-10 bg-[#e9ff70] flex justify-center items-center flex-col"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
    >
      <h1 className="text-[8.5rem] min-w-[350px] max-lg:text-[6rem] max-md:text-[5rem]  max-w-[65vw] text-center border-double border-[#135B50] border-8 leading-snug font-bold uppercase growtest tracking-tight">
        ready to start the project ?
      </h1>
      <button className=" border-2 p-2 mt-2 rounded-full border-[#135B50] hover:text-[#e9ff70] hover:bg-[#135B50] font-bold text-xl transition duration-500 ease-in-out">
        Click Here to join
      </button>
    </div>
  );
};

export default ReadytoStart;
