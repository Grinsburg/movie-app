import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Movie from './components/Movie';
import Footer from './components/Footer';
import Favorites from './components/Favorites'


let title = 'Titanic';

export default class App extends Component {
  
  state = {
    items: [],
    isLoaded: false
  }

  componentDidMount(){
      const url = `http://www.omdbapi.com/?apikey=3350d914&s=${title}`;
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            items: data.Search
          })
          console.log(data);
          console.log(data instanceof Object);
          console.log(typeof data);
          console.log(this.state.items);
        })
  }

  render() {

    let { isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Search />
              <Movie items={items} />
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
}

