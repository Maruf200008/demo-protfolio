import React from "react";
import facebook from "../assets/img/Facebook.png";
import shopify from "../assets/img/Shopify.png";
import upwork from "../assets/img/Upwork.png";
import amazon from "../assets/img/amazon.png";
import fiverr from "../assets/img/fiverr.png";

const Works = () => {
  return (
    <div className="works px-20 py-14 flex h-[90vh] mt-10 gap-x-10  ">
      <div className="awesome flex flex-col gap-y-10">
        <h2 className=" text-[4.5rem] font-bold leading-[80px]">
          Works For All These <br />{" "}
          <span className=" text-primary"> Brands & Clients</span>{" "}
        </h2>
        <p className=" text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Voluptas, excepturi tempore, consequuntur quos cum unde necessitatibus{" "}
          <br /> dicta soluta repellat, tempora quis est ipsam nulla expedita
          ullam <br /> accusantium nemo alias voluptatibus.
        </p>

        <button className="i-button button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-[#ff9100] hover:border-2 duration-150 w-[170px] text-center font-semibold">
          Hire Me
        </button>
      </div>
      {/* right side */}
      <div className=" w-right relative">
        <div className="w-mainCircle left-[9rem] relative w-[22rem] h-[22rem] rounded-full shadow-2xl top-[2rem] bg-white">
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="" />
          </div>
          {/* bacground circle */}
          <div className="w-backCircle absolute h-[17rem] w-[17rem] rounded-full -z-10 blueCircle bg-[#194988] left-[10rem] top-[-2rem]"></div>
          <div className="w-backCircle absolute h-[17rem] w-[17rem] rounded-full -z-10 blueCircle bg-[#f5c32c] left-[10rem] top-[8rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
