import React from 'react';

import styles from './Movie.module.css';
import MovieItem from '../MovieItem';

const Movie = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <MovieItem key={item.imdbID} title = {item.Title} type={item.Type} plot={item.plot} released={item.Year} poster={item.Poster}/>
      ))}
    </div>
  );
}

export default Movie;
