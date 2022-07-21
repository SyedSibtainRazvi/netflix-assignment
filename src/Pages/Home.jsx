import React, { Fragment } from 'react'
import MovieRow from '../components/MovieRow'
import Requests from '../requests'

const Home = () => {
  return (
    <Fragment>
      <MovieRow rowID='1' title='Trending' fetchURL={Requests.requestTrending} />
      <MovieRow rowID='2' title='Top Rated' fetchURL={Requests.requestTopRated} />
    </Fragment>
  )
}

export default Home