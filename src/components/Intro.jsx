import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import vector1 from "../assets/img/Vector1.png";
import vector2 from "../assets/img/Vector2.png";
import boy from "../assets/img/boy.png";

const Intro = () => {
  return (
    <div className="intro px-20 py-14 flex h-[77vh] mt-6 gap-x-10 ">
      <div className=" i-left flex relative flex-1 flex-col gap-y-10 ">
        <div className="i-name">
          <h2 className=" text-5xl font-bold leading-[70px] text-primary">
            <span className=" text-gray-900">Hy! I am </span> <br /> Mohammad
            Maruf
          </h2>
          <p className=" mt-10 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            omnis, repellendus adipisci delectus maxime, aliquam ea minima
            doloribus, dignissimos distinctio nobis illum ratione inventore
            nemo.
          </p>
        </div>
        <div className="i-button button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-[#ff9100] hover:border-2 duration-150 w-[170px] text-center font-semibold">
          Hire Me
        </div>
        <div className=" flex items-center gap-x-9">
          <a href="https://github.com/Maruf200008" target="_">
            <AiFillGithub
              size={60}
              className=" text-primary cursor-pointer hover:scale-105 transition duration-150"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a/"
            target="_"
          >
            <AiFillLinkedin
              size={60}
              className=" text-primary cursor-pointer hover:scale-105 transition duration-150"
            />
          </a>
          <AiFillInstagram
            size={60}
            className=" text-primary cursor-pointer hover:scale-105 transition duration-150"
          />
        </div>
      </div>
      <div className=" i-right flex-1 relative">
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <div></div>
      </div>
    </div>
  );
};

export default Intro;
