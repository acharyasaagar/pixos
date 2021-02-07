import React from 'react'

import TogglableChip from './TogglableChip'
// import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
// import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  sectionContainer: {
    padding: '2rem',
  },
})

const Section = props => {
  const { title } = props
  const classes = useStyles()

  const togglableChipProps = {
    leftChipProps: {
      color: 'primary',
      label: 'Movies',
    },
    rightChipProps: {
      color: 'primary',
      label: 'People',
      variant: 'outlined',
    },
  }

  return (
    <Paper className={classes.sectionContainer}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <TogglableChip {...togglableChipProps} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Section
