import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";

const initialState = {
  isAuthenticated: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.status = "success";
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed ";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
