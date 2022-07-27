import React from "react";
import Banner from "../components/common/Banner";

import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import TvShow from "./TvShow";
import Popular from "./Popular";

const AppRoutes = () => {

  return (
    <>
      <Banner />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/tvshows" element={<TvShow/>}/>
      <Route path="/popular" element={<Popular/>}/>
     </Routes>
    </>
  );
};

export default AppRoutes;