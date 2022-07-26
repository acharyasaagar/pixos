import React from 'react'
import MovieCard from '../../components/MovieCard'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Popular = ({ movies }) => {
  return (
    <>
      <Box pt={2} pb={6}>
        <Typography variant="h1">Popular movies</Typography>
      </Box>
      <Grid container spacing={4} wrap="wrap" justify="space-between">
        {movies.map((movie) => {
          return (
            <Grid item key={movie.title}>
              <MovieCard
                key={movie.title}
                title={movie.title}
                subtitle={movie.subtitle}
                imgSrc={movie.backdrop}
                trendingIndex={1}
                trailerButton={true}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Popular
