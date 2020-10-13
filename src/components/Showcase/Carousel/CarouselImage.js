import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageWrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
}))

const CarouselImage = props => {
  const { src, alt } = props
  const classes = useStyles()
  return (
    <div className={classes.imageWrapper}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  )
}

export default CarouselImage
