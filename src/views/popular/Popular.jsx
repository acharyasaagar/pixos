import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MovieGrid from '../../components/MovieGrid'

const Popular = ({ movies }) => {
  return (
    <>
      <Box pt={2} pb={6}>
        <Typography variant="h1">Popular movies</Typography>
      </Box>
      <MovieGrid movies={movies} />
    </>
  )
}

export default Popular
