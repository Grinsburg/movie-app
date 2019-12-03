import React from 'react';

import styles from './Movie.module.css';
import MovieItem from '../MovieItem';

const Movie = () => {
  return (
    <div className={styles.container}>
      <MovieItem />
    </div>
  );
}

export default Movie;
