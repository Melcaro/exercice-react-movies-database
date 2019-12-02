import React, { Component } from 'react';
import { fetchMoviesDataBase } from './../services/fetchMoviesDatabase';

import {
  HomePageStyle,
  MovieContainer,
  LinkedElement,
  ImageContainer,
  Image,
  MovieTitle,
} from './../Styles';

export class HomePage extends Component {
  state = {
    moviesResults: [],
  };
  componentDidMount() {
    this.getListOfMovies();
  }

  getListOfMovies = async () => {
    const {
      data: { results },
    } = await fetchMoviesDataBase();
    this.setState({
      moviesResults: results,
    });
  };

  render() {
    const {
      state: { moviesResults },
    } = this;

    return (
      <HomePageStyle>
        {moviesResults.map(({ id, title,
          backdrop_path }) => (
          <MovieContainer key={id}>
            <LinkedElement to={`/movie/${id}`}>
              <ImageContainer>
                <Image
                  src={
                    backdrop_path === null
                      ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                      : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                  }
                  alt="movie poster"
                />
              </ImageContainer>
              <MovieTitle>{title}</MovieTitle>
            </LinkedElement>
          </MovieContainer>
        ))}
      </HomePageStyle>
    );
  }
}
