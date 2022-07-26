import React from 'react'
import TopRatedView from '../views/top-rated'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'

const fetchTopRatedMovies = () => {
  return fetchMovies('/movie/top_rated').then((response) => {
    console.log(response.results)
    return response.results.map(getMovieData)
  })
}

const TopRatedMoviesRoute = () => {
  const { data: movies = [], error, status } = useAsync(fetchTopRatedMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && movies?.length) {
    return <TopRatedView movies={movies} />
  }
  return null
}

export default TopRatedMoviesRoute
