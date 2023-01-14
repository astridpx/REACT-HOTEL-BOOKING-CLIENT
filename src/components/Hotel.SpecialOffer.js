import React from "react";
import Service from "../assets/special-offer/service.webp";
import Business from "../assets/special-offer/busniess.webp";
import Family from "../assets/special-offer/family.webp";

const HotelSpecialOffer = () => {
  return (
    <>
      <div className="w-full bg-green-100 py-8 mt-9" id="specialOffer">
        <div className="container mx-auto">
          <h1 className="text-center font-semibold text-3xl text-green-600 mb-8">
            Special offers
          </h1>

          <section className="w-5/6 mx-auto grid grid-cols-1 gap-12 md:grid-cols-3 ">
            <div className="">
              <div className="rounded border-2 border-green-400 border-solid mb-6 cursor-pointer">
                <img
                  src={Service}
                  alt=""
                  className="h-40 object-cover rounded w-full"
                />
              </div>
              <article className="text-left ">
                <h2 className="mb-3 font-semibold text-lg text-gray-600">
                  Quality Service
                </h2>
                <p className="text-gray-500 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  tenetur omnis beatae voluptas! Dolore nostrum rem, cumque
                </p>
              </article>
            </div>

            <div className="">
              <div className="rounded border-2 border-green-400 border-solid mb-6 cursor-pointer">
                <img
                  src={Family}
                  alt=""
                  className="h-40 object-cover rounded w-full"
                />
              </div>
              <article className="text-left ">
                <h2 className="mb-3 font-semibold text-lg text-gray-600">
                  Family Holiday
                </h2>
                <p className="text-gray-500 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  tenetur omnis beatae voluptas! Dolore nostrum rem, cumque
                </p>
              </article>
            </div>

            <div className="">
              <div className="rounded border-2 border-green-400 border-solid mb-6 cursor-pointer">
                <img
                  src={Business}
                  alt=""
                  className="h-40 object-cover rounded w-full"
                />
              </div>
              <article className="text-left ">
                <h2 className="mb-3 font-semibold text-lg text-gray-600">
                  Business Trip
                </h2>
                <p className="text-gray-500 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  tenetur omnis beatae voluptas! Dolore nostrum rem, cumque
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HotelSpecialOffer;
