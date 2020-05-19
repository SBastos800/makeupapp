import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import NavItem from "./NavItem";

export default class NavBar extends Component {
    render() {
        return (
            <section className={styles.navBarWrapper}>NavBar</section>
        );
    }
}