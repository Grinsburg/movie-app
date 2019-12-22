import React, { Component } from "react";

import FavoritesItem from "../FavoritesItem";
import { loadFromLocalStorage } from "../../service/service";

import styles from "./Favorites.module.css";

class Favorites extends Component {
  state = {
    lsData: {}
  };

  componentDidMount() {
    const data = loadFromLocalStorage();
    if (data) {
      this.setState({lsData:data});
    }
  }

  render() {
    const { lsData } = this.state;
    console.log(lsData);
   
    return (
      <div className={styles.container}>
        <FavoritesItem />
      </div>
    );
  }
}

export default Favorites;
