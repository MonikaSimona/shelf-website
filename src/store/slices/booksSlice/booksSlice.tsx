import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const booksSlice = createSlice({
  name: "books",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export default booksSlice.reducer;
