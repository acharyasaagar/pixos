import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import ShowcaseCarouselGrid from './ShowcaseCarouselGrid'
import {
  getUpcomingMovies,
  rotateUpcomingMovies,
} from '../../store/slices/upcomingMovies'

const useStyles = makeStyles((theme) => ({
  showcase: {
    margin: theme.spacing(4, 0),
  },
  showcaseHeader: {
    margin: theme.spacing(4, 0),
  },
}))

const Showcase = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { upcomingMovies } = useSelector((state) => state.upcomingMovies)

  const populateUpcomingMovies = () => {
    dispatch(getUpcomingMovies())
  }

  useEffect(populateUpcomingMovies, [])
  useEffect(() => {
    const interval = setInterval(() => dispatch(rotateUpcomingMovies()), 5000)
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.showcase}>
      <Typography variant="h1" className={classes.showcaseHeader}>
        Upcoming Movies
      </Typography>
      <ShowcaseCarouselGrid
        carousel={upcomingMovies.length ? upcomingMovies[0] : {}}
        cards={
          upcomingMovies.length ? upcomingMovies.slice(1, 4) : [{}, {}, {}] // three empty objects create fallback image ui
        }
      />
    </div>
  )
}

export default Showcase
