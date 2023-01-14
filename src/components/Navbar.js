import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose, GrLogout } from "react-icons/gr";
// import Logo from "../assets/hotel-logo.png";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { showMenuNavbar } from "../Redux/Slice/Roomdetails.slice";
import {
  updateEmail,
  updateIsLogin,
  updateName,
} from "../Redux/Slice/account.slice";

const Navbar = ({ isLoginRef }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.account.accName);
  const { isLogin } = useSelector((state) => state.account);
  const navigate = useNavigate();

  // ROOMS
  const room = document.getElementById("room");
  const service = document.getElementById("service");
  const offer = document.getElementById("specialOffer");

  const ShowMenuNavbar = () => {
    dispatch(showMenuNavbar({ navbar: true }));
    setOpen(!open);
  };

  const HideMenuNavbar = () => {
    dispatch(showMenuNavbar({ navbar: false }));
    setOpen(false);
  };

  // GOOOGLE LOGIN
  const Login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const result = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(result.data);
        dispatch(updateName({ accName: result.data.name }));
        dispatch(updateEmail({ email: result.data.email }));
        dispatch(updateIsLogin({ isLogin: true }));

        axios({
          method: "post",
          url: "http://localhost:5000/admin/",
          data: {
            email: result.data.email,
          },
        })
          .then((result) => {
            console.log(result);
            localStorage.setItem("tokens", result.data.token);
            localStorage.setItem("user", result.data.user);
            navigate("/admin/homepage");
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <nav className="container  top-0  mx-auto flex justify-between items-center px-2 py-5">
        <div className="flex ">
          <h1 className="font-semibold text-2xl ">MRstudio</h1>
        </div>
        <ul className=" items-center md: flex ">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
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
          <li>
            <Link
              to="/"
              onClick={() => service.scrollIntoView({ behavior: "smooth" })}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => offer.scrollIntoView({ behavior: "smooth" })}
            >
              Special Offers
            </Link>
          </li>
          {localStorage.getItem("tokens") ? (
            <button
              type="button"
              className="ml-12 px-7 py-2 font-semibold rounded border border-gray-400 hover:bg-emerald-50 cursor-pointer"
              onClick={() => navigate("/admin/homepage")}
            >
              Dashboard
            </button>
          ) : isLogin ? (
            <button
              type="button"
              className="ml-12 px-7 py-2 font-semibold rounded border border-gray-400 hover:bg-emerald-50 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              ref={isLoginRef}
              className="ml-12 px-7 py-2 font-semibold rounded border border-gray-400 hover:bg-emerald-50 cursor-pointer"
              onClick={Login}
            >
              Login
            </button>
          )}
          {/* <div className="ml-10">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div> */}
          {!open ? (
            <RxHamburgerMenu
              className="block ml-5 text-3xl bg-green-100  cursor-pointer md:hidden"
              onClick={ShowMenuNavbar}
            />
          ) : (
            <GrClose
              className="block ml-5 text-3xl bg-green-100  cursor-pointer md:hidden"
              onClick={HideMenuNavbar}
            />
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
