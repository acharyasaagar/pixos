import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import ShowcaseCarousel from './Carousel/Carousel'
import ShowcaseCard from './ShowcaseCard'

const useStyles = makeStyles(theme => ({
  showcaseGrid: {
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
}))

const ShowcaseCarouselGrid = props => {
  const classes = useStyles()
  const { carousel, cards } = props
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={4}
      className={classes.showcaseGrid}
    >
      <Grid item xs={12} md={7}>
        <ShowcaseCarousel carousel={carousel}></ShowcaseCarousel>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        container
        direction="column"
        justify="space-between"
      >
        {cards.map(card => (
          <Grid item>
            <ShowcaseCard card={card}></ShowcaseCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ShowcaseCarouselGrid
