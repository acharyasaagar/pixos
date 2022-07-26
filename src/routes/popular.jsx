import React from 'react'
import PopularView from '../views/popular'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'

const fetchPopularMovies = () => fetchMovies('/movie/popular')

const PopularMoviesRoute = () => {
  const { data: movies, error, status } = useAsync(fetchPopularMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && movies?.length) return <PopularView />
  return null
}

export default PopularMoviesRoute
