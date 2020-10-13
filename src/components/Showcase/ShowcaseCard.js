import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '100%',
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
  watchButton: {
    marginRight: theme.spacing(1.5),
  },
}))

const ShowcaseCard = props => {
  const classes = useStyles()
  const {
    card: { body, img },
  } = props
  return (
    <Card>
      <CardActionArea component="a" href={body.link}>
        <Grid
          container
          direction="row"
          spacing={3}
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={5}>
            <div className={classes.imageWrapper}>
              <img src={img.src} alt={img.alt} className={classes.image} />
            </div>
          </Grid>
          <Grid item xs={7} container justify="space-evenly" direction="column">
            <Grid item>
              <Typography variant="h6">{body.title}</Typography>
              <Typography variant="caption">{body.subtitle}</Typography>
            </Grid>
            <Grid item container alignItems="center">
              <Typography variant="button" className={classes.watchButton}>
                Watch trailer
              </Typography>
              <PlayCircleFilledIcon />
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ShowcaseCard
