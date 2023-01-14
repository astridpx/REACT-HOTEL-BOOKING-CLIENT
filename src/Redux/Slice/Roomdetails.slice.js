import { createSlice } from "@reduxjs/toolkit";

export const roomDetailsSlice = createSlice({
  name: "roomDetails",
  initialState: {
    show: false,
    roomId: 0,
    navbar: false,
  },

  reducers: {
    showRoomDetails: (state, action) => {
      state.show = action.payload.show;
    },

    updateRoomId: (state, action) => {
      state.roomId = action.payload.roomId;
    },

    showMenuNavbar: (state, action) => {
      state.navbar = action.payload.navbar;
    },
  },
});

export const { showRoomDetails, updateRoomId, showMenuNavbar } =
  roomDetailsSlice.actions;
export default roomDetailsSlice.reducer;
