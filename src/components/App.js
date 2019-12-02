import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomePage } from './HomePage';
import { SearchBar } from './SearchBar';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';

import { AppStyle, AppTitle, LinkedElement } from './../Styles';

function App() {
  return (
    <AppStyle>
      <BrowserRouter className="App">
        <Route
          path="/"
          render={() => (
            <LinkedElement to="/">
              <AppTitle>MOVIE DATABASE</AppTitle>
            </LinkedElement>
          )}
        />
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MoviePage} />
        <Route exact path="/person/:id" component={ActorPage} />
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;
