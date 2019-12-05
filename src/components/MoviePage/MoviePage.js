import React from 'react';

import styles from './MoviePage.module.css';

const MoviePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardMovie}>
        <img className={styles.cardImgTop} src="https://source.unsplash.com/daily?wood" alt="Card" />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{}</h3>
          <h4 className={styles.cardSubtitle}>{}</h4>
          <p className={styles.cardText}>You can add navigation (navigation and pills) to card header Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque ea quis voluptate laudantium possimus aspernatur harum temporibus nobis! Rerum, reiciendis consequatur accusantium blanditiis perferendis earum sapiente cupiditate quis sit.</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
