import React from 'react'
import UpcomingView from '../views/upcoming'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'

const fetchUpcomingMovies = async () => {
  return fetchMovies('/movie/upcoming').then((response) => {
    return response.results.map(getMovieData)
  })
}
const UpcomingMoviesRoute = () => {
  const { data: movies = [], error, status } = useAsync(fetchUpcomingMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && movies?.length) {
    return <UpcomingView movies={movies} />
  }
  return <p>something went wrong</p>
}

export default UpcomingMoviesRoute
