import React, { useRef, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
// import Roomdetails from "./Room-Info/Room.details";

// ROOMS
import Luxury from "../assets/rooms/luxury.jpg";
import Modern from "../assets/rooms/Modern1.jpg";
import Compact from "../assets/rooms/compact.jpg";
import Family from "../assets/rooms/family.jpg";
import Minimal from "../assets/rooms/minimal.jpg";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  showRoomDetails,
  updateRoomId,
} from "../Redux/Slice/Roomdetails.slice";

const HotelRoom = () => {
  // const showRoomDetail = useSelector((state) => state.roomDetails.show);
  const dispatch = useDispatch();

  const ShowRoomDetail = (id) => {
    dispatch(updateRoomId({ roomId: id }));
    dispatch(showRoomDetails({ show: true }));
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="container mx-auto  pt-28 " id="room">
        <div>
          <h1 className="text-center text-3xl font-semibold">
            Different room offers
          </h1>
        </div>

        {/* ROOMS */}
        <section className="grid grid-cols-1 gap-4 justify-center mt-12 w-5/6 rounded mx-auto md:grid-cols-2 ">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={Luxury}
                alt="Luxury"
                className="h-72 object-cover w-full cursor-pointer scale-100 duration-200 transition-all hover:scale-110"
              />
            </div>
            <div className="p-2 relative bg-gray-100 rounded">
              <h2 className="font-semibold text-lg text-gray-600">
                Luxury Room
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <span
                className="absolute flex items-center justify-center cursor-pointer bg-green-500 right-0 top-0 w-16 h-full transition-all hover:bg-green-600"
                onClick={() => ShowRoomDetail(1)}
              >
                <BsFillEyeFill className="text-2xl cursor-pointer" />
              </span>
            </div>
          </div>

          <div className="">
            <div className="overflow-hidden">
              <img
                src={Modern}
                alt="Modern"
                className="h-72 object-cover w-full cursor-pointer scale-100 duration-200 transition-all hover:scale-110"
              />
            </div>
            <div className="p-2 relative bg-gray-100 rounded">
              <h2 className="font-semibold text-lg text-gray-600">
                Modern Residence
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <span
                className="absolute flex items-center justify-center cursor-pointer bg-green-500 right-0 top-0 w-16 h-full transition-all hover:bg-green-600"
                onClick={() => ShowRoomDetail(2)}
              >
                <BsFillEyeFill className="text-2xl cursor-pointer" />
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* SMALL GRID ROOMS */}
      <div className=" w-full bg-green-100">
        <div className="container mx-auto">
          <div className=" my-4 py-4 md:my-12  ">
            <section className="grid grid-cols-1 gap-4 justify-center w-5/6 rounded mx-auto md:grid-cols-3 md:w-6/6">
              <div className="">
                <div className="overflow-hidden">
                  <img
                    src={Compact}
                    alt="Compact"
                    className="h-52 object-cover w-full cursor-pointer scale-100 duration-200 transition-all hover:scale-110"
                  />
                </div>
                <div className="p-2 relative bg-gray-100 rounded">
                  <h2 className="font-semibold text-md text-gray-600">
                    Compact size
                  </h2>
                  <p className="text-gray-500 text-sm ">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span
                    className="absolute flex items-center justify-center cursor-pointer bg-green-500 right-0 top-0 w-14 h-full transition-all hover:bg-green-600"
                    onClick={() => ShowRoomDetail(3)}
                  >
                    <BsFillEyeFill className="text-2xl cursor-pointer" />
                  </span>
                </div>
              </div>

              <div className="">
                <div className="overflow-hidden">
                  <img
                    src={Family}
                    alt="Family"
                    className="h-52 object-cover w-full cursor-pointer scale-100 duration-200 transition-all hover:scale-110"
                  />
                </div>
                <div className="p-2 relative bg-gray-100 rounded">
                  <h2 className="font-semibold text-md text-gray-600">
                    For Families
                  </h2>
                  <p className="text-gray-500 text-sm ">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span
                    className="absolute flex items-center justify-center cursor-pointer bg-green-500 right-0 top-0 w-14 h-full transition-all hover:bg-green-600"
                    onClick={() => ShowRoomDetail(4)}
                  >
                    <BsFillEyeFill className="text-2xl cursor-pointer" />
                  </span>
                </div>
              </div>

              <div className="">
                <div className="overflow-hidden">
                  <img
                    src={Minimal}
                    alt="Minimal"
                    className="h-52 object-cover w-full cursor-pointer scale-100 duration-200 transition-all hover:scale-110"
                  />
                </div>
                <div className="p-2 relative bg-gray-100 rounded">
                  <h2 className="font-semibold text-sm text-gray-600 ">
                    Minimal design, maximal comfort
                  </h2>
                  <p className="text-gray-500 text-sm ">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span
                    className="absolute flex items-center justify-center cursor-pointer bg-green-500 right-0 top-0 w-14 h-full transition-all hover:bg-green-600"
                    onClick={() => ShowRoomDetail(5)}
                  >
                    <BsFillEyeFill className="text-2xl cursor-pointer" />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRoom;
