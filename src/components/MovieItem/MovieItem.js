import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import styles from './MovieItem.module.css';

import MoviePage from '../MoviePage';

const MovieItem = ({ key, id, plot, title, released, poster }) => {

  return (
    <div>
      <div key={key} className={styles.card}>
        <img src={poster} className={styles.cardImgTop} alt={title} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <h4 className={styles.cardSubtitle}>{plot}</h4>
          <p className={styles.cardText}>{released}</p>
          <Link to={`/${id}`} className={styles.btn}>More</Link>
        </div>
      </div>
      <Switch>
        <Route exact path={`/${id}`}>
          <MoviePage />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieItem;
