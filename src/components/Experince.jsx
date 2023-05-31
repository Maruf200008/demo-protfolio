import React from "react";

const Experince = () => {
  return (
    <div className=" experince flex items-center justify-center gap-x-40 h-[50vh]  dark:bg-slate-900" id="Experience">
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg dark:border-4 dark:border-primary bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          8+
        </div>
        <h2 className=" text-xl text-gray-700 dark:text-white">Years</h2>
        <p className=" text-primary text-xl">Experince</p>
      </div>
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg dark:border-4 dark:border-primary bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          20+
        </div>
        <h2 className=" text-xl text-gray-700 dark:text-white">Completed</h2>
        <p className=" text-primary text-xl">Projects</p>
      </div>
      <div className="achivement flex flex-col items-center">
        <div className="circle w-[6rem] h-[6rem] shadow-lg dark:border-4 dark:border-primary bg-white rounded-full relative flex items-center justify-center text-3xl font-bold mb-6 before:rounded-full">
          5+
        </div>
        <h2 className=" text-xl text-gray-700 dark:text-white">Companies</h2>
        <p className=" text-primary text-xl">Work</p>
      </div>
    </div>
  );
};

export default Experince;
