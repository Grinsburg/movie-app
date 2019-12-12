import React, { Component } from 'react';

import styles from './Search.module.css';

class Search extends Component {
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

  

  render() {
    const {value} = this.state
    return (
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} onChange={this.handleChange} placeholder="Search movie" />
          <button className={styles.btn} onClick={()=>this.props.fetchMovie(value)} type="button">
            <i className={styles.fa}></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Search;