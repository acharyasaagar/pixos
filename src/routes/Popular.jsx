import React from 'react'
import PopularView from '../views/popular'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'

const fetchPopularMovies = () => {
  return fetchMovies('/movie/popular').then((response) => {
    console.log(response.results)
    return response.results.map(getMovieData)
  })
}

const PopularMoviesRoute = () => {
  const { data: movies, error, status } = useAsync(fetchPopularMovies)
  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && movies?.length) {
    return <PopularView movies={movies} />
  }
  return null
}

export default PopularMoviesRoute
