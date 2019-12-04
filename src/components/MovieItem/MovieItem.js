import React from 'react';

import styles from './MovieItem.module.css';

const MovieItem = ({key, type, plot, title, released, poster}) => {
  return (
    <div className={styles.card}>
      <img src={poster} className={styles.cardImgTop} alt={title} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <h4 className={styles.cardSubtitle}>{plot}</h4>
        <p className={styles.cardText}>{released}</p>
        <a href="?" className={styles.btn}>More</a>
        </div>
    </div>
  );
}

export default MovieItem;
