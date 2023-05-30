import React, { useEffect, useState } from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [theam, setTheam] = useState("system");
  const element = document.documentElement;
  const options = [
    {
      icons: <BsFillSunFill />,
      text: "light",
    },
    {
      icons: <BsFillMoonFill />,
      text: "dark",
    },
    {
      icons: <AiOutlineDesktop />,
      text: "system",
    },
  ];
  useEffect(() => {
    switch (theam) {
      case "dark":
        element.classList.add("dark");
        break;

      case "light":
        element.classList.remove("dark");
        break;

      default:
        break;
    }
  }, [theam]);
  return (
    <div className=" h-[10vh] flex justify-between px-20 py-14 dark:bg-slate-800 dark:text-white duration-100 ">
      <div className=" flex items-center flex-1 gap-x-5">
        <div className=" text-2xl">Maruf</div>
        <div className=" fixed left-48 duration-100 bg-slate-700 rounded ">
          {options?.map((option, index) => (
            <button
              onClick={() => setTheam(option.text)}
              key={index}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 px-1 ${
                theam === option.text && "text-sky-600"
              }`}
            >
              {option.icons}
            </button>
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="n-list ">
          <ul className=" flex gap-x-10 mr-10 text-lg ">
            <li className="hover:text-[#fca61f] transition hover:scale-105 duration-10">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#fca61f] transition hover:scale-105 duration-10">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-[#fca61f] transition hover:scale-105 duration-10">
              <a href="#">Experience</a>
            </li>
            <li className="hover:text-[#fca61f] transition hover:scale-105 duration-10">
              <a href="#">Portfolio</a>
            </li>
            <li className="hover:text-[#fca61f] transition hover:scale-105 duration-10">
              <a href="#">Testmonials</a>
            </li>
          </ul>
        </div>
        <div className="button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer shadow-lg dark:shadow shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-primary hover:border-2 duration-150">
          Contact us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
