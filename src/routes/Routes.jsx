import React, { Component } from "react";
import styles from "./router.module.scss";
import { Router, Redirect, globalHistory } from "@reach/router";

export default class Routes extends Component {
    render() {
        return(
            <Router className={styles.container}>
            </Router>

        );
    }
}