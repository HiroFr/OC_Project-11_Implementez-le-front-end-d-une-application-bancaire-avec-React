import { createSlice } from "@reduxjs/toolkit";
import { editUser } from "../actions/editActions";

// Initialise l'état du slice d'édition
const initialState = {
  status: "idle",
  error: null,
};

// Crée le slice d'édition
export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {},
  // Définit les reducers asynchrones pour gérer les actions d'édition
  extraReducers: (builder) => {
    builder
      .addCase(editUser.pending, (state) => {
          state.status = "loading";
      })
      .addCase(editUser.fulfilled, (state) => {
          state.status = "success";
      })
      .addCase(editUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
      })
  }
})

export default editSlice.reducer;