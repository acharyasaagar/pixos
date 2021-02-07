import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import ShowcaseCarouselGrid from './ShowcaseCarouselGrid'
import { setUpcomingMovies } from '../../store/asyncActions'
import { getCarouselDataFromMovie } from '../../helpers'
import { setUpcomingMoviesAction } from '../../store/actions'

const useStyles = makeStyles(theme => ({
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
  const upcomingMovies = useSelector(state => state.upcomingMovies)
  const carouselMovie = getCarouselDataFromMovie(upcomingMovies[0])
  const [carousel, setCarousel] = useState(carouselMovie)

  const populateUpcomingMovies = () => {
    dispatch(setUpcomingMovies())
  }

  //Rotate upcoming movies
  // const rotatedMovies = upcomingMovies.slice(1).concat(upcomingMovies[0])
  // console.log(rotatedMovies)
  // const rotateUpcomingMovies = () =>
  //   dispatch(setUpcomingMoviesAction(rotatedMovies))
  // setInterval(rotateUpcomingMovies, 10000)

  useEffect(populateUpcomingMovies, [])

  const cards = upcomingMovies
    ?.filter((movie, index) => index > 0 && index < 4) // show 1, 2, 3 indexes beside the main image
    ?.map(movie => {
      return {
        body: {
          title: movie?.title,
          subtitle: movie?.release_date,
          link: '#',
        },
        img: {
          src: `http://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`,
          alt: movie?.title,
        },
      }
    })
  return (
    <div className={classes.showcase}>
      <Typography variant="h1" className={classes.showcaseHeader}>
        Upcoming Movies
      </Typography>
      <ShowcaseCarouselGrid carousel={carouselMovie} cards={cards} />
    </div>
  )
}

export default Showcase
