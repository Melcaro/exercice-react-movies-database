import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeContext } from '../services/LanguageContext';
import { ColorThemeContext } from './../services/ColorThemeContext';

import { HomePage } from './HomePage';
import { SearchBar } from './SearchBar';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';
import { ColorTheme } from './ColorTheme';

import { AppStyle, AppTitle, LinkedElement } from './../Styles';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageValue: 'en',
      changeLanguage: this.changeLanguage,
      theme: 'dark',
      changeColorTheme: this.changeColorTheme,
    };
  }
  changeLanguage = lang => {
    this.setState(({ languageValue }) => ({
      languageValue: lang,
    }));
  };

  changeColorTheme = color => {
    this.setState({
      theme: color,
    });
  };
  render() {
    return (
      <>
        <ThemeContext.Provider
          value={{
            languageValue: this.state.languageValue,
            changeLanguage: this.state.changeLanguage,
          }}
        >
          <ColorThemeContext.Provider
            value={{
              theme: this.state.theme,
              changeColorTheme: this.state.changeColorTheme,
            }}
          >
            <ThemeContext.Consumer>
              {({ languageValue, changeLanguage }) => (
                <ColorThemeContext.Consumer>
                  {({ theme, changeColorTheme }) => (
                    <AppStyle theme={theme}>
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
                          render={props => (
                            <ColorTheme
                              {...props}
                              colorTheme={theme}
                              changeColor={this.changeColorTheme}
                            />
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
                    </AppStyle>
                  )}
                </ColorThemeContext.Consumer>
              )}
            </ThemeContext.Consumer>
          </ColorThemeContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
