import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Roomdetails from "./components/Room-Info/Room.details";
import FormBook from "./components/BookNow Form/form.booknow";
import AdminPage from "./Pages/AdminPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateIsLogin } from "./Redux/Slice/account.slice";

function App() {
  const showRoomDetail = useSelector((state) => state.roomDetails.show);
  const showFormBook = useSelector((state) => state.account.formBook);
  const dispatch = useDispatch();

  useEffect(() => {
    let unmount = true;
    const token = localStorage.getItem("tokens");

    axios({
      method: "post",
      url: "http://localhost:5000/admin/token",
      data: {
        token,
      },
    })
      .then((result) => {
        // console.log(result);
        if (!result.data.isValid) {
          localStorage.clear().then(() => window.location.reload());
        } else {
          // console.log(result.data.isValid);
          dispatch(updateIsLogin({ isLogin: true }));
        }
      })
      .catch((err) => console.log(err));

    return () => (unmount = false);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Navbar /> */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/homepage" exact element={<AdminPage />} />
          </Route>
          <Route
            path="/"
            exact
            element={
              showRoomDetail && !showFormBook ? (
                <Roomdetails />
              ) : !showRoomDetail && showFormBook ? (
                <FormBook />
              ) : (
                <Homepage />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
