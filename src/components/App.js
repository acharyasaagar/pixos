import React from 'react'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './Nav/Navbar'

const useStyles = makeStyles(theme => ({
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
        <h1>Upcoming Movies</h1>
      </Container>
    </>
  )
}

export default App
