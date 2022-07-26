import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './layouts/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { Routes, Route } from 'react-router-dom'

const HomeRoute = React.lazy(() => import('./routes/Home'))
const NowPlayingRoute = React.lazy(() => import('./routes/NowPlaying'))
const PopularRoute = React.lazy(() => import('./routes/Popular'))
const TopRatedRoute = React.lazy(() => import('./routes/TopRated'))
const UpcomingRoute = React.lazy(() => import('./routes/Upcoming'))

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
      <CssBaseline />
      <Navbar />
      <Container className={classes.container}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/movies/top-rated" element={<TopRatedRoute />} />
          <Route path="/movies/upcoming" element={<UpcomingRoute />} />
          <Route path="/movies/now-playing" element={<NowPlayingRoute />} />
          <Route path="/movies/popular" element={<PopularRoute />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
