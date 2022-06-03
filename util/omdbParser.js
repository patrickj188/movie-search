
export function buildMovieSearchResponse(data) {
  return {
    title: data.Title,
    year: data.Year,
    movieId: data.imdbID,
    img: data.Poster,
  }
}
