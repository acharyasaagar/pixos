import React from 'react'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import ShowcaseCarouselGrid from './ShowcaseCarouselGrid'

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
  return (
    <div className={classes.showcase}>
      <Typography variant="h1" className={classes.showcaseHeader}>
        Upcoming Movies
      </Typography>
      <ShowcaseCarouselGrid />
    </div>
  )
}

export default Showcase
