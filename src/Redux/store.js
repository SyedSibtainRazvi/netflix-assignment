import { configureStore } from "@reduxjs/toolkit";
import bannerShow from "../Redux/Reducers/bannerShow";
import moviesSlice from "../Redux/Reducers/movieSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
    banner: bannerShow,
  },

  //Included Default Middleware​[fix the bug]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});