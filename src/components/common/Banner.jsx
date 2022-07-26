import { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  NetflixOriginals,
  fetchNetflixOriginals,
} from "../../Redux/Reducers/movieSlice";


const Banner = () => {
  const randomInfo = useSelector(NetflixOriginals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNetflixOriginals());
  }, [dispatch]);


  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <Fragment>
      <div
        className='w-full h-[450px] text-white'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${randomInfo?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="ml-[30px] pt-[140px] h-[190px]">
          <h1 className="text-[3rem] font-bold pb-[0.3rem]">
            {randomInfo?.title || randomInfo?.name || randomInfo?.original_name}
          </h1>
          <div className='my-4'>
            <button className='border rounded bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border rounded text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {randomInfo?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg: max-w-50[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(randomInfo?.overview, 140)}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;