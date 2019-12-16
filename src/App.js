import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import MoviePage from "./components/MoviePage";

import store from "./store";

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Search fetchMovie={this.fetchMovie} />
              <Movie fetchMovie={this.fetchMovie} />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/link">
              <MoviePage />
            </Route>
            <Route exact path="/movie/:id" component={MoviePage} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}



export default App;
