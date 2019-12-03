import React, { memo } from 'react';

import {
  SearchResultsContainer,
  ResultTitle,
  LinkedElement,
  ImageContainer,
  Image,
} from './../Styles';

export const PersonSearchResult = memo(
  ({ result, onClick, isHighlighted, onKeyDown }) => {
    const { id, name, profile_path } = result;

    return (
      <SearchResultsContainer
        key={id}
        style={{ border: isHighlighted ? '2px solid blue' : null }}
        onKeyDown={onKeyDown}
      >
        <LinkedElement to={`/person/${id}`} onClick={onClick}>
          <ImageContainer>
            <Image
              alt="actor/actress"
              src={
                profile_path === null
                  ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  : `https://image.tmdb.org/t/p/w185${profile_path}`
              }
            />
          </ImageContainer>
          <ResultTitle>{name}</ResultTitle>
        </LinkedElement>
      </SearchResultsContainer>
    );
  }
);
