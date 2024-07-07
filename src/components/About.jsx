import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div
      className="w-full py-20 px-10 growtesk bg-[#e9ff70] text-black min-h-screen"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
    >
      <h1 className="text-3xl font-light leading-8 p-10">
        HD designs is a strategic partner for fast-growing tech business that
        need to raise funds, sell products, explain complex ideas, hire great
        people
      </h1>
      <div className="second-sec border-t-2 border-b-2 border-[#135B50] mt-5 w-full p-10 flex max-md:flex-col">
        <div className="w-[50vw]">
          <h5>what you can expect:</h5>
        </div>
        <div className="w-[50vw]  text-md tracking-tight flex justify-around ">
          <div className="w-3/5">
            <p className="para1  ">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <br />
            <p className="para2">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="links w-2/5  flex justify-end items-center">
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="third-sec flex w-full py-10 rounded-br-3xl rounded-bl-3xl max-md:flex-col">
        <div className="w-1/2 mt-5">
          <h2 className="font-bold  text-7xl">Our approach :</h2> <br />
          <div className="btn text-2xl border-2 border-zinc-900 flex justify-around font-bold transition duration-300 ease-in-out rounded-full w-[250px] py-4 hover:bg-black hover:text-white">
            Read more
            <span className="bg-white rounded-full p-1 text-black">
              <GoArrowUpRight />
            </span>
          </div>
        </div>
        <div className="w-1/2 p-1 max-md:mt-10 max-md:w-[300px] ">
          <img
            className="rounded-xl w-full"
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
