import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../../apis/moviesAPI'
import { apiKey } from '../../constants'
import { getMovieData } from './utils'

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const uri = '/movie/upcoming'
      const responseData = await fetchMovies({ apiKey, uri })
      const results = responseData.results
      const movies = results.map((movie) => getMovieData(movie))
      setUpcomingMovies(movies)
    }

    fetchUpcomingMovies()
  }, [])

  return (
    <div>
      <ul>
        {upcomingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UpcomingMovies
