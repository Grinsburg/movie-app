import React from 'react';

import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} placeholder="Search movie" />
            <button className={styles.btn} type="button">
              <i className={styles.fa}></i>
            </button>
        </div>
    </div>
  );
}

export default Search;
