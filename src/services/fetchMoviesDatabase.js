import { auth } from '../auth';
import axios from 'axios';

export const fetchMoviesDataBase = () => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: auth.api_key,
    },
  });
};

export const fetchMoviesById=()=>{
    return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          api_key: auth.api_key,
        },
      });

}