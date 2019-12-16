import React, {Component} from "react";

import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/searchActions'

import styles from "./Movie.module.css";
import MovieItem from "../MovieItem";

class Movie extends Component {

  componentDidMount(){
    this.props.fetchMovie(this.props.match.params.id);
  }
  
 render(){
  const { movies } = this.props;
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
        {movies.Search.map(item => (
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
 }
};


export default Movie;
