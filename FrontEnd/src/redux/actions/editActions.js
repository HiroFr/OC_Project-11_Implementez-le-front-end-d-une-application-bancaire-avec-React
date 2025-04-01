import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1";

// Action pour éditer le profil d'un utilisateur
export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ username }, thunkAPI) => {
    try {
      // Récupère le token d'authentification depuis le sessionStorage ou localStorage
      const token = thunkAPI.getState().auth.key.body.token
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.put(
        `${API_URL}/user/profile`,
        { userName: username },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
