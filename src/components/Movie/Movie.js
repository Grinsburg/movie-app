import React from 'react';

import styles from './Movie.module.css';
import MovieItem from '../MovieItem';

const Movie = () => {
  return (
    <div className={styles.container}>
    <div class={styles.card}>
      <img class={styles.cardImgTop} src="https://source.unsplash.com/daily?wood" alt="Card image top" />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>Card title</h3>
        <h4 className={styles.cardSubtitle}>Card subtitle</h4>
        <p className={styles.cardText}>You can add navigation (navigation and pills) to card header</p>
        <a href="?" className={styles.btn}>More</a>
        </div>
    </div>
  </div>
  );
}

export default Movie;
