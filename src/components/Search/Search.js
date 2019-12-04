import React, { Component } from 'react';

import styles from './Search.module.css';

class Search extends Component {
  state = {
    isOnClick: '',
    value: ''
  }

  onChange =(e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  

  handleClick(e){
    e.preventDefault();
    console.log(1);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} onChange={this.onChange} placeholder="Search movie" />
          <button className={styles.btn} onClick={this.handleClick} type="button">
            <i className={styles.fa}></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Search;