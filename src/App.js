import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Movie from './components/Movie';
import Footer from './components/Footer';
import Favorites from './components/Favorites'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search />
            <Movie />
            <Footer />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
