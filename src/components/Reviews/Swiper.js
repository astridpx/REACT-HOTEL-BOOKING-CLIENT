import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "../../Helpers/useWindowDimension.js";
import Profile from "../../assets/ptofile.png";

// TEMPORARY REVIEW
import { Reviews } from "../../Helpers/Review.data.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImQuotesLeft } from "react-icons/im";

const SwiperReview = () => {
  const { height, width } = useWindowDimensions();

  // Max LENGTH 219 words

  return (
    <>
      <Swiper
        slidesPerView={width < 1024 ? 1 : 2}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {Reviews.map((props) => {
          return (
            <SwiperSlide className="py-6 pl-20 pr-8 relative " key={props.id}>
              <header className="mb-7">
                <div className=" flex ">
                  <img src={Profile} alt="" className="h-10  " />
                  <div className="">
                    <h2 className="text-gray-600 font-semibold">
                      {props.name}
                      <span className="text-sm font-light text-gray-500 ml-2">
                        wrote on {props.date}
                      </span>
                    </h2>

                    <p className=" text-green-500 ">{props.star}</p>
                  </div>
                </div>
              </header>

              <h1 className="text-base text-gray-600 font-semibold mb-2 ">
                {props.title}
              </h1>
              <ImQuotesLeft className="absolute left-12" />
              <p className="text-gray-600 max-h-40 text-ellipsis line-clamp-4 break-words  text-sm mb-6 ">
                {props.review}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperReview;
