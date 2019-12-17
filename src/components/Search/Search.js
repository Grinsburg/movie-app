import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./Search.module.css";

import { searchMovie, fetchMovies } from "../../actions/actions";

export class Search extends Component {
  handleChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  handleClick = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className={styles.container}>
        <form id="search" className={styles.inputGroup} onSubmit={this.handleClick}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.formControl}
              onChange={this.handleChange}
              placeholder="Search movie"
            />
            <button
              className={styles.btn}
              type="submit"
            >
              <i className={styles.fa}></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(Search);
