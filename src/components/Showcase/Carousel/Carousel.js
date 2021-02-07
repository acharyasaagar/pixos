import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CarouselImage from './CarouselImage'
import CarouselTile from './CarouselTile'

const useStyles = makeStyles(theme => ({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    borderRadius: theme.spacing(0.5),
    height: '28.8rem',
    [theme.breakpoints.down('sm')]: {
      height: '16rem',
    },
  },
}))

const Carousel = props => {
  const { tile = {}, img = {} } = props.carousel || {}
  const classes = useStyles()
  return (
    <div className={classes.carousel}>
      <CarouselImage {...img} />
      <CarouselTile {...tile} />
    </div>
  )
}

export default Carousel
