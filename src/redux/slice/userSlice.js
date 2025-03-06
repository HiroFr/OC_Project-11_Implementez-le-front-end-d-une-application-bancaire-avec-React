import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
