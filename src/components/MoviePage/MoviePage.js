import React, { Component } from "react";

import styles from "./MoviePage.module.css";

class MoviePage extends Component {
  state = {
    datas: [],
    active: false
  };

  onClickFavorites = (e) => {
    e.preventDefault();
    this.setState({active: !this.state.active})
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let url = `http://www.omdbapi.com/?apikey=3350d914&i=${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          datas: data
        });
        console.log(this.state.datas);
        console.log(data);
      });
  }

  render() {
    const { datas, active } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.cardMovie}>
          <img
            className={styles.cardImgTop}
            src={datas.Poster}
            alt="Card"
          />
          <div className={styles.cardBody}>
            <h1 className={styles.cardTitle}>{`${datas.Title}`}</h1>
            <h4 className={styles.cardSubtitle}>{datas.Year}</h4>
            <p className={styles.cardText}><span>Description: </span>{datas.Plot}</p>
            <p className={styles.cardText}><span>Country: </span>{datas.Country}</p>
            <p className={styles.cardText}><span>Production: </span>{datas.Production}</p>
            <p className={styles.cardText}><span>Rated: </span>{datas.Rated}</p>
            <p className={styles.cardText}><span>Runtime: </span>{datas.Runtime}</p>
            <p className={styles.cardText}><span>Writer: </span>{datas.Writer}</p>
            <p className={styles.cardText}><span>imdbRating: </span>{datas.imdbRating}</p>
            <p className={styles.cardText}><span>imdbVotes: </span>{datas.imdbVotes}</p>
            <div className={active ? styles.faFalse : styles.faTrue} onClick={this.onClickFavorites}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;