import React, { useState } from "react";
import leftcursor from "../assets/leftcursor.svg";
import rightcursor from "../assets/rightcursor.svg";
import yellowbg from "../assets/yellowbg.svg";
import blackbg from "../assets/blackbg.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {

  const [custom_swiper, set_swiper] = useState({});

  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };

  return (
    <section className="container">
      <div className="mt-[40px]">
        <div className="flex items-center justify-center relative">
          <button onClick={prevSlide} className="left-0 absolute w-[31px] z-10  h-[31px] rounded-full bg-yellow flex items-center justify-center">
            <img src={leftcursor} alt="" />
          </button>
          <Swiper className="swiper grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => set_swiper(swiper)}>
            <SwiperSlide><img src={yellowbg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={blackbg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={yellowbg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={blackbg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={yellowbg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={blackbg} alt="" /></SwiperSlide>
          </Swiper>

          <button onClick={nextSlide} className="right-5 z-10 absolute w-[31px] h-[31px] rounded-full bg-yellow flex items-center justify-center">
            <img src={rightcursor} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
