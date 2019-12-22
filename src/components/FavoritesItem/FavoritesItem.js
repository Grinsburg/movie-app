import React from 'react';

import { Link } from 'react-router-dom'
import styles from './FavoritesItem.module.css';

const FavoritesItem = () => {
  const { item } = this.props
  return (
    <div className={styles.card}>
      <img src="https://source.unsplash.com/daily?wood" className={styles.cardImgTop} alt="Card" />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>Card title</h3>
        <h4 className={styles.cardSubtitle}>Card subtitle</h4>
        <p className={styles.cardText}>You can add navigation (navigation and pills) to card header</p>
        </div>
    </div>
  );
}

export default FavoritesItem;
