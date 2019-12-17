import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./Movie.module.css";
import MovieItem from "../MovieItem";
import Search from "../Search";

export class Movie extends Component {
  render() {
    const { movies, text } = this.props;
    return (
      <div>
        <Search value={text} />
        <div className={styles.container}>
          {movies.map((item, index) => (
            <MovieItem
              key={index}
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
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(Movie);
