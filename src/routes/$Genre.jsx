import React from 'react'
import GenreView from '../views/genre'
import { useParams } from 'react-router-dom'
import { fetchMovies } from '../apis/movie-api'
import { useAsync } from '../hooks/use-async'
import { getMovieData } from '../utils'
import { MOVIE_GENRES } from '../constants'
import MovieNotFound from '../components/MovieNotFound'

const GenreRoute = () => {
  const { genre } = useParams()
  const fetchMoviesByGenre = React.useCallback(() => {
    return fetchMovies('/movie/popular').then((response) => {
      return response.results
        .filter((movie) => {
          return movie.genre_ids.includes(Number(genre))
        })
        .map(getMovieData)
    })
  }, [genre])
  const genreObj = MOVIE_GENRES.find(({ id }) => id === Number(genre))
  const genreName = genreObj?.name || 'Unknown genre'
  const { data: movies, error, status } = useAsync(fetchMoviesByGenre)

  if (status === 'pending') return <p>pending</p>
  if (status === 'error') return <p>{error}</p>
  if (status === 'success' && (!movies || !movies.length)) {
    return <MovieNotFound />
  }
  if (status === 'success' && movies?.length) {
    return <GenreView movies={movies} genreName={genreName} />
  }
  return null
}

export default GenreRoute
