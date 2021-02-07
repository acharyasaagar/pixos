import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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

const CarouselTile = (props) => {
  const { title, subtitle, link } = props
  const classes = useStyles()
  return (
    <Card className={classes.tileContainer}>
      <CardActionArea className={classes.actionArea} component="a" href={link}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={11}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              className={classes.fadeText}
            >
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="primary">
              {subtitle}
            </Typography>
          </Grid>
          {link && (
            <>
              <Grid item xs={1}>
                <PlayCircleFilledIcon fontSize="large" color="primary" />
              </Grid>
            </>
          )}
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default CarouselTile
