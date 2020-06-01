import React, { Component } from 'react';
import styles from "./App.module.scss";
import NavBar from "../../components/NavBar";
import Routes from "../../routes/Routes";
import LandingPage from "../../components/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <NavBar />
      <LandingPage />
      <Routes />
      </div>
    )
  }
}


