import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'opacity 2s',
  },
}))

const CarouselImage = (props) => {
  const { src, alt } = props
  const classes = useStyles()
  return (
    <div className={classes.imageWrapper}>
      <img
        src={src || '/static/svgs/grayimg.svg'}
        alt={alt || 'image'}
        className={classes.image}
      />
    </div>
  )
}

export default CarouselImage
