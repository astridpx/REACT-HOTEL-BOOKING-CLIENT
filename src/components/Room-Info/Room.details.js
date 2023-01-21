import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/rooms/luxury.jpg";
import Images from "../../assets/rooms/family.jpg";
import { HotelDetailsData } from "../../Helpers/Hotel-details-data/HotelDetails.data";

// ROOM FEATURES ICON
import { AiOutlineWifi, AiOutlineCoffee } from "react-icons/ai";
import { IoIosSnow } from "react-icons/io";
import { IoVolumeMuteOutline, IoCloseCircle } from "react-icons/io5";
import { MdBed } from "react-icons/md";
import { TbBed } from "react-icons/tb";

import { useSelector, useDispatch } from "react-redux";

const Roomdetails = () => {
  const roomId = useSelector((state) => state.roomDetails.roomId);
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const rooms = HotelDetailsData.filter((filter) => filter.id === roomId).map(
      (props) => {
        return (
          <>
            <div className="w-full mx-auto pb-20 md:w-5/6  " key={props.id}>
              {/* GALLERY */}
              <div className="grid grid-cols-3 gap-[4px] cursor-pointer mb-8 bg-green-200 border-[3px] border-green-300">
                <div className="h-80 col-span-3 grid grid-cols-2 gap-[4px]">
                  <img
                    src={props.img}
                    alt=""
                    className=" w-full h-80 object-cover "
                  />
                  <img
                    src={props.img1}
                    alt=""
                    className="w-full h-80 object-cover "
                  />
                </div>
                <img
                  src={props.img2}
                  alt=""
                  className=" object-cover h-80 w-full"
                />
                <img
                  src={props.img3}
                  alt=""
                  className=" object-cover h-80  w-full"
                />
                <img
                  src={props.img4}
                  alt=""
                  className=" object-cover h-80 w-full"
                />
              </div>

              <article className="">
                <h1 className="text-3xl font-semibold ">{props.roomName}</h1>
                <div className="grid  md:grid-cols-2 gap-2 pt-4 ">
                  <div className="mb-8">
                    <h3 className="font-medium text-xl mb-2 text-gray-800 ">
                      About
                    </h3>
                    <p className="pr-4 text-gray-700">{props.about}</p>
                  </div>

                  {/* ROOM FEATURES */}
                  <div className="">
                    <h2 className="font-medium text-lg mb-2 ">Room features</h2>
                    <div className="grid  grid-cols-2   gap-2">
                      <div className="flex  items-">
                        <AiOutlineWifi className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">
                          Free High Speed Internet (WiFi)
                        </p>
                      </div>

                      <div className="flex  items-">
                        <IoIosSnow className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">Air conditioning</p>
                      </div>

                      <div className="flex  items-">
                        <MdBed className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">Blackout curtains</p>
                      </div>

                      <div className="flex  items-">
                        <TbBed className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">Extra long bed</p>
                      </div>

                      <div className="flex  items-">
                        <AiOutlineCoffee className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">Coffee maker</p>
                      </div>

                      <div className="flex  items-">
                        <IoVolumeMuteOutline className="mr-4 pt-[2px] text-gray-900 text-lg" />
                        <p className="text-gray-800">Sound proof</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </>
        );
      }
    );
    setRoom(rooms);
  }, []);

  return (
    <>
      <section
        className="w-full bg-white z-40 absolute top-0 px-4 md:px-0 "
        id="roomDetails"
      >
        <IoCloseCircle
          className="fixed top-2 right-4 cursor-pointer text-red-600 text-2xl bg-white rounded-full shadow-xl"
          onClick={() => {
            navigate("/");
            window.scroll(0, 1000);
          }}
          // onClick={HandleClick}
        />
        <div className="container mx-auto  h-full py-11 bg-white">
          {/* START */}
          {room}
          {/* END */}
        </div>
      </section>
    </>
  );
};

export default Roomdetails;
