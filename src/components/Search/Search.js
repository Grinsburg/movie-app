import React, { Component } from "react";
import { connect } from 'react-redux'

import styles from "./Search.module.css";

import { searchMovie, fetchMovies } from "../../actions/actions";

export class Search extends Component {

  handleChange = e => {
    this.props.searchMovie(e.target.value)
  }

  handleClick(){
    this.props.fetchMovies(this.props.value)
  }

  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // };
  render() {
    this.handleChange = this.handleChange.bind(this);
    // const { value } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formControl}
            onChange={this.handleChange}
            placeholder="Search movie"
          />
          <button
            className={styles.btn}
            onClick={this.handleClick()}
            type="button"
          >
            <i className={styles.fa}></i>
          </button>
        </div>
      </div>
    );
  }
}

// export default Search;

const mapStateToProps = state => ({
  text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(Search);
