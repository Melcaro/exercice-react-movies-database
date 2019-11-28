import React from 'react';
import {
  fetchMoviesById,
  fetchMovieCredits,
} from './../services/fetchMoviesDatabase';
import { Link } from 'react-router-dom';

export class MoviePage extends React.Component {
  state = {
    movieInfos: {},
    movieCredits: [],
  };

  componentDidMount() {
    this.getMovieInfos();
  }
  getMovieInfos = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(id);
    const { data: results } = await fetchMoviesById(id);

    const {
      data: { cast },
    } = await fetchMovieCredits(id);
    this.setState(
      {
        movieInfos: results,
        movieCredits: cast,
      },
      () => console.log(this.state.movieCredits)
    );
  };

  render() {
    console.log(this.state.movieInfos);

    const {
      state: {
        movieInfos: { overview, poster_path, title, vote_average },
        movieCredits,
      },
    } = this;
    return (
      <div
        style={{
          width: '90vw',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '5%',
        }}
      >
        <div style={{ flex: '0 1 30%' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            alt="movie pic"
            src={
              poster_path === null
                ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
          />
        </div>
        <div
          style={{ flex: '0 1 30%', display: 'flex', flexDirection: 'column' }}
        >
          <h1>{title}</h1>
          <p>{overview}</p>
          <p>{vote_average}</p>
        </div>
        <div>
          {movieCredits.map(
            ({ cast_id, character, id, name, profile_path }) => (
              <div key={cast_id}>
                <Link to={`/person/${id}`}>
                  <div>
                    <img
                      alt="actor/actress"
                      src={
                        profile_path === null
                          ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                          : `https://image.tmdb.org/t/p/w45${profile_path}`
                      }
                    />
                  </div>
                </Link>
                <div>
                  {name} : {character}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
