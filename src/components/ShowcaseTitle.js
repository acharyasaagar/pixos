import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  showCaseTitle: {
    margin: '2rem 0',
  },
})

const ShowcaseTitle = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.showCaseTitle} variant="h1">
      Upcoming Movies
    </Typography>
  )
}

export default ShowcaseTitle
