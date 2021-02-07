import movieService from '../../services/movie'

import { setUpcomingMoviesAction } from '../actions/index'

export const setUpcomingMovies = () => {
  return async dispatch => {
    try {
      const movies = await movieService.getUpcomingMovies()
      return dispatch(setUpcomingMoviesAction(movies.results))
    } catch (err) {
      console.log(err)
    }
  }
}
