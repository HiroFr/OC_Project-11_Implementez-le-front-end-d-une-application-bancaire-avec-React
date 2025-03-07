import { createSlice } from "@reduxjs/toolkit";
import { editUser } from "../actions/editActions";

const initialState = {
  status: "idle",
  error: null,
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {},
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