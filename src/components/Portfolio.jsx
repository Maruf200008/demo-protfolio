import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ecommerce from "../assets/img/ecommerce.png";
import hoc from "../assets/img/hoc.png";
import musicApp from "../assets/img/musicapp.png";
import sidebar from "../assets/img/sidebar.png";

const Portfolio = () => {
  return (
    <div className=" portfolio px-20 py-14  mt-10 gap-x-10  flex items-center justify-center flex-col h-[70vh] ">
      {/* heading  */}
      <div className=" flex flex-col justify-center items-center mb-14 gap-y-4">
        <h2 className=" text-gray-800 text-3xl font-bold">Recent Projects</h2>
        <p className=" text-primary text-5xl font-bold">Portfolio</p>
      </div>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicApp} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="sidebar" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
