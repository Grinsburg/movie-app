import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from "./MoviePage.module.css";

import { fetchMovie } from "../../actions/actions";
import { connect } from "react-redux";
export class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className={styles.container}>
        <div>
          <Link to="/" className={styles.btn}>Back</Link>
        </div>
        <div className={styles.cardMovie}>
          <img className={styles.cardImgTop} scr={movie.Poster} alt="Card" />
          <div className={styles.cardBody}>
            <h1 className={styles.cardTitle}>{`${movie.Title}`}</h1>
            <h4 className={styles.cardSubtitle}>{movie.Year}</h4>
            <p className={styles.cardText}>
              <span>Description: </span>
              {movie.Plot}
            </p>
            <p className={styles.cardText}>
              <span>Country: </span>
              {movie.Country}
            </p>
            <p className={styles.cardText}>
              <span>Production: </span>
              {movie.Production}
            </p>
            <p className={styles.cardText}>
              <span>Rated: </span>
              {movie.Rated}
            </p>
            <p className={styles.cardText}>
              <span>Runtime: </span>
              {movie.Runtime}
            </p>
            <p className={styles.cardText}>
              <span>Writer: </span>
              {movie.Writer}
            </p>
            <p className={styles.cardText}>
              <span>imdbRating: </span>
              {movie.imdbRating}
            </p>
            <p className={styles.cardText}>
              <span>imdbVotes: </span>
              {movie.imdbVotes}
            </p>
            {/* <div className={active ? styles.faFalse : styles.faTrue} onClick={this.onClickFavorites}></div> */}
          </div>
        </div>
      </div>
    );
  }
}

// export default MoviePage;

const mapStateToProps = state => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie })(MoviePage);
