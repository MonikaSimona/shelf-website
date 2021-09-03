import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";
import helperSlice from "./slices/helperSlice/helperSlice";
import reviewItemsSlice from "./slices/reviewItemsSlice/reviewItemsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    reviewItems: reviewItemsSlice,
    helperSlice: helperSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
