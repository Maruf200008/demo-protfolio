import { motion } from "framer-motion";
import React from "react";
import myCv from "../assets/Mohammad-Maruf.pdf";
import glass from "../assets/img/glasses.png";
import heartEmoji from "../assets/img/heartemoji.png";
import humble from "../assets/img/humble.png";
import Card from "./Card";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div
      className=" services px-20 py-20 flex h-[150vh]  gap-x-10  dark:bg-slate-800"
      id="Services"
    >
      {/* left side */}
      <div className="awesome flex flex-col gap-y-10">
        <h2 className=" text-[4.5rem] font-bold leading-[80px] dark:text-white">
          My Awesome <br /> <span className=" text-primary"> Services</span>{" "}
        </h2>
        <p className=" text-lg text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          officia modi <br /> suscipit exercitationem dolore asperiores.
        </p>
        <a href={myCv} download={true}>
          <button className="i-button button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer dark:shadow shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-[#ff9100] hover:border-2 duration-150 w-[170px] text-center font-semibold">
            Download CV
          </button>
        </a>
      </div>

      {/* right side */}
      <div className="cards relative ">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          className=" left-[14rem] absolute"
        >
          <Card
            emoji={heartEmoji}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe, Adobe XD"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-10rem", top: "25rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
          className=" left-[-9rem] top-[20rem] absolute"
        >
          <Card
            emoji={glass}
            heading="Developer"
            detail="HTML, CSS, Tailwind CSS, JavaScript, React,  Node"
          />
        </motion.div>
        <div className=" left-[27rem] top-[35rem] absolute">
          <motion.div
            initial={{ right: "10rem", top: "25rem" }}
            whileInView={{ right: "3rem" }}
            transition={transition}
          >
            <Card
              emoji={humble}
              heading="UI/UX"
              detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
            />
          </motion.div>
          <div className="blur bg-[rgb(238 210 255)] absolute w-[22rem] h-[14rem] rounded-3xl bg-[#edd0ff] blur-[72px] top-[-20rem] left-[10rem] "></div>
          <div className="blur bg-[rgb(238 210 255)] absolute w-[30rem] h-[11rem] rounded-3xl bg-[#c1f5ff] blur-[72px] top-[13rem] left-[-80rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
