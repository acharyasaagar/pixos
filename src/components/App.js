import React from 'react'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './Nav/Navbar'
import Showcase from './Showcase/Showcase'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    background: theme.palette.background.default,
  },
}))

const App = () => {
  const classes = useStyles()
  // const cardItem = {
  //   title: 'Somebody ',
  //   subtitle: 'Acting Direction',
  //   imgSrc: '/static/images/pic.jpg',
  //   trendingIndex: 9,
  //   trailerButton: false,
  // }

  return (
    <>
      <CssBaseline></CssBaseline>
      <Nav />
      <Container className={classes.container}>
        <Showcase />
      </Container>
    </>
  )
}

export default App
