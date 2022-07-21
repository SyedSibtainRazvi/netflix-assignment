import React, { Fragment } from 'react'
import MovieRow from '../components/MovieRow'
import Requests from '../requests'

const TvShow = () => {
  return (
    <Fragment>
      <MovieRow rowID='1' title='Airing Now' fetchURL={Requests.fetchTvAiring} />
      <MovieRow rowID='2' title='Popular' fetchURL={Requests.fetchTvPopular} />
      <MovieRow rowID='3' title='Top Tv' fetchURL={Requests.fetchTvTop} />
    </Fragment>
  )
}

export default TvShow