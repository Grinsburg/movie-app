import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieItem.module.css';


const MovieItem = (props) => {

  const { id, plot, title, released, poster } = props

  return (
    <div>
      <div className={styles.card}>
        <img src={poster} className={styles.cardImgTop} alt={title} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <h4 className={styles.cardSubtitle}>{plot}</h4>
          <p className={styles.cardText}>{released}</p>
          <Link to={`/movie/${id}`} className={styles.btn}>More</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
