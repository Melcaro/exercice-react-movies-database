import { auth } from '../auth';
import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

export const fetchMoviesDataBase = language => {
  return axios.get(`${url}/discover/movie`, {
    params: {
      api_key: auth.api_key,
      language: language,
    },
  });
};

export const fetchMoviesById = (movieId, language) => {
  return axios.get(`${url}/movie/${movieId}`, {
    params: {
      api_key: auth.api_key,
      language: language,
    },
  });
};

export const fetchMovieCredits = (movieId, language) => {
  return axios.get(`${url}/movie/${movieId}/credits`, {
    params: {
      api_key: auth.api_key,
      language: language,
    },
  });
};

export const fetchActorInfos = (actorId, language) => {
  return axios.get(`${url}/person/${actorId}`, {
    params: {
      api_key: auth.api_key,
      language: language,
    },
  });
};

export const fetchMoviesByActorId = (actorId, language) => {
  return axios.get(`${url}/person/${actorId}/movie_credits`, {
    params: {
      api_key: auth.api_key,
      language: language,
    },
  });
};

export const fetchUserQuery = (query, language) => {
  return axios.get(`${url}/search/multi`, {
    params: {
      api_key: auth.api_key,
      query: query,
      language: language,
    },
  });
};
