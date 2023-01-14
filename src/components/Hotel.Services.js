import React, { useState } from "react";
import Restaurant from "../assets/services/restaurants.jpg";
import Pool from "../assets/services/pool.jpg";
import Cruise from "../assets/services/cruise.jpg";
import Snorkeling from "../assets/services/snorkeling.jpg";
import { ImSpoonKnife } from "react-icons/im";
import { GiWaterDrop } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdMegaphone } from "react-icons/io";

const HotelServices = () => {
  const classDefault =
    "absolute bg-green-400 z-10 translate-y-full h-full w-full top-0 left-0 flex items-center justify-center";
  const classHover =
    "animate-moveUp absolute  opacity-75 bg-cyan-400 z-10 translate-y-full h-full w-full top-0 left-0 flex items-center justify-center";

  const [restaurant, setRestaurant] = useState(classDefault);
  const [pool, setPool] = useState(classDefault);
  const [cruise, setCruise] = useState(classDefault);
  const [snorkeling, setSnorkeling] = useState(classDefault);

  return (
    <>
      <section className="container mx-auto  mb-4 " id="service">
        <h1 className="text-center font-semibold text-3xl p-4 mb-4">
          Our services
        </h1>

        <div className="w-5/6 mx-auto grid gap-12 justify-around items-center md:grid md:grid-cols-2 xl:flex xl:gap-2">
          <div className="flex justify-center flex-col items-center">
            <div
              className=" relative  h-32  w-32 rounded-full overflow-hidden cursor-pointer  "
              onMouseEnter={() => setRestaurant(classHover)}
              onMouseLeave={() => setRestaurant(classDefault)}
            >
              <div className={restaurant}>
                <ImSpoonKnife className="text-3xl " />
              </div>
              <img
                src={Restaurant}
                alt=""
                className="h-full  object-cover z-0  "
              />
            </div>
            <article className="p-4 text-center">
              <h3 className="pt-4 text-gray-600 font-medium text-lg">
                Restaurant
              </h3>

              <p className="text-gray-500 pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                deleniti molestiae sit laudantium
              </p>

              <h4 className="font-semibold text-md text-green-700 pt-4 cursor-pointer">
                READ MORE
              </h4>
            </article>
          </div>

          <div className="flex  justify-center flex-col items-center">
            <div
              className=" relative  h-32  w-32 rounded-full overflow-hidden cursor-pointer "
              onMouseEnter={() => setPool(classHover)}
              onMouseLeave={() => setPool(classDefault)}
            >
              <div className={pool}>
                <GiWaterDrop className="text-3xl " />
              </div>
              <img src={Pool} alt="" className="h-full  object-cover z-0 " />
            </div>
            <article className="p-4 text-center">
              <h3 className="pt-4 text-gray-600 font-medium text-lg">
                Spa & Pool
              </h3>

              <p className="text-gray-500 pt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                deleniti molestiae sit laudantium
              </p>

              <h4 className="font-semibold text-md text-green-700 pt-4 cursor-pointer">
                READ MORE
              </h4>
            </article>
          </div>

          <div className="flex justify-center flex-col items-center">
            <div
              className=" relative  h-32  w-32 rounded-full overflow-hidden cursor-pointer "
              onMouseEnter={() => setCruise(classHover)}
              onMouseLeave={() => setCruise(classDefault)}
            >
              <div className={cruise}>
                <IoSettingsSharp className="text-3xl" />
              </div>
              <img src={Cruise} alt="" className="h-full  object-cover z-0 " />
            </div>
            <article className="p-4 text-center">
              <h3 className="pt-4 text-gray-600 font-medium text-lg">
                Cruises
              </h3>

              <p className="text-gray-500 pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                deleniti molestiae sit laudantium
              </p>

              <h4 className="font-semibold text-md text-green-700 pt-4 cursor-pointer">
                READ MORE
              </h4>
            </article>
          </div>

          <div className="flex justify-center flex-col items-center">
            <div
              className=" relative  h-32  w-32 rounded-full   overflow-hidden cursor-pointer "
              onMouseEnter={() => setSnorkeling(classHover)}
              onMouseLeave={() => setSnorkeling(classDefault)}
            >
              <div className={snorkeling}>
                <IoMdMegaphone className="text-3xl " />
              </div>
              <img
                src={Snorkeling}
                alt=""
                className="h-full  object-cover z-0 "
              />
            </div>
            <article className="p-4 text-center">
              <h3 className="pt-4 text-gray-600 font-medium text-lg">
                Snorkeling
              </h3>

              <p className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                deleniti molestiae sit laudantium
              </p>

              <h4 className="font-semibold text-md text-green-700 pt-4 cursor-pointer">
                READ MORE
              </h4>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelServices;
