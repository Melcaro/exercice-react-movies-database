import React, { memo } from 'react';

import {
  SearchResultsContainer,
  ResultTitle,
  LinkedElement,
  ImageContainer,
  Image,
} from './../Styles';

export const MovieSearchResult = memo(
  ({ result, onClick, isHighlighted, onKeyDown }) => {
    const { id, backdrop_path, title } = result;
    return (
      <SearchResultsContainer
        key={id}  
        style={{ border: isHighlighted ? '2px solid blue' : null }}
        onKeyDown={onKeyDown}
      >
        <LinkedElement to={`/movie/${id}`} onClick={onClick}>
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
          <ResultTitle>{title}</ResultTitle>
        </LinkedElement>
      </SearchResultsContainer>
    );
  }
);
