import React from "react";

import styles from "./Movie.module.css";
import MovieItem from "../MovieItem";

const Movie = props => {
  const { items } = props;
  console.log(props);

  return (
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
  );
};

export default Movie;
