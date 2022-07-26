import React from 'react'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'

const fetchTopRatedMovies = () => fetchMovies('/movie/top_rated')

const TopRatedMoviesRouteLoader = () => {
  const { error, status } = useAsync(fetchTopRatedMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'success') return <p>top rated movies route</p>
  if (status === 'error') return <p>{error}</p>
  return <p>something went wrong</p>
}

export default TopRatedMoviesRouteLoader
