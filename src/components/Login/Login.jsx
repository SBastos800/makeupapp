import React, { Component } from "react";
import styles from "./Login.module.scss";

export default class Login extends Component {
    render() {
        return (
            <section onClick={this.props.signIn} className={styles.google}>
                <section className={styles.loginInstructionsWrapper}>
                    <h1>Hi!! We are excited that you have chosen us and you're ready to take a look in our fantastic products!</h1>
                    <h2>Please click the button below to sign in and then go to Products</h2>
                    <button>Sign in with google</button>
                </section>
            </section>
        )
    }
}