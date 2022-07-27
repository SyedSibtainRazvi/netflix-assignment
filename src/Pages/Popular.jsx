import React, { Fragment } from 'react'
import MovieRow from '../components/MovieRow'
import Requests from '../requests'

const Popular = () => {
  return (
    <Fragment>
      <MovieRow rowID='2' title='Popular Movies' fetchURL={Requests.requestPopular} />
      <MovieRow rowID='2' title='Popular Tv Show' fetchURL={Requests.fetchTvPopular} />

    </Fragment>
  )
}

export default Popular