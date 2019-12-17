import React, { Component } from "react";

import styles from "./MoviePage.module.css";

import {fetchMovie} from '../../actions/actions'
import { connect } from "react-redux";
export class MoviePage extends Component {
  // state = {
  //   datas: [],
  //   active: false
  // };

  // onClickFavorites = (e) => {
  //   e.preventDefault();
  //   this.setState({active: !this.state.active})
  // }

  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   let url = `http://www.omdbapi.com/?apikey=3350d914&i=${id}`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         datas: data
  //       });
  //       console.log(this.state.datas);
  //       console.log(data);
  //     });
  // }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.cardMovie}>
          <img
            className={styles.cardImgTop}
            src={movie.Poster}
            alt="Card"
          />
          <div className={styles.cardBody}>
            <h1 className={styles.cardTitle}>{`${movie.Title}`}</h1>
            <h4 className={styles.cardSubtitle}>{movie.Year}</h4>
            <p className={styles.cardText}><span>Description: </span>{movie.Plot}</p>
            <p className={styles.cardText}><span>Country: </span>{movie.Country}</p>
            <p className={styles.cardText}><span>Production: </span>{movie.Production}</p>
            <p className={styles.cardText}><span>Rated: </span>{movie.Rated}</p>
            <p className={styles.cardText}><span>Runtime: </span>{movie.Runtime}</p>
            <p className={styles.cardText}><span>Writer: </span>{movie.Writer}</p>
            <p className={styles.cardText}><span>imdbRating: </span>{movie.imdbRating}</p>
            <p className={styles.cardText}><span>imdbVotes: </span>{movie.imdbVotes}</p>
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
})

export default connect(mapStateToProps, {fetchMovie})(MoviePage);