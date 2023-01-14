import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavbarAndroid = () => {
  const room = document.getElementById("room");
  const service = document.getElementById("service");
  const offer = document.getElementById("specialOffer");
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-green-50  py-4 container mx-auto flex items-center justify-items-center flex-col gap-4 ">
        <li className="block">
          <Link to="/">Home </Link>
        </li>
        <li className="block">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              room.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Type of Rooms
          </Link>
        </li>
        <li className="block">
          <Link
            to="/"
            onClick={() => service.scrollIntoView({ behavior: "smooth" })}
          >
            Services
          </Link>
        </li>
        <li className="block">
          <Link
            to="/"
            onClick={() => offer.scrollIntoView({ behavior: "smooth" })}
          >
            Special Offers
          </Link>
        </li>
      </div>
    </>
  );
};

export default NavbarAndroid;
