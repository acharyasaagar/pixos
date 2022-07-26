import React from 'react'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'

const fetchUpcomingMovies = async () => fetchMovies('/movie/top_rated')

const UpcomingMoviesRouteLoader = () => {
  const { error, status } = useAsync(fetchUpcomingMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'success') return <p>upcoming movies route</p>
  if (status === 'error') return <p>{error}</p>
  return <p>something went wrong</p>
}

export default UpcomingMoviesRouteLoader
