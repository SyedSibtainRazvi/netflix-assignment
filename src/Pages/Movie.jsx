import React, { Fragment } from 'react'
import MovieRow from '../components/MovieRow'
import Requests from '../requests'

const Movie = () => {
  return (
    <Fragment>
      <MovieRow rowID='1' title='UpComing' fetchURL={Requests.requestUpcoming} />
      <MovieRow rowID='2' title='Popular' fetchURL={Requests.requestPopular} />
      <MovieRow rowID='3' title='Horror' fetchURL={Requests.requestHorror} />
    </Fragment>
  )
}

export default Movie