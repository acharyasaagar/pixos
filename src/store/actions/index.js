import { SET_UPCOMING_MOVIES } from './actionTypes'

export const setUpcomingMoviesAction = movies => ({
  type: SET_UPCOMING_MOVIES,
  data: movies,
})
