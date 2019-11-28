import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomePage } from './HomePage';
import { MoviePage } from './MoviePage';

function App() {
  return (
    <BrowserRouter className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MoviePage} />
    </BrowserRouter>
  );
}

export default App;
