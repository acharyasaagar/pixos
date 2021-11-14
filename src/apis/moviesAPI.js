import { apiUrl } from '../constants'

export const fetchMovies = async ({
  apiKey,
  baseUrl = apiUrl,
  uri = '/movie/popular',
  query = '',
}) => {
  const queryString = `?api_key=${apiKey}${query}`
  const moviesUrl = `${baseUrl}${uri}${queryString}`
  const response = await fetch(moviesUrl)
  const movies = await response.json()
  return movies
}
