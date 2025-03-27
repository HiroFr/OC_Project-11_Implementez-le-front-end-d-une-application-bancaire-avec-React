import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";

// Initialise l'état du slice d'authentification
const initialState = {
  isAuthenticated: Boolean(localStorage.getItem("token") || sessionStorage.getItem("token")),
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  status: "idle",
};

// Crée le slice d'authentification
export const authSlice = createSlice({
  name: "auth",
  initialState,
  // Définit les reducers pour gérer les actions
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = localStorage.removeItem("token") || sessionStorage.removeItem("token");
    },
  },
  // Définit les reducers asynchrones pour gérer les actions de connexion
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
        state.status = "failed";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
