import React from 'react';

import FavoritesItem from '../FavoritesItem';

import styles from './Favorites.module.css';

const Favorites = () => {
  return (
    <div className={styles.container}>
      <FavoritesItem />
    </div>
  );
}

export default Favorites;
