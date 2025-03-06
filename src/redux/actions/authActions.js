import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        email,
        password,
      });
      // Store the token in localStorage
      localStorage.setItem("token", response.data.body.token);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
