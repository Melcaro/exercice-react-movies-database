import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchActorInfos,
  fetchMoviesByActorId,
} from './../services/fetchMoviesDatabase';

export class ActorPage extends Component {
  state = {
    actorInfos: {},
    moviesActorPlaysIn: [],
  };

  componentDidMount() {
    this.getActorInfos();
  }
  getActorInfos = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { data: results } = await fetchActorInfos(id);
    const {
      data: { cast },
    } = await fetchMoviesByActorId(id);
    this.setState(
      {
        actorInfos: results,
        moviesActorPlaysIn: cast,
      },
      () => console.log(this.state.actorInfos)
    );
  };
  render() {
    const {
      state: {
        actorInfos: { id, name, biography, profile_path, homepage },
        moviesActorPlaysIn,
      },
    } = this;
    console.log(moviesActorPlaysIn);
    return (
      <div>
        ACTOR PAGE
        <div key={id}>
          <img
            alt="actor/actress"
            src={`https://image.tmdb.org/t/p/w185${profile_path}`}
          />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{biography}</p>
          <p>Website : {homepage}</p>
        </div>
        <div>
          <p>Appears in:</p>
          {moviesActorPlaysIn.map(
            ({ credit_id, character, title, backdrop_path, id }) => (
              <div key={credit_id}>
                <Link to={`/movie/${id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                      alt="movie poster"
                    />
                    <p>
                      {title} - {character}{' '}
                    </p>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
