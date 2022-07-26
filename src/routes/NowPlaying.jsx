import React from 'react'
import NowPlayingView from '../views/now-playing'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'

const fetchNowPlayingMovies = () => {
  return fetchMovies('/movie/now_playing').then((response) => {
    return response.results.map(getMovieData)
  })
}

const NowPlayingMoviesRoute = () => {
  const { data: movies = [], error, status } = useAsync(fetchNowPlayingMovies)

  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && movies?.length) {
    return <NowPlayingView movies={movies} />
  }
  return null
}

export default NowPlayingMoviesRoute
