export const getFullImagePath = (path, width = '500') => {
  return `https://image.tmdb.org/t/p/w${width}/${path}`
}

export const getMovieData = ({
  id,
  title,
  backdrop_path,
  poster_path,
  release_date,
}) => {
  const backdrop = getFullImagePath(backdrop_path)
  const poster = getFullImagePath(poster_path)
  const releaseDate = new Date(release_date).toDateString()

  return {
    id,
    title,
    backdrop,
    poster,
    releaseDate,
  }
}
