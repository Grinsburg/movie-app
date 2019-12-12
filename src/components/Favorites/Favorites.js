import React from 'react';

import FavoritesItem from '../FavoritesItem';

import styles from './Favorites.module.css';

const Favorites = ({items}) => {

  return (
    <div className={styles.container}>
      <FavoritesItem id={items.imdbID} />
    </div>
  );
}

export default Favorites;
