export const baseUrl = "https://api.themoviedb.org/3";
export const API_KEY = "d03799692be1c26faf0ade18a4205f9f";

// helper functions
export async function getPopularMovies(page = 1) {
  const res = await fetch(
    `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

export async function searchMovies(query, page = 1) {
  const res = await fetch(
    `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
  return res.json();
}
