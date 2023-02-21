import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
