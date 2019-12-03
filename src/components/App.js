import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeContext } from './../services/ThemeContext';

import { HomePage } from './HomePage';
import { SearchBar } from './SearchBar';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';

import { AppStyle, AppTitle, LinkedElement } from './../Styles';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageValue: 'en',
      changeLanguage: this.changeLanguage,
    };
  }
  changeLanguage = lang => {
    this.setState(({ languageValue }) => ({
      languageValue: lang,
    }));
  };
  render() {
    return (
      <AppStyle>
        <ThemeContext.Provider value={this.state}>
          <ThemeContext.Consumer>
            {({ languageValue, changeLanguage }) => (
              <BrowserRouter className="App">
                <Route
                  path="/"
                  render={() => (
                    <LinkedElement to="/">
                      <AppTitle>MOVIE DATABASE</AppTitle>
                    </LinkedElement>
                  )}
                />

                <Route
                  path="/"
                  render={() => (
                    <SearchBar
                      language={languageValue}
                      changeLanguage={changeLanguage}
                    />
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={props => (
                    <HomePage {...props} language={languageValue} />
                  )}
                />

                <Route
                  exact
                  path="/movie/:id"
                  render={props => (
                    <MoviePage {...props} language={languageValue} />
                  )}
                  s
                />
                <Route
                  exact
                  path="/person/:id"
                  render={props => (
                    <ActorPage {...props} language={languageValue} />
                  )}
                />
              </BrowserRouter>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </AppStyle>
    );
  }
}

export default App;
