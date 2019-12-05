import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import styles from './Movie.module.css';
import MovieItem from '../MovieItem';

const Movie = ({ items }) => {
  return (
        <div className={styles.container}>
          {items.map(item => (
            <Router>
              <MovieItem key={item.imdbID} id={item.imdbID} title={item.Title} plot={item.plot} released={item.Year} poster={item.Poster} />
            </Router>
          ))}
        </div>
  );
}

export default Movie;
