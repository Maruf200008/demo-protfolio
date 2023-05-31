import React from "react";

const Contact = () => {
  return (
    <div className=" contact-form px-20 py-24 gap-x-28 h-[90vh]  flex  justify-center dark:bg-slate-900 " id="Contact">
      <div className="w-left">
        <div className="awesome">
          <h2 className=" text-5xl font-bold dark:text-white">
            Get In Touch <br />{" "}
            <span className=" text-primary">Contact Me</span>
          </h2>
        </div>
      </div>
      <div className="w-right ">
        <form action="" className="flex flex-col gap-y-10">
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className=" focus:outline-none border-2 rounded-lg px-3 py-2 w-[500px] h-[60px] border-primary"
          />
          <input
            type="email"
            name="user_name"
            placeholder="email"
            className=" focus:outline-none border-2 rounded-lg px-3 py-2 w-[500px] h-[60px] border-primary"
          />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            className=" focus:outline-none border-2 rounded-lg px-3 py-2 w-[500px] h-[170px] border-primary"
          />
          <input id="Contact"
            type="submit"
            value="send"
            className="button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3  shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-[#ff9100] hover:border-2 duration-150 w-[170px] cursor-pointer text-center font-semibold mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
