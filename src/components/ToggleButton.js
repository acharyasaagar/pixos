import React from 'react'

import MuiToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    textTransform: 'Capitalize',
    borderRadius: '99px',
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    '&.Mui-selected': {
      background: theme.palette.primary.main,
      color: theme.palette.common.black,
      transition: 'all 0.3s',
      '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.palette.common.black,
        opacity: 0.8,
        boxShadow: theme.shadows[3],
      },
    },
  },
}))

const ToggleButton = props => {
  const { toggleValue, handleToggle } = props
  const classes = useStyles()

  return (
    <ToggleButtonGroup
      value={toggleValue}
      exclusive
      onChange={handleToggle}
      className={classes['MuiToggleButtonGroup-root']}
    >
      <MuiToggleButton
        value="Movies"
        selected
        classes={{ root: classes.root, selected: classes.selected }}
      >
        <Typography variant="body1" color="inherit">
          Movies
        </Typography>
      </MuiToggleButton>
      <MuiToggleButton
        value="People"
        className={classes.toggleButton}
        classes={{ root: classes.root, selected: classes.selected }}
      >
        <Typography variant="body1" color="inherit">
          People
        </Typography>
      </MuiToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleButton
