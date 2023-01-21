import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { Toast } from "../SweetAlert/Toast";

import { useDispatch, useSelector } from "react-redux";
import { updateFormBook } from "../../Redux/Slice/account.slice";

const FormBook = () => {
  const { checkIn } = useSelector((state) => state.account);
  const { checkOut } = useSelector((state) => state.account);
  const Guess = useSelector((state) => state.account.guess);
  const [dateIn, setDateIn] = useState("text");
  const [dateOut, setDateOut] = useState("text");
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [dateCheckIn, setdateCheckIn] = useState(new Date());
  const [dateCheckOut, setdateCheckOut] = useState(new Date());
  const [guess, setGuess] = useState(1);
  const [room, setRoom] = useState("compact");
  const { email } = useSelector((state) => state.account);

  const HideFormBook = () => {
    navigate("/");
  };

  useEffect(() => {
    const inDate = new Date(checkIn);
    const outDate = new Date(Date.parse(checkOut));

    const dateCheckIn1 = `${
      inDate.getFullYear() +
      "-" +
      inDate.getMonth() +
      1 +
      "-" +
      inDate.getDate()
    }`;

    const dateCheckOut1 = `${
      outDate.getFullYear() +
      "-" +
      outDate.getMonth() +
      1 +
      "-" +
      outDate.getDate()
    }`;

    setdateCheckIn(dateCheckIn1);
    setdateCheckOut(dateCheckOut1);
    setGuess(Guess);
  }, []);

  const BookRoom = (e) => {
    e.preventDefault();
    const configdata = {
      method: "post",
      url: "https://hotel-booking-api-ju41.onrender.com/room/reserved/booking",
      data: {
        fullname,
        email,
        checkIn: dateCheckIn,
        checkOut: dateCheckOut,
        guess,
        room,
      },
    };

    axios(configdata)
      .then((result) =>
        Toast.fire({
          icon: "success",
          title: result.data.message,
        })
      )
      .catch((err) =>
        Toast.fire({
          icon: "error",
          title: err,
        })
      );
  };

  return (
    <>
      <section className="py-16 h-auto w-full relative bg-emerald-300 flex items-center justify-center lg:h-screen">
        <div className="absolute top-4 left-8 p-1 bg-red-600 rounded-full cursor-pointer shadow-2xl md:p-2">
          <AiOutlineArrowLeft
            className="text-lg text-[#fcfffa] md:text:xl"
            onClick={HideFormBook}
          />
        </div>

        {/* BOX CONTENT */}
        <div className="flex bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-auto">
            <h1 className="mb-8 text-lg font-medium text-green-700">
              Book Now
            </h1>
            <form
              action=""
              className="flex flex-wrap w-full gap-8 justify-between lg:w-[40vw] "
              onSubmit={(e) => BookRoom(e)}
            >
              <div className="block w-full">
                <h1 className="text-sm mb-2 text-gray-600">Fullname</h1>
                <input
                  type="text"
                  placeholder="Fullname"
                  className="pr-4 py-1 text-sm outline-none border-0 border-b border-black w-80 lg:w-auto"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="block ">
                <h1 className="text-sm mb-2  text-gray-600">Email</h1>
                <input
                  type="text"
                  placeholder="Email"
                  className="pr-4 py-1 text-sm outline-none border-0 border-b border-black w-80 lg:w-auto"
                  value={email}
                  readOnly
                />
              </div>

              <div className="block ">
                <h1 className="text-sm mb-2  text-gray-600">Check In</h1>
                <input
                  type={dateIn}
                  className="pr-4 py-1 text-sm outline-none border-0 border-b border-black w-80 lg:w-48"
                  placeholder="Check In"
                  onFocus={() => setDateIn("date")}
                  onBlur={() => setDateIn("text")}
                  value={dateCheckIn}
                  onChange={(e) => setdateCheckIn(e.target.value)}
                />
              </div>

              <div className="block ">
                <h1 className="text-sm mb-2  text-gray-600">Check Out</h1>
                <input
                  type={dateOut}
                  className="pr-4 py-1 text-sm outline-none border-0 border-b border-black w-80 lg:w-48"
                  placeholder="Check Out"
                  onFocus={() => setDateOut("date")}
                  onBlur={() => setDateOut("text")}
                  value={dateCheckOut}
                  onChange={(e) => setdateCheckOut(e.target.value)}
                />
              </div>

              <div className="block ">
                <h1 className="text-sm mb-2  text-gray-600">Guess</h1>
                <input
                  type="number"
                  placeholder="Guess"
                  className="pr-4 py-1 text-sm outline-none border-0 border-b border-black w-80 lg:w-auto"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                />
              </div>

              <div className="block text-left w-48">
                <h1 className="text-sm mb-2  text-gray-600">Room Type</h1>
                <select
                  id="room-type"
                  className="outline-none border-b border-black py-1 text-sm  w-80 lg:w-full "
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="compact" className="text-gray-700 ">
                    Compact Size
                  </option>
                  <option value="luxury" className="text-gray-700">
                    Luxury
                  </option>
                  <option value="modern" className="text-gray-700 ">
                    Modern Residence
                  </option>
                  <option value="families" className="text-gray-700 ">
                    For Families
                  </option>
                  <option value="minimal" className="text-gray-700 ">
                    Minimal Design
                  </option>
                </select>
              </div>

              <div className="w-full flex items-center justify-center mt-4  lg:justify-end">
                <button className="px-8 py-2 bg-green-500  rounded-2xl font-semibold lg:hidden">
                  Submit
                </button>
                <button
                  type="submit"
                  className="hidden border border-green-500 bg-green-500 rounded-full p-4 shadow-xl hover:-translate-y-[2px] hover:scale-105 transition-all duration-200 lg:block"
                >
                  <FaPaperPlane className="text-lg text-white " />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT BOX */}
          <div className="w-[25vw] bg-green-500 p-4 hidden lg:block">
            <div className="h-[57%]">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61877.02792612612!2d121.0214853286743!3d14.234881872553771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7d3d83da264f%3A0x3a8e4025b00e304f!2sNuvali!5e0!3m2!1sen!2sph!4v1666014867299!5m2!1sen!2sph"
                width="100%"
                height="100%"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="py-8 flex flex-col gap-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-4 text-lg text-red-600  " />
                <p className="text-sm text-[#fcfffa]">
                  221 Blk. 4 StoneRidge Village City of Calamba Laguna
                </p>
              </div>

              <div className="flex items-start">
                <FaPhoneAlt className="mr-4 text-lg text-red-600  " />
                <p className="text-sm text-[#fcfffa]">+63 997 511 4738</p>
              </div>

              <div className="flex items-start">
                <IoMdMail className="mr-4 text-lg text-red-600  " />
                <p className="text-sm text-[#fcfffa]">
                  mrstudio.book@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormBook;
