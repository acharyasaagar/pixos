import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tileContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    boxShadow: 'none',
    borderRadius: 0,
  },
  actionArea: {
    padding: theme.spacing(2, 3),
  },
}))

const CarouselTile = () => {
  const classes = useStyles()
  return (
    <Card className={classes.tileContainer}>
      <CardActionArea className={classes.actionArea}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h5" color="primary">
              The hunting of bly manor
            </Typography>
            <Typography variant="body1" component="p" color="primary">
              Oct 29, 2020
            </Typography>
          </Grid>
          <Grid item>
            <PlayCircleFilledIcon fontSize="large" color="primary" />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default CarouselTile
