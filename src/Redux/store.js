import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../Redux/Reducers/movieSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
  },
});