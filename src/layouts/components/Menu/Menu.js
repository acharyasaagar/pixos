import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'
import MenuTopbar from './MenuTopbar'
import MenuList from './MenuList'
import { paramCase } from 'param-case'
import { makeStyles } from '@material-ui/core/styles'
import { MOVIE_CATEGORIES, MOVIE_GENRES } from '../../../constants'

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    minHeight: '100vh',
    minWidth: '90vw',
    paddingTop: '10vh',
  },
  menuListContainer: {
    marginTop: '5vh',
  },
}))

const Menu = (props) => {
  const { closeDrawer } = props
  const classes = useStyles()
  const categoryListItems = MOVIE_CATEGORIES.map((category) =>
    makeListItem({ name: category }, '/movies')
  )

  const genreListItems = MOVIE_GENRES.map((genre) =>
    makeListItem(genre, '/genres')
  )

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
                listItems={categoryListItems}
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

const makeListItem = ({ id, name }, hrefPrefix = '') => ({
  id: id || name,
  label: name,
  href: `${hrefPrefix}/${id || paramCase(name)}`,
})

export default Menu
