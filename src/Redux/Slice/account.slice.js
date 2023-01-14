import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",

  initialState: {
    accName: "myName",
    isLogin: false,
    formBook: false,
    checkIn: `${new Date()}`,
    checkOut: `${new Date()}`,
    guess: 1,
    email: "mrstudio@gmail.com",
  },

  reducers: {
    updateName: (state, action) => {
      state.accName = action.payload.accName;
    },

    updateIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },

    updateFormBook: (state, action) => {
      state.formBook = action.payload.formBook;
    },

    updateCheckIn: (state, action) => {
      state.checkIn = action.payload.checkIn;
    },

    updateCheckOut: (state, action) => {
      state.checkOut = action.payload.checkOut;
    },

    updateGuess: (state, action) => {
      state.guess = action.payload.guess;
    },

    updateEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const {
  updateName,
  updateIsLogin,
  updateFormBook,
  updateCheckIn,
  updateCheckOut,
  updateGuess,
  updateEmail,
} = accountSlice.actions;
export default accountSlice.reducer;
