import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1";

// Action pour récupérer le profil d'un utilisateur
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, thunkAPI) => {
    try {
      // Récupère le token d'authentification depuis le sessionStorage ou localStorage
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.body;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);