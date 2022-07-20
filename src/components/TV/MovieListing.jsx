import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from '../../features/movieSlice';
import MovieCard from "../TV/MovieCard";


const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <>
      <div>
        <h2 className='text-white font-bold md:text-xl p-4'>Shows</h2>
        <div className='relative flex items-center group'>
          
          <div
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {renderMovies}
          </div>
          <div
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {renderShows}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MovieListing;
