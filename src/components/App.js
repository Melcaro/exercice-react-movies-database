import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomePage } from './HomePage';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MoviePage} />
      <Route exact path="/actor/:id" component={ActorPage} />
    </BrowserRouter>
  );
}

export default App;
