import React from "react";

const FloatingDiv = ({ crown, text1, text2 }) => {
  console.log(text1);
  console.log(text2);
  return (
    <div className="floatingDiv flex justify-between -ml-3 items-center bg-white shadow-lg rounded-xl  px-3 py-12 h-[4.5rem]">
      <img src={crown} alt="" className=" " />
      <h2 className=" text-lg ">
        {text1}
        <br />
        {text2}
      </h2>
    </div>
  );
};

export default FloatingDiv;
