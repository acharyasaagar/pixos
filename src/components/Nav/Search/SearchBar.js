import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  searchBarContainer: {
    height: '2.1rem',
    borderRadius: '3rem',
    overflow: 'hidden',
    width: '40vw',
    minWidth: '320px',
    maxWidth: '460px',
    justifySelf: 'center',

    [theme.breakpoints.up('sm')]: {
      height: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '2.8rem',
    },
  },
  searchInput: {
    width: '100%',
    height: '100%',
    outline: 'none',
    border: 'none',
    paddingLeft: '1.5em',
    fontSize: '1rem',
    fontFamily: theme.fontFamily,
    color: theme.palette.background.default,
  },
  searchButton: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    fontSize: '1rem',
    paddingLeft: '0.8em',
    paddingRight: '0.8em',
    boxShadow: 'none',
    textTransform: 'capitalize',
  },
}))

const SearchBar = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.searchBarContainer}>
      <Grid item xs={8}>
        <input className={classes.searchInput}></input>
      </Grid>
      <Grid item xs={4}>
        <Button
          className={classes.searchButton}
          startIcon={<SearchRoundedIcon />}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}

export default SearchBar
