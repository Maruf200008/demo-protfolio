import React from "react";

const Experince = () => {
  return (
    <div className=" experince flex items-center justify-center gap-x-40 h-[30vh] mb-14 ">
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          8+
        </div>
        <h2 className=" text-xl text-gray-700">Years</h2>
        <p className=" text-primary text-xl">Experince</p>
      </div>
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          20+
        </div>
        <h2 className=" text-xl text-gray-700">Completed</h2>
        <p className=" text-primary text-xl">Projects</p>
      </div>
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          5+
        </div>
        <h2 className=" text-xl text-gray-700">Companies</h2>
        <p className=" text-primary text-xl">Work</p>
      </div>
    </div>
  );
};

export default Experince;
