import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Logo from './components/Logo'
import MenuDrawer from './components/Menu/MenuDrawer'
import SearchBar from './components/Search/SearchBar'
import MobileSearchDrawer from './components/Search/MobileSearchDrawer'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    margin: '0 auto',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.navbarContainer} maxWidth="lg">
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={8} sm={2}>
          <Logo />
        </Grid>
        <Hidden xsDown>
          <Grid item sm={9} container justify="center">
            <SearchBar />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={2} sm={1}>
            <MobileSearchDrawer />
          </Grid>
        </Hidden>
        <Grid item xs={1} sm={1} container justify="flex-end">
          <MenuDrawer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default NavBar
