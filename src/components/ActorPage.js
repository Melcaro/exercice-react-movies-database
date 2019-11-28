import React, { Component } from 'react';

import { fetchActorInfos } from './../services/fetchMoviesDatabase';

export class ActorPage extends Component {
  state = {
    actorInfos: {},
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
    this.setState(
      {
        actorInfos: results,
      },
      () => console.log(this.state.actorInfos)
    );
  };
  render() {
    const {actorInfos:  { id, name, biography, profile_path, homepage } }= this.state;
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
        </div>
      </div>
    );
  }
}
