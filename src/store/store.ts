import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";
import booksSlice from "./slices/booksSlice/booksSlice";
import moviesSlice from "./slices/moviesSlice/moviesSlice";
import tvshowsSlice from "./slices/tvshowsSlice/tvshowsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    books: booksSlice,
    movies: moviesSlice,
    tvshows: tvshowsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
