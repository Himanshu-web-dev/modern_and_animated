import React, { useEffect, useState } from "react";

export const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
      <div className="eyes w-full  h-screen flex items-center justify-center">
        <div
          className="w-[100vw] h-[100vh] relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] "
          data-scroll
          data-scroll-section
          data-scroll-speed="-.2"
        ></div>
        <div className="absolute w-1/2 h-1/4 right-1/2 translate-x-1/2 flex justify-evenly items-center  cursor-pointer ">
          <div className="eye-circle  w-[12vw] h-[12vw] max-md:w-[16vw] max-md:h-[16vw]  bg-zinc-100 rounded-full flex justify-center items-center ">
            <div className="innerEye relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                className="line  w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="innerWhite w-10 h-10 max-md:w-6 max-md:h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="eye-circle  w-[12vw] h-[12vw] max-md:w-[16vw] max-md:h-[16vw] bg-zinc-100 rounded-full flex justify-center items-center ">
            <div className="innerEye relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                className="line  w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="innerWhite w-10 h-10 max-md:w-6 max-md:h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
