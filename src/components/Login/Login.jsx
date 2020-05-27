import React, { Component } from "react";
import styles from "./Login.module.scss";

export default class Login extends Component {
    render() {
        return(
            <section onClick={this.props.signIn} className={styles.google}>
            <h1>Welcome to our page! Please login to browse our amazing products!</h1>
                <button>Sign in with google</button>
            </section>
        )
    }
}