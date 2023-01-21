import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import IsLoginRoutes from "./utils/isLoginRoutes";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Roomdetails from "./components/Room-Info/Room.details";
import FormBook from "./components/BookNow Form/form.booknow";
import AdminPage from "./Pages/AdminPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateIsLogin } from "./Redux/Slice/account.slice";

function App() {
  const showRoomDetail = useSelector((state) => state.roomDetails.show);
  const showFormBook = useSelector((state) => state.account.formBook);
  const dispatch = useDispatch();

  useEffect(() => {
    let unmount = true;

    const admin = JSON.parse(localStorage.getItem("admin"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (admin !== null) {
      axios({
        method: "post",
        url: "https://hotel-booking-api-ju41.onrender.com/admin/token",
        data: {
          token: admin.token,
        },
      })
        .then((result) => {
          // console.log(result);
          if (!result.data.isValid) {
            localStorage.clear();
            window.location.reload();
          } else {
            // console.log(result.data.isValid);
            dispatch(updateIsLogin({ isLogin: admin.isLogin }));
          }
        })
        .catch((err) => console.log(err));
    }

    if (user !== null) {
      dispatch(updateIsLogin({ isLogin: user.isLogin }));
      dispatch(updateEmail({ email: user.email }));
    }

    return () => (unmount = false);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Navbar /> */}
          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/homepage" exact element={<AdminPage />} />
          </Route>
          <Route element={<IsLoginRoutes />}>
            <Route path="/book/form" exact element={<FormBook />} />
          </Route>

          {/* PUBLIC ROUTES */}
          <Route path="/room/details" exact element={<Roomdetails />} />
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
