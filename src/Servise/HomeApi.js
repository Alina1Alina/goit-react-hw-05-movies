import axios from 'axios';

const API_KEY = '009928c36932c9751821c9f2dabdc322';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const HomeApi = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.data;
};

export default HomeApi;