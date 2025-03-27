import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";

// Initialise l'état du slice utilisateur
const initialState = {
  data: null,
  status: "idle",
  error: null,
};

// Crée le slice utilisateur
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // Définit les reducers asynchrones pour gérer les actions utilisateur
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
