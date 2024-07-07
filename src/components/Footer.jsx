import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="w-full h-screen mt-20 gap-10 bg-zinc-900 py-20 px-[70px] flex max-sm:flex-col"
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
    >
      <div className="leftContainer w-1/2 uppercase md:text-7xl text-white font-extrabold flex justify-around gap-80 max-md:gap-12 max-sm:gap-10 max-sm:text-4xl  max-md:flex-col  flex-col">
        <div className="heading">
          <h1>EYE-</h1>
          <h1>Opening</h1>
        </div>
        <div className="mylogo w-[70px] h-[70px] max-sm:w-[45px] max-sm:h-[45px]">
          <img
            className="bg-cover"
            src="https://static.vecteezy.com/system/resources/previews/004/283/842/original/hd-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg"
            alt="logo"
          />
          <h4 className="credits text-sm max-sm:text-xs ">&copy;HD_designs</h4>
        </div>
      </div>
      <div className=" rightcontainer w-1/2  text-white flex flex-col">
        <div className="presentation md:text-center w-full h-1/4 font-extrabold md:text-5xl lg:text-7xl sm:text-2xl underline">
          Presentation
        </div>
        <div className="links w-full h-full  flex p-2 growtesk tracking-tighter">
          <div className="left w-full flex flex-col gap-14 ">
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Github</li>
              <li>Behance</li>
            </ul>
            <ul>
              <li>Bhaniyawala, dehradun</li>
              <li>Uttrakhand, pin-248001</li> <br />
              <li>30 rispana, khav gali</li>
              <li>Mumbai, India</li>
            </ul>

            <ul>
              <li className="">
                <p>
                  <MdEmail /> designsbyHdpvtltd@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className="right w-1/3 flex justify-center items-center  growtesk tracking-tighter underline max-md:items-stretch max-md:mx-20 ">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Our Work</li>
              <li>About us</li>
              <li>Insights</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
