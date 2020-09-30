import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'

import MenuTopbar from './MenuTopbar'
import MenuList from './MenuList'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menuWrapper: {
    minHeight: '100vh',
    minWidth: '90vw',
    paddingTop: '10vh',
  },
  menuListContainer: {
    marginTop: '5vh',
  },
}))

const Menu = props => {
  const { closeDrawer } = props

  const movieListItems = ['Popular', 'Now Playing', 'Upcoming', 'Top Rated']
  const genreListItems = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Western',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'War',
    'Science and Fiction',
    'TV Movie',
    'Thriller',
  ]

  const classes = useStyles()

  return (
    <div className={classes.menuWrapper}>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Grid item>
            <MenuTopbar closeDrawer={closeDrawer} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            spacing={2}
            className={classes.menuListContainer}
          >
            <Grid item>
              <MenuList
                title="Movies"
                Icon={LocalMoviesIcon}
                listItems={movieListItems}
              ></MenuList>
            </Grid>
            <Grid item>
              <MenuList
                title="Genres"
                Icon={LocalMoviesIcon}
                listItems={genreListItems}
              ></MenuList>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Menu
