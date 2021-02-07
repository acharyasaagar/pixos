export const getCarouselDataFromMovie = movie => ({
  tile: {
    title: movie?.title,
    subtitle: movie?.release_date,
    link: `/${movie?.id}`,
  },
  img: {
    src: `http://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`,
    alt: movie?.title,
  },
})
