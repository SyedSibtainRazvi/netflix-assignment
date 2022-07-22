import { useSelector } from "react-redux";


import Banner from "../components/common/Banner";

import { BannerState } from "../Redux/Reducers/bannerShow";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import TvShow from "./TvShow";

const AppRoutes = () => {
  const banner = useSelector(BannerState);

  return (
    <>
      {banner && (
        <div>
          <Banner />
        </div>
      )}
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/tvshows" element={<TvShow/>}/>
     </Routes>
    </>
  );
};

export default AppRoutes;