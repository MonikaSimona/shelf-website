import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export default moviesSlice.reducer;
