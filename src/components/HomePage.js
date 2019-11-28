import React, { Component } from 'react';
import { fetchMoviesDataBase } from './../services/fetchMoviesDatabase';
import { Link } from 'react-router-dom';

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
      <div className="HomePage">
        <h1>MOVIES DATABASE</h1>
        <div className="movieContainer">
          {moviesResults.map(
            ({
              id,
              title,
              overview,
              poster_path,
              vote_average,
              backdrop_path,
            }) => (
              <div key={id}>
                <div>
                  <Link to={`/movie/${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                      alt="movie poster"
                    />
                    <p>{title}</p>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
