import { Slide, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const CarouselImage = ({ src, title }) => {
  const classes = useStyles()
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const cb = () => setFadeIn(true)
    const intervalId = setInterval(cb, 1000)
    return () => {
      clearTimeout(intervalId)
    }
  }, [])

  if (!src) return 'loading'

  return (
    <Slide direction="right" in={fadeIn}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={src} alt={title} />
      </div>
    </Slide>
  )
}

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: 560,
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    width: '100%',
    minHeight: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
  },
}))

export default CarouselImage
