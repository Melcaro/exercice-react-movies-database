import React, { PureComponent } from 'react';

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
  MoviesCreditsContainer,
  LinkedElement,
  MovieBackdropContainer,
  MovieBackdropImg,
  MovieTitle,
} from './../Styles';

export class ActorPage extends PureComponent {
  state = {
    actorInfos: {},
    moviesActorPlaysIn: [],
    isLoading: true,
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
      language,
      match: {
        params: { id },
      },
    } = this.props;

    this.setState({ isLoading: true });
    const { data: results } = await fetchActorInfos(id, language);
    const {
      data: { cast },
    } = await fetchMoviesByActorId(id, language);
    this.setState({
      isLoading: false,
      actorInfos: results,
      moviesActorPlaysIn: cast,
    });
  };
  render() {
    const {
      state: {
        isLoading,
        actorInfos: { id, name, biography, profile_path, homepage },
        moviesActorPlaysIn,
      },
    } = this;

    const loader = isLoading && <div>LOADING....</div>;

    return (
      loader || (
        <ActorPageStyle>
          <ActorPicContainer key={id}>
            <ActorPic
              alt="actor/actress"
              src={
                !profile_path
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
            <AppearsInText>APPEARS IN:</AppearsInText>
            <MoviesCreditsContainer>
              {moviesActorPlaysIn.map(
                ({ credit_id, character, title, backdrop_path, id }) => (
                  <MovieBackdropContainer key={credit_id}>
                    <LinkedElement to={`/movie/${id}`}>
                      <MovieBackdropImg
                        src={
                          backdrop_path === null
                            ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                            : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                        }
                        alt="movie poster"
                      />
                      <MovieTitle>
                        {title} - {character}{' '}
                      </MovieTitle>
                    </LinkedElement>
                  </MovieBackdropContainer>
                )
              )}
            </MoviesCreditsContainer>
          </ActorCreditsContainer>
        </ActorPageStyle>
      )
    );
  }
}
