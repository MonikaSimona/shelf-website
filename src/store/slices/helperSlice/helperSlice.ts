import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HelperState {
  noSuchTerm: boolean;
}
const initialState: HelperState = {
  noSuchTerm: false,
};
export const helperSlice = createSlice({
  name: "helperSlice",
  initialState: initialState,
  reducers: {
    setNoSuchTerm: (state: HelperState, action: PayloadAction<boolean>) => {
      state.noSuchTerm = action.payload;
    },
  },
});

export const { setNoSuchTerm } = helperSlice.actions;
export default helperSlice.reducer;
