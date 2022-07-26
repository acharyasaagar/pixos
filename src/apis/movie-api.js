import api from '../api'

export const fetchMovies = (uri = '/movie/popular', config) => {
  return api
    .get(uri, config)
    .then((res) => res.data)
    .catch((err) => err.message)
}

export const fetchMovie = (movieId, config) => {
  return api
    .get(`/movie/${movieId}`, config)
    .then((res) => res.data)
    .catch((err) => err.message)
}
