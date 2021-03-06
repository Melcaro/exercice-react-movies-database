import React from 'react';
import {
  fetchMoviesById,
  fetchMovieCredits,
} from './../services/fetchMoviesDatabase';

import {
  MoviePageStyle,
  MoviePicContainer,
  MovieImg,
  MovieInfos,
  CastContainer,
  CastTitle,
  ActorContainer,
  LinkedElement,
  ActorImgContainer,
  ActorImg,
  ActorName,
} from './../Styles';

export class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieInfos: {},
      movieCredits: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovieInfos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getMovieInfos();
    }
  }

  getMovieInfos = async () => {
    const {
      match: {
        params: { id },
      },
      language,
    } = this.props;
    this.setState({ isLoading: true });
    const { data: results } = await fetchMoviesById(id, language);

    const {
      data: { cast },
    } = await fetchMovieCredits(id, language);
    this.setState({
      movieInfos: results,
      movieCredits: cast,
      isLoading: false,
    });
  };

  render() {
    const {
      state: {
        isLoading,
        movieInfos: { overview, poster_path, title, vote_average },
        movieCredits,
      },
    } = this;

    const loader = isLoading && <div>LOADING....</div>;
    return (
      loader || (
        <MoviePageStyle>
          <MoviePicContainer>
            <MovieImg
              alt="movie pic"
              src={
                poster_path === null
                  ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
            />
          </MoviePicContainer>
          <MovieInfos>
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>Vote average: {vote_average}</p>
          </MovieInfos>
          <CastContainer>
            <CastTitle>CAST:</CastTitle>
            {movieCredits.map(
              ({ cast_id, character, id, name, profile_path }) => (
                <ActorContainer key={cast_id}>
                  <LinkedElement to={`/person/${id}`}>
                    <ActorImgContainer>
                      <ActorImg
                        alt="actor/actress"
                        src={
                          profile_path === null
                            ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                            : `https://image.tmdb.org/t/p/w185${profile_path}`
                        }
                      />
                    </ActorImgContainer>
                  </LinkedElement>
                  <ActorName>
                    {name} : {character}
                  </ActorName>
                </ActorContainer>
              )
            )}
          </CastContainer>
        </MoviePageStyle>
      )
    );
  }
}
