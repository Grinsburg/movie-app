import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Text 1</p>
      </div>
      <div>
        <p>Text 2</p>
      </div>
      <div>
        <p>Text 3</p>
      </div>
    </div>
  );
}

export default Footer;
