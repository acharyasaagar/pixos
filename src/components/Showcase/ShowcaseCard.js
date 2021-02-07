import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
  },
  cardActionArea: {
    padding: theme.spacing(2),
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    minHeight: '6rem',
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
  },
  watchButton: {
    marginRight: theme.spacing(1.5),
  },
}))

const ShowcaseCard = (props) => {
  const classes = useStyles()
  const { body, img } = props.card || {}

  return (
    <Card className={classes.card}>
      <CardActionArea
        component="a"
        href={body?.link}
        className={classes.cardActionArea}
      >
        <Grid
          container
          direction="row"
          spacing={3}
          justify="space-between"
          // alignItems="stretch"
        >
          <Grid item xs={3} md={5}>
            <div className="imageContainer">
              <div className={classes.imageWrapper}>
                <img
                  src={img?.src || '/static/svgs/grayimg.svg'}
                  alt={img?.alt || 'image'}
                  className={classes.image}
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={9}
            md={7}
            container
            justify="space-evenly"
            direction="column"
          >
            <Grid item>
              <Typography variant="h6">{body?.title}</Typography>
              <Typography variant="caption">{body?.subtitle}</Typography>
            </Grid>
            <Grid item container alignItems="center">
              {body?.link && (
                <>
                  <Typography variant="button" className={classes.watchButton}>
                    Watch trailer
                  </Typography>
                  <PlayCircleFilledIcon />
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ShowcaseCard
