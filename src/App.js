import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import MoviePage from "./components/MoviePage";


export default class App extends Component {
  state = {
    items: []
  };

  fetchMovie = value => {
    const url = `http://www.omdbapi.com/?apikey=3350d914&s=${value}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.Search
        });
        console.log(data);
      });
  };

  componentDidMount() {
    this.fetchMovie(this.props.value);
  }

  render() {
    const { items } = this.state;

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search fetchMovie={this.fetchMovie} />
            <Movie items={items} fetchMovie={this.fetchMovie} />
          </Route>
          <Route exact path="/favorites">
            <Favorites items={items} />
          </Route>
          <Route exact path="/link">
            <MoviePage />
          </Route>
          <Route exact path="/movie/:id" component={MoviePage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}