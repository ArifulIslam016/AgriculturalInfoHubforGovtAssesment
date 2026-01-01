import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {Swiper} from 'swiper';
import heroImg1 from "../../assets/photo1.jpg";
import heroImg2 from "../../assets/photo2.jpg";
import heroImg3 from "../../assets/photo3.jpg";
const Slider = () => {
  const slidesData = [
    {
      id: 1,
      title: "Biggest Community",
      description:
        "Join the community And Get Updates.",
      image: heroImg1,
      buttonText: "Join Us",
    },
    {
      id: 2,
      title: "Power House of Information",
      description:
        "Latest Information of farming.",
      image: heroImg2,
      buttonText: "Read",
    },
    {
      id: 3,
      title: "Thousand of solutions of farming problem",
      description:
        "Updated Problem solving Info.",
      image: heroImg3,
      buttonText: "View Documents",
    },
  ];
    return (
       <div className='w-full h-125 md:h-150 overflow-hidden'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <button className="bg-[#006a4e] hover:bg-[#f42a41] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default Slider;