import React from 'react'
import MovieRow from '../components/MovieRow'
import requests from '../requests'

const TvShows = () => {
    return (
        <>
            <MovieRow rowID='1' title='Top Rated' fetchURL={requests.requestTopRated} />
            <MovieRow rowID='2' title='Trending' fetchURL={requests.requestTrending} />
            <MovieRow rowID='3' title='UpComing' fetchURL={requests.requestUpcoming} />
            <MovieRow rowID='4' title='Popular' fetchURL={requests.requestPopular} />
            <MovieRow rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default TvShows