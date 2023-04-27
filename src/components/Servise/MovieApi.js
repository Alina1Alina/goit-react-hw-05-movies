import axios from 'axios';

const API_KEY = '009928c36932c9751821c9f2dabdc322';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const MovieSearchApi = async value => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${value}`
  );
  return data.data;
};

export const getMovieDetails = async (movieId, info) => {
  const data = await axios.get(`/movie/${movieId}${info}?api_key=${API_KEY}`);
  return data.data;
};

export const getImages = async () => {
  const data = await axios.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};

