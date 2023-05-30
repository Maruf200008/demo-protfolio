import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../assets/img/profile1.jpg";
import profile2 from "../assets/img/profile2.jpg";
import profile3 from "../assets/img/profile3.jpg";
import profile4 from "../assets/img/profile4.jpg";
const Testmonials = () => {
  const clients = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, accusamus blanditiis. Quaerat consequatur sit ab fugiat eveniet similique provident dolores, deserunt explicabo natus ipsum error reprehenderit quis est deleniti expedita.",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, accusamus blanditiis. Quaerat consequatur sit ab fugiat eveniet similique provident dolores, deserunt explicabo natus ipsum error reprehenderit quis est deleniti expedita.",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, accusamus blanditiis. Quaerat consequatur sit ab fugiat eveniet similique provident dolores, deserunt explicabo natus ipsum error reprehenderit quis est deleniti expedita.",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, accusamus blanditiis. Quaerat consequatur sit ab fugiat eveniet similique provident dolores, deserunt explicabo natus ipsum error reprehenderit quis est deleniti expedita.",
    },
  ];
  return (
    <div className=" portfolio px-20 py-14 mt-24 gap-x-10 h-[100vh] t-wrapper flex items-center justify-center flex-col gap-6 relative">
      <div className="t-heading  ">
        <h2 className=" text-4xl font-bold mb-14 ">
          Clients Always Get{" "}
          <span className=" text-primary">Exceptional Work</span> For Me...
        </h2>
        <div className="blur t-blur1 bg-[rgb(238 210 255)] absolute w-[22rem] h-[14rem] rounded-3xl bg-[#edd0ff] blur-[72px] top-[-18%] left-[56%] "></div>
        <div className="blur t-blur2 bg-[rgb(238 210 255)] absolute w-[21rem] h-[11rem] rounded-3xl bg-[#c1f5ff] blur-[72px] top-[17rem] left-[-9rem] "></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testmonials px-7  border-[7px] border-blue-300 shadow-xl  border3 flex flex-col items-center justify-evenly w-[40rem] h-[30rem]">
                <img src={client.img} alt="" />
                <p className=" text-gray-700">{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testmonials;
