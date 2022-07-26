export const getFullImagePath = (path, width = '500') => {
  return `https://image.tmdb.org/t/p/w${width}/${path}`
}

export const getMovieData = (movie = {}, options = {}) => {
  const { id, title, backdrop_path, poster_path, release_date } = movie
  const { backdropWidth = '1280', posterWidth = '500' } = options
  const backdrop = getFullImagePath(backdrop_path, backdropWidth)
  const poster = getFullImagePath(poster_path, posterWidth)
  const releaseDate = new Date(release_date).toDateString()

  return {
    id,
    title,
    backdrop,
    poster,
    releaseDate,
  }
}
