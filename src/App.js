import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Nav from './components/Nav/Navbar'
import UpcomingMovies from './screens/home/UpcomingMovies'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    background: theme.palette.background.default,
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline></CssBaseline>
      <Nav />
      <Container className={classes.container}>
        <UpcomingMovies />
      </Container>
    </>
  )
}

export default App
