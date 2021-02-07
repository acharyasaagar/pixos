import { combineReducers } from 'redux'

import upcomingMoviesReducer from './upcomingMovies'

const combinedReducer = combineReducers({
  upcomingMovies: upcomingMoviesReducer,
})

export default combinedReducer
