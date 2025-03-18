import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ username }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.put(
        `${API_URL}/user/profile`,
        { userName: username },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
