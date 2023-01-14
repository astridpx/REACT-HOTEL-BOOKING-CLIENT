import { configureStore } from "@reduxjs/toolkit";
import showRoomDetails from "../Redux/Slice/Roomdetails.slice";
import account from "../Redux/Slice/account.slice";

export default configureStore({
  reducer: {
    roomDetails: showRoomDetails,
    account: account,
  },
});
