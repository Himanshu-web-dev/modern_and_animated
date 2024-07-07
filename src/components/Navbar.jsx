import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full px-20 py-8 flex justify-between items-center max-[640px]:flex-col gap-5 bg-[#2a2c2d18] backdrop-filter backdrop-blur-md">
      <div className="logo border-l-2 font-extrabold text-green-500">HD_designs</div>
      <div className="menu quicksand-g text-white flex justify-center gap-5  max-sm:text-xs max-sm:w-[300px]">
        {["Services", "Our work", "About us", "Insights"].map((item, index) => (
          <a className="text-md capitalize font-semibold hover:text-[1.0.2rem] hover:text-green-500 transition ease-in-out duration-700">
            {item}
          </a>
        ))}
      </div>
      <div className="contact text-md capitalize font-semibold text-white max-[640px]:hidden hover:text-[1.0.2rem] hover:text-green-500 transition ease-in-out duration-700">
        Contact
      </div>
    </div>
  );
};

export default Navbar;
