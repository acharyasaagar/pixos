import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import { ArrowBack } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
  const navigate = useNavigate()
  const classes = useStyles()
  const { title, backdrop, description, genres, duration, releaseDate } = movie
  const goBack = () => navigate(-1)
  const goToGenre = (id) => navigate(`/genres/${id}`)
  return (
    <div>
      <Button startIcon={<ArrowBack />} component="span" onClick={goBack}>
        Back
      </Button>
      <Typography variant="h1">{title} </Typography>

      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={title}
          height="395"
          image={backdrop}
          title={title}
        />
      </Card>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2">{duration} Min</Typography>
      <Typography variant="body2">Releae: {releaseDate}</Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
      <div className={classes.genres}>
        {genres.map(({ id, name }) => (
          <Chip
            key={id}
            label={name}
            className={classes.chip}
            onClick={() => goToGenre(id)}
          />
        ))}
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  card: { marginTop: 24, marginBottom: 24 },
  description: { marginTop: 32, maxWidth: '50%' },
  genres: {
    display: 'flex',
    marginTop: 24,
    gap: '24px',
  },
  chip: {
    padding: '8px 24px',
    fontSize: 12,
    color: 'white',
    background: '#3A4665',
    fontWeight: 200,
  },
}))

export default MovieDetails
