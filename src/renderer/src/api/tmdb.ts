import { TMDB } from '@tdanks2000/tmdb-wrapper'

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTlmNjFmZjRmNjVhYWRkODkzY2NmZTNkZTVmZGM2MyIsIm5iZiI6MTcxODQ0MzgyMC44NTUsInN1YiI6IjY2NmQ1ZjJjNWI3MTcwNTliZGE3Y2NmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kKzgbixXgO4SV57qNlLJRvxcZv8rt9A6vDi6OZKwTcI'

const tmdb = new TMDB(ACCESS_TOKEN)

// https://images.tmdb.org/t/p/original/iqg69qhSa09znkL9RiCO0VQgEM4.png
const TMDB_IMG_URL = 'https://images.tmdb.org/t/p/original'

export { TMDB_IMG_URL, tmdb }
