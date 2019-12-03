import React from 'react';

import styles from './MovieItem.module.css';

const MovieItem = () => {
  return (
    <div class={styles.card}>
      <img class={styles.cardImgTop} src="https://source.unsplash.com/daily?wood" alt="Card image top" />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>Card title</h3>
        <h4 className={styles.cardSubtitle}>Card subtitle</h4>
        <p className={styles.cardText}>You can add navigation (navigation and pills) to card header</p>
        <a href="?" className={styles.btn}>More</a>
        </div>
    </div>
  );
}

export default MovieItem;
