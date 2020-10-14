import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageWrapper: {
    width: '100%',
    position: 'relative',
    paddingTop: '75%',
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
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
