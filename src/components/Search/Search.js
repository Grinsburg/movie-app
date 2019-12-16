import React, { Component } from 'react';

import styles from './Search.module.css';

import {fetchMovie} from '../../actions/searchActions'
import { connect } from 'react-redux';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ' '
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  onClick = e =>{
    e.preventDefault();
    this.props.fetchMovie(this.props.value)
}

// ()=>this.props.fetchMovie(value)

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} onChange={this.handleChange} placeholder="Search movie" />
          <button className={styles.btn} onClick={this.onClick} type="button">
            <i className={styles.fa}></i>
          </button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   text: state.movies.text
// })

export default Search