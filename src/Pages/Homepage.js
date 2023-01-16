import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import HotelRoom from "../components/Hotel.Room";
import HotelServices from "../components/Hotel.Services";
import HotelSpecialOffer from "../components/Hotel.SpecialOffer";
import HotelReview from "../components/Hotel.Review";
import Footer from "../components/Footer";
import Banner from "../assets/banner.jpg";
import { Calendar } from "react-date-range";
import NavbarAndroid from "../components/Android Menu/Navbar.android";

import { useSelector, useDispatch } from "react-redux";
import {
  updateCheckIn,
  updateCheckOut,
  updateFormBook,
  updateGuess,
} from "../Redux/Slice/account.slice";

import { FaSourcetree } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Homepage = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guess, setGuess] = useState(1);
  const [calendar, setCalendar] = useState(false);
  const [calendars, setCalendars] = useState(false);
  const dispatch = useDispatch();
  const loginRef = useRef();

  const ShowMenuNavbar = useSelector((state) => state.roomDetails.navbar);
  const { isLogin } = useSelector((state) => state.account);
  const Guess = useSelector((state) => state.account.guess);

  useEffect(() => {
    dispatch(updateGuess({ guess: guess }));
  }, [guess]);

  useEffect(() => {
    dispatch(updateCheckIn({ checkIn: `${checkIn}` }));
  }, [checkIn]);

  useEffect(() => {
    dispatch(updateCheckOut({ checkOut: `${checkOut}` }));
  }, [checkOut]);

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <Navbar isLoginRef={loginRef} />
      {/* MOBILE VIEW NAVBAR */}
      {ShowMenuNavbar && <NavbarAndroid />}

      {/* Home PAGE */}
      <section
        className="container relative bg-cover bg-no-repeat w-full h-[90vh] mx-auto "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className=" bg-gradient-to-r from-[#B3E5C7] via-cyan-200 to-transparent w-full h-full flex items-center px-2 md:pl-28 md:w-3/4 ">
          <article className="w-full  md:w-2/4">
            <h1 className="text-5xl font-bold mb-5">
              Enjoy Your <br /> Dream Vacation
            </h1>
            <p className="text-current mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              suscipit hic nostrum modi ducimus libero?
            </p>
            <div className="flex items-center">
              <div className="p-3 rounded-3xl border border-[#4e9e93] mr-4  cursor-pointer ">
                <FaSourcetree className="text-2xl " />
              </div>
              <h3 className="font-semibold text-green-600">
                Warwick Hotels & Resort
              </h3>
            </div>
          </article>
        </div>

        {/* HOME PAGE BOTTOM BOX */}
        <div className="grid grid-cols-4 bg-white rounded-lg border-solid border-2 border-gray-200 shadow-2xl text-center pr-4 py-4 w-full mx-auto items-center -translate-y-14 md:w-3/5 md:p-6">
          <div className=" relative ">
            <h2 className="font-semibold pb-2">Check-In</h2>
            <h1 className="text-2xl font-bold md:text-3xl ">
              {checkIn.getDate()}
              <span className="text-base font-semibold ">
                / {monthNames[checkIn.getMonth()]}
                <MdExpandMore
                  className="absolute hidden -right-1 bottom-0 font-semibold text-2xl cursor-pointer md:right-0 lg:block "
                  onClick={() => setCalendar(!calendar)}
                />
              </span>
            </h1>

            {/* DATE PICKER HIDDEN CHECKIN */}
            {calendar && (
              <Calendar
                date={new Date()}
                minDate={new Date()}
                onChange={(value) => {
                  setCheckIn(value);
                  setCalendar(false);
                }}
                className="absolute  z-10 -translate-y-full  shadow-2xl left-5"
              />
            )}
          </div>

          <div className="relative">
            <h2 className="font-semibold pb-2">Check-Out</h2>
            <h1 className="text-2xl font-bold md:text-3xl ">
              {checkOut.getDate()}
              <span className="text-base font-semibold">
                / {monthNames[checkOut.getMonth()]}
                <MdExpandMore
                  className="absolute hidden -right-1  bottom-0 font-semibold text-2xl cursor-pointer  md:right-0  lg:block"
                  onClick={() => setCalendars(!calendars)}
                />
              </span>
            </h1>

            {/* DATE PICKER HIDDEN CHECKOUT */}
            {calendars && (
              <Calendar
                date={new Date()}
                minDate={new Date()}
                onChange={(value) => {
                  setCheckOut(value);
                  setCalendars(false);
                }}
                className="absolute  z-10 -translate-y-full  shadow-2xl -left-5"
              />
            )}
          </div>

          <div className=" relative">
            <h2 className="font-semibold pb-2">Guess</h2>
            <h1 className="text-2xl font-bold md:text-3xl ">
              {guess <= 0 ? setGuess(1) : guess <= 9 ? "0" + guess : guess}
              <MdExpandLess
                className="absolute hidden right-[20px] bottom-5 font-semibold text-2xl cursor-pointer  lg:block"
                onClick={() => setGuess(guess + 1)}
              />
              <MdExpandMore
                className="absolute hidden right-[20px] bottom-0 font-semibold text-2xl cursor-pointer  lg:block"
                onClick={() => setGuess(guess - 1)}
              />
            </h1>
          </div>

          <div
            className="font-bold bg-green-500 py-3 cursor-pointer rounded-md  hover:bg-green-600"
            onClick={() => {
              isLogin
                ? dispatch(updateFormBook({ formBook: true }))
                : loginRef.current.click();
            }}
          >
            BOOK Now
          </div>
        </div>
      </section>

      <HotelRoom />
      <HotelServices />
      <HotelSpecialOffer />
      <HotelReview />
      <Footer />
    </>
  );
};

export default Homepage;
