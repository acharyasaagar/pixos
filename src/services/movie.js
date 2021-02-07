import Axios from '../Axios'

const getUpcomingMovies = async (requestConfig = {}) => {
  const movies = await Axios.get('/movie/upcoming', requestConfig)
  return movies.data
}

export default { getUpcomingMovies }
