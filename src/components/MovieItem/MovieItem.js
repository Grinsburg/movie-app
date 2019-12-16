import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/searchActions'
 
import styles from './MovieItem.module.css';


export class MovieItem extends Component{
  componentDidMount(){
    this.props.fetchMovie(this.props.match.params.id)
  }
  render(){
    const { movie } = this.props
    return (
      <div>
        <div className={styles.card}>
          <img src={movie.poster} className={styles.cardImgTop} alt={movie.title} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{movie.title}</h3>
            <h4 className={styles.cardSubtitle}>{movie.plot}</h4>
            <p className={styles.cardText}>{movie.released}</p>
            <Link to={`/movie/${movie.id}`} className={styles.btn}>More</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie
})

export default connect(mapStateToProps(fetchMovie))(MovieItem);
