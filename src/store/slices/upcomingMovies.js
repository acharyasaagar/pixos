import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchUpcomingMovies, formatMovie } from '../../services/movie'

export const getUpcomingMovies = createAsyncThunk(
  'getUpcomingMoviesStatus',
  async function (_, { rejectWithValue }) {
    console.log('response is ')
    const upcomingMoviesResponse = await fetchUpcomingMovies()
    if (upcomingMoviesResponse.status !== 200) {
      rejectWithValue('Error fetching upcoming movies')
    }
    return upcomingMoviesResponse.data.results.map(formatMovie)
  }
)

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState: { upcomingMovies: [], error: false },
  reducers: {
    rotateUpcomingMovies(state) {
      const [currentCarouselMovie, ...rest] = state.upcomingMovies
      state.upcomingMovies = [...rest, currentCarouselMovie]
    },
  },
  extraReducers: {
    [getUpcomingMovies.fulfilled]: function (state, action) {
      state.upcomingMovies = action.payload
    },
    [getUpcomingMovies.rejected]: function (state, action) {
      state.err = action.err
    },
    [getUpcomingMovies.pending]: function (state, action) {
      console.log(action)
    },
  },
})

export const { rotateUpcomingMovies } = upcomingMoviesSlice.actions

export default upcomingMoviesSlice.reducer
