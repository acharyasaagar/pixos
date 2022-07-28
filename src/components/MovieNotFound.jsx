import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const MovieNotFound = () => {
  return (
    <div
      style={{
        height: '60vh',
        widht: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F9F871',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h1" style={{ fontSize: 96 }}>
          404
        </Typography>
        <Typography variant="h1">Sorry there is nothing here!</Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<ArrowBack size={18} />}
          style={{ marginTop: 30 }}
          component={Link}
          to="/"
        >
          Go Home
        </Button>
      </div>
    </div>
  )
}

export default MovieNotFound
