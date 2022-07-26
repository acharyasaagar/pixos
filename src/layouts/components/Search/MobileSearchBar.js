import React from 'react'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  searchBarContainer: {
    height: '6rem',
    overflow: 'hidden',
    width: '100vw',
    margin: 'auto',
    background: theme.palette.background.default,
  },
  searchInput: {
    width: '100%',
    height: '2.75rem',
    background: theme.palette.background.paper,
    outline: 'none',
    border: 'none',
    borderRadius: '2px',
    paddingLeft: '1em',
    fontSize: '1rem',
    fontFamily: theme.fontFamily,
    color: theme.palette.common.white,
  },
}))

const MobileSearchBar = props => {
  const { closeDrawer } = props
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.searchBarContainer}
      alignItems="center"
      justify="flex-end"
      spacing={0}
    >
      <Grid item xs={9}>
        <input
          className={classes.searchInput}
          placeholder="Search for movies"
        ></input>
      </Grid>
      <Grid item xs={2} container justify="center">
        <Grid item>
          <IconButton onClick={closeDrawer} color="primary">
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MobileSearchBar
