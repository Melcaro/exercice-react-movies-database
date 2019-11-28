import { auth } from '../auth';
import axios from 'axios';

export const fetchMoviesDataBase = () => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: auth.api_key,
    },
  });
};

export const fetchMoviesById = movieId => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
      api_key: auth.api_key,
    },
  });
};

export const fetchMovieCredits = movieId => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
    params: {
      api_key: auth.api_key,
    },
  });
};

export const fetchActorInfos = actorId => {
  return axios.get(`https://api.themoviedb.org/3/person/${actorId}`, {
    params: {
      api_key: auth.api_key,
    },
  });
};

export const fetchMoviesByActorId = actorId => {
  return axios.get(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits`,
    {
      params: {
        api_key: auth.api_key,
      },
    }
  );
};
