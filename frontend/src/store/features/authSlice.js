import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const verifyUser = createAsyncThunk("auth/verifyUser", async () => {
  try {
    const response = await axios.get(`/api/user/verify-user`, {
      withCredentials: true, 
    });
    if(response.data.success) {
      return response.data.data;
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null; 
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.user = action.payload ? { username: action.payload } : null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
