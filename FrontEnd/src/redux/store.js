import { configureStore } from "@reduxjs/toolkit";

// STATE SLICE
import { authSlice } from "./slice/authSlice";
import { userSlice } from "./slice/userSlice";
import { editSlice } from "./slice/editSlice";

export const store = configureStore({
  reducer: {
    // Ajout des slices au store Redux
    auth: authSlice.reducer,
    user: userSlice.reducer,
    edit: editSlice.reducer,
  },
});
