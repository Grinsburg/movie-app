import React from 'react';

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="?">Home</a></li>
        <li><a href="?">Favorites</a></li>
        <li><a href="?">Link</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
