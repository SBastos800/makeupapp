import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import NavItem from "./NavItem";

export default class NavBar extends Component {
    render() {
        return (
            <section className={styles.navBarWrapper}>
                <ul className={styles.navList}>
                    <NavItem route="/landing" name="Home" />
                    <NavItem route="/login" name="Login" />
                    <NavItem route="/private/products" name="Products" />
                </ul>
            </section>
        );
    }
}