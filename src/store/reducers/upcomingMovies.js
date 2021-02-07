import { SET_UPCOMING_MOVIES } from '../actions/actionTypes'

const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_UPCOMING_MOVIES:
      return [...action.data]
    default:
      return state
  }
}

export default upcomingMoviesReducer
