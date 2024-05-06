import React from "react";
import { menu_list } from "../../assets/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

const ExploreMenu = () => {
  return (
    <div className="max-w-5xl mx-auto  p-3 my-4 border-b-2">
      <div className="max-w-xl">
        <h2 className="text-xl  font-semibold">Explore Our Menu</h2>

        <p className="text-sm text-gray-600 mt-3">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>

      <div className="mt-8 ">

      <Swiper
        
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            0: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper flex justify-center items-center pb-12 lg:pb-0"
      >
        {menu_list.map((item, index) => (
            <SwiperSlide key={index}>
          <div key={index} className="text-center cursor-pointer">
            <img src={item.menu_image} alt={item.menu_name} className="" />
            <p className="text-gray-600">{item.menu_name} </p>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreMenu;
