import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import ShowcaseCarousel from './Carousel/Carousel'
import ShowcaseCard from './ShowcaseCard'

const useStyles = makeStyles(theme => ({
  showcase: {
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  showcaseCard: {
    marginBottom: theme.spacing(10),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}))

const Showcase = props => {
  const classes = useStyles()
  const { carousel, card } = props
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={4}
      className={classes.showcase}
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
        {[card, card, card].map(c => (
          <Grid item>
            <ShowcaseCard card={c}></ShowcaseCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Showcase
