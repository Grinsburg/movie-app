import React from "react";

import styles from "./Movie.module.css";
import MovieItem from "../MovieItem";

const Movie = props => {
  const { items } = props;
  console.log(props)

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.toast}
        >
          <div className={styles.toastHeader}>
            <strong className={styles.mrAuto}>{}</strong>
            <button
              type="button"
              className={styles.close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {items.map(item => (
          <MovieItem
            key={item.imdbID}
            id={item.imdbID}
            title={item.Title}
            plot={item.plot}
            released={item.Year}
            poster={item.Poster}
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
