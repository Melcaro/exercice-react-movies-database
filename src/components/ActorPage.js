import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchActorInfos,
  fetchMoviesByActorId,
} from './../services/fetchMoviesDatabase';

import {
  ActorPageStyle,
  ActorPicContainer,
  ActorPic,
  ActorInfosContainer,
  ActorCreditsContainer,
  AppearsInText,
} from './../Styles';

export class ActorPage extends Component {
  state = {
    actorInfos: {},
    moviesActorPlaysIn: [],
  };

  componentDidMount() {
    this.getActorInfos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getActorInfos();
    }
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
      <ActorPageStyle>
        <ActorPicContainer key={id}>
          <ActorPic
            alt="actor/actress"
            src={
              profile_path === null
                ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                : `https://image.tmdb.org/t/p/w185${profile_path}`
            }
          />
        </ActorPicContainer>
        <ActorInfosContainer>
          <h1>{name}</h1>
          <p>{biography}</p>
          {!!homepage && <p>Website : {homepage}</p>}
        </ActorInfosContainer>
        <ActorCreditsContainer>
          <AppearsInText>Appears in:</AppearsInText>
          {moviesActorPlaysIn.map(
            ({ credit_id, character, title, backdrop_path, id }) => (
              <div key={credit_id}>
                <Link to={`/movie/${id}`}>
                  <div>
                    <img
                      src={
                        backdrop_path === null
                          ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                          : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                      }
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
        </ActorCreditsContainer>
      </ActorPageStyle>
    );
  }
}
