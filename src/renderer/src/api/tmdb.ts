import { TMDB } from "@tdanks2000/tmdb-wrapper";
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTlmNjFmZjRmNjVhYWRkODkzY2NmZTNkZTVmZGM2MyIsIm5iZiI6MTcxODQ0MzgyMC44NTUsInN1YiI6IjY2NmQ1ZjJjNWI3MTcwNTliZGE3Y2NmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kKzgbixXgO4SV57qNlLJRvxcZv8rt9A6vDi6OZKwTcI'
const tmdb = new TMDB(ACCESS_TOKEN)
const TMDB_IMG_URL = 'https://image.tmdb.org/t/p/w500'
export { tmdb, TMDB_IMG_URL }
