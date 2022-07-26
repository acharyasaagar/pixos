import React from 'react'

import { useParams } from 'react-router-dom'
import { fetchMovie } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'

const MovieDetailsRoute = () => {
  const { movieId } = useParams()
  const fetchMovieById = React.useCallback(() => fetchMovie(movieId), [movieId])
  const { data: movie, error, status } = useAsync(fetchMovieById)

  if (status === 'pending') return <p>pending</p>
  if (status === 'success' && movie) return <p>movie details route</p>
  if (status === 'error') return <p>{error}</p>
  return null
}

export default MovieDetailsRoute
