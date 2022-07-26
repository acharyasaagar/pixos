import React from 'react'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'

const fetchNowPlayingMovies = () => fetchMovies('/movie/now_playing')

const NowPlayingMoviesRouteLoader = () => {
  const { error, status } = useAsync(fetchNowPlayingMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'success') return <p>now playing route</p>
  if (status === 'error') return <p>{error}</p>
  return null
}

export default NowPlayingMoviesRouteLoader
