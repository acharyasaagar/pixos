import React from 'react'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'

const MovieGrid = ({ movies }) => {
  return (
    <Grid container spacing={4} wrap="wrap" justify="space-between">
      {movies.map((movie) => {
        return (
          <Grid item key={movie.title}>
            <MovieCard
              key={movie.title}
              title={movie.title}
              subtitle={movie.subtitle}
              imgSrc={movie.backdrop}
              trendingIndex={undefined}
              trailerButton={false}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default MovieGrid
