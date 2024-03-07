import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex p-4 my-4 bg-zinc-800 h-[200px]">
            <div>someone</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-4 my-4 bg-zinc-800 h-[200px]">
            <div>someone</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-4 my-4 bg-zinc-800 h-[200px]">
            <div>someone</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-4 my-4 bg-zinc-800 h-[200px]">
            <div>someone</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
