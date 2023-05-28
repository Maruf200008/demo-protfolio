import React from "react";
import glass from "../assets/img/glasses.png";
import heartEmoji from "../assets/img/heartemoji.png";
import humble from "../assets/img/humble.png";
import Card from "./Card";

const Services = () => {
  return (
    <div className=" services px-20 py-14 flex h-[90vh] mt-10 gap-x-10 mb-40">
      {/* left side */}
      <div className="awesome flex flex-col gap-y-10">
        <h2 className=" text-[4.5rem] font-bold leading-[80px]">
          My Awesome <br /> <span className=" text-primary"> Services</span>{" "}
        </h2>
        <p className=" text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          officia modi <br /> suscipit exercitationem dolore asperiores.
        </p>
        <button className="i-button button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-[#ff9100] hover:border-2 duration-150 w-[170px] text-center font-semibold">
          Download CV
        </button>
      </div>

      {/* right side */}
      <div className="cards relative ">
        <div className=" left-[14rem] absolute">
          <Card
            emoji={heartEmoji}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe, Adobe XD"
          />
        </div>
        <div className=" left-[-9rem] top-[20rem] absolute">
          <Card
            emoji={glass}
            heading="Developer"
            detail="HTML, CSS, Tailwind CSS, JavaScript, React,  Node"
          />
        </div>
        <div className=" left-[27rem] top-[25rem] absolute">
          <Card
            emoji={humble}
            heading="UI/UX"
            detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
          />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Services;
