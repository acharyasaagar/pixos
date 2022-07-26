import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './layouts/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { Routes, Route } from 'react-router-dom'

const HomeView = React.lazy(() => import('./routes/Home'))
const NowPlayingView = React.lazy(() => import('./routes/NowPlaying'))
const PopularView = React.lazy(() => import('./routes/Popular'))
const TopRatedView = React.lazy(() => import('./routes/TopRated'))
const UpcomingView = React.lazy(() => import('./routes/Upcoming'))

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
          <Route path="/" element={<HomeView />} />
          <Route path="/movies/top-rated" element={<TopRatedView />} />
          <Route path="/movies/upcoming" element={<UpcomingView />} />
          <Route path="/movies/now-playing" element={<NowPlayingView />} />
          <Route path="/movies/popular" element={<PopularView />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
