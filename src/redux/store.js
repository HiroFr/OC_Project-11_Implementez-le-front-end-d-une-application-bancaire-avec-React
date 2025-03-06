import { configureStore } from "@reduxjs/toolkit";

// STATE SLICE
import { authSlice } from "./slice/authSlice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    // Add the slice reducer to the store
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});
