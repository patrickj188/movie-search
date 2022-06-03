import { buildMovieSearchResponse } from './omdbParser';


// simple object to interact with and abstract api functions from component code
const api = {
  OmdbBaseUrl: 'http://www.omdbapi.com',
  // MongoBaseUrl: '',
  currentPages: {
    popularMovies: 1,
  },

  fetchMovies: async function(opts) {
    const params = {
      s: 'batman',
      // t: opts.imbdID,
      // y: '2022',
      page: opts.page,
      type: 'movie',
      // page: this.currentPages.popularMovies,
      apiKey: process.env.NEXT_PUBLIC_OMDB_API_TOKEN,
    };
    const res = await fetch(`${this.OmdbBaseUrl}/?${new URLSearchParams(params).toString()}`);
    const data = await res.json();
    if (!Array.isArray(data.Search)) {
      return [];
    }

    return data.Search.map((x) => buildMovieSearchResponse(x))
  },
}

export default api;