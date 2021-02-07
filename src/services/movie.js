import Axios from '../Axios'

export const fetchUpcomingMovies = async (requestConfig = {}) => {
  console.log('hello')
  const response = await Axios.get('/movie/upcoming', requestConfig)
  console.log(response)
  return response
}

export const formatMovie = (movie) => ({
  body: {
    title: movie?.title,
    subtitle: movie?.release_date,
    link: `/${movie?.id}`,
  },
  img: {
    src: `http://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`,
    alt: movie?.title,
  },
})
