import React from 'react'
import MovieRow from '../components/MovieRow'
import requests from '../requests'

const TvShows = () => {
    return (
        <>
            <MovieRow rowID='1' title='Top Rated' fetchURL={requests.fetchTvTop} />
            <MovieRow rowID='2' title='Airing Today' fetchURL={requests.fetchTvAiring} />
            <MovieRow rowID='3' title='Popular' fetchURL={requests.fetchTvPopular} />
        </>
    )
}

export default TvShows