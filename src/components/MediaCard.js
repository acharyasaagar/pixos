import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 225,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  'MuiCardContent-root': {
    padding: 20,
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  title: {
    marginBottom: '0',
  },
  subtitle: {
    margin: 0,
    paddingBottom: theme.spacing(0.5),
  },
  avatar: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
  watchTrailerButton: {
    marginLeft: 12,
    marginBottom: 16,
  },
}))

const WatchTrailerButton = props => {
  const classes = useStyles()
  return (
    <Button
      color="primary"
      endIcon={<PlayCircleFilledIcon />}
      className={classes.watchTrailerButton}
    >
      Watch Trailer
    </Button>
  )
}

const showTrailerButton = () => <WatchTrailerButton />

const TrendingIndexAvatar = props => {
  const classes = useStyles()
  const { index } = props
  return (
    <Avatar variant="square" className={classes.avatar}>
      <Typography variant="h1" component="h1">
        {index}
      </Typography>
    </Avatar>
  )
}

const MediaCard = props => {
  const { title, subtitle, imgSrc, trendingIndex, trailerButton } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={title}
        height="195"
        image={imgSrc}
        title={title}
      />
      <Grid container wrap="nowrap">
        {trendingIndex && (
          <Grid item xs={3}>
            {<TrendingIndexAvatar index={trendingIndex} />}
          </Grid>
        )}
        <Grid item>
          <CardContent className={classes['MuiCardContent-root']}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="primary"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
              color="primary"
              component="span"
              className={classes.subtitle}
            >
              {subtitle}
            </Typography>
          </CardContent>
        </Grid>
        {trailerButton && showTrailerButton()}
      </Grid>
    </Card>
  )
}

export default MediaCard
