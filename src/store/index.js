import { combineReducers, configureStore } from '@reduxjs/toolkit'

import upcomingMovies from './slices/upcomingMovies'

const rootReducer = combineReducers({
  upcomingMovies,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
