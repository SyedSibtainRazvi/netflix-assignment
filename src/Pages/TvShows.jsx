import React, { useEffect } from "react";
import MovieListing from "../components/TV/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movieSlice";
const TvShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default TvShows;