import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CarouselImage from './CarouselImage'
import CarouselTile from './CarouselTile'

const useStyles = makeStyles(theme => ({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  },
}))

const Carousel = props => {
  const {
    carousel: { tile = {}, img = {} },
  } = props
  const classes = useStyles()
  return (
    <div className={classes.carousel}>
      <CarouselImage {...img} />
      <CarouselTile {...tile} />
    </div>
  )
}

export default Carousel
