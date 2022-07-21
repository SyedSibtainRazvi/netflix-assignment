import { configureStore } from "@reduxjs/toolkit";
import bannerShow from "../Redux/Reducers/bannerShow";
import moviesSlice from "../Redux/Reducers/movieSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
    banner: bannerShow,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }),
});