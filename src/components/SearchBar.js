import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';

import { fetchUserQuery } from './../services/fetchMoviesDatabase';

import { MovieSearchResult } from './MovieSearchResult';
import { PersonSearchResult } from './PersonSearchResult';

import { SearchBarStyle, InputStyle, ResultsContainer } from './../Styles';
import { Language } from './Language';
import { ThemeContext } from '../services/LanguageContext';

export class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: '',
      searchResults: [],
      highlightedIndex: -1,
    };

    this.el = null;
    this.debouncedFunction = debounce(this.startSearch, 250);
  }

  onInputChange = ({ target: { value } }) => {
    this.setState(
      {
        userSearch: value,
        highlightedIndex: -1,
      },
      () => this.debouncedFunction(this.state.userSearch)
    );
  };

  onKeyDown = e => {
    console.log(e.result);
    if (e.keyCode === 13) {
      if (this.state.highlightedIndex >= 0) {
        const media = this.state.searchResults[this.state.highlightedIndex];
        this.props.history.push(`/${media.media_type}/${media.id}`);
        this.clearSearchBar();
      } else {
        this.startSearch();
      }
    }
    if (e.keyCode === 40) {
      this.setState(prevState => {
        return {
          highlightedIndex: prevState.highlightedIndex + 1,
        };
      });
    }
    if (e.keyCode === 38) {
      this.setState(prevState => {
        return {
          highlightedIndex: prevState.highlightedIndex - 1,
        };
      });
    }
  };

  startSearch = async () => {
    const { language } = this.props;
    const {
      data: { results },
    } = await fetchUserQuery(this.state.userSearch, language);
    this.setState({
      searchResults: results,
    });
  };

  clearSearchBar = () => {
    this.setState({
      userSearch: '',
      searchResults: [],
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.startSearch();
    }
  }

  render() {
    const {
      state: { searchResults, userSearch, highlightedIndex },
    } = this;
    return (
      <SearchBarStyle>
        <div>
          <InputStyle
            onChange={this.onInputChange}
            onKeyDown={this.onKeyDown}
            placeholder="Search a movie or a person"
            value={userSearch}
          ></InputStyle>
        </div>
        <ThemeContext.Consumer>
          {lang => (
            <Language {...lang} changeLanguage={this.props.changeLanguage} />
          )}
        </ThemeContext.Consumer>

        {!!searchResults && (
          <ResultsContainer>
            {searchResults.map(({ media_type, ...result }, index) =>
              media_type === 'movie' ? (
                <MovieSearchResult
                  result={result}
                  onClick={this.clearSearchBar}
                  isHighlighted={highlightedIndex === index}
                  onKeyDown={this.onKeyDown}
                />
              ) : media_type === 'person' ? (
                <PersonSearchResult
                  onClick={this.clearSearchBar}
                  result={result}
                  isHighlighted={highlightedIndex === index}
                  onKeyDown={this.onKeyDown}
                />
              ) : null
            )}
          </ResultsContainer>
        )}
      </SearchBarStyle>
    );
  }
}
