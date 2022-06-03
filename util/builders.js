
export function buildMovieOmdbSearchResponse(data) {
  return {
    title: data.Title,
    year: data.Year,
    movieId: data.imdbID,
    img: data.Poster,
  }
}

export function buildMovieFromJson(data) {
  return {
    movieId: data.id,
    title: data.title,
    year: data.year,
    img: data.image,
  }
}