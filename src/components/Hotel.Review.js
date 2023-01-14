import React from "react";
import SwiperReview from "./Reviews/Swiper";

const HotelReview = () => {
  return (
    <>
      <div className="container mx-auto py-8  ">
        <section className="w-5/6 mx-auto">
          <h1 className="font-medium text-left text-2xl text-green-600 mb-6">
            Reviews
          </h1>

          <article className="">
            <SwiperReview />
          </article>
        </section>
      </div>
    </>
  );
};

export default HotelReview;
