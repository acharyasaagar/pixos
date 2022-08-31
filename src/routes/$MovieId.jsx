import React from 'react'
import MovieNotFound from '../components/MovieNotFound'
import MovieDetailsView from '../views/movie-details'

import { useParams } from 'react-router-dom'
import { fetchMovie } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'

const MovieDetailsRoute = () => {
  const { movieId } = useParams()
  const fetchMovieById = React.useCallback(() => fetchMovie(movieId), [movieId])
  const { data: movie, error, status } = useAsync(fetchMovieById)
  console.log(movie)

  if (status === 'pending') return <p>pending</p>
  if (status === 'success' && !movie) return <MovieNotFound />
  if (status === 'success' && movie) {
    return <MovieDetailsView movie={getMovieData(movie)} />
  }
  if (status === 'error') return <p>{error}</p>
  return null
}

export default MovieDetailsRoute
