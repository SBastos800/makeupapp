import React, { Component } from "react";
import styles from "./LandingPage.module.scss";


export default class LandingPage extends Component {
    render() {
        return (
            <section>
                <h1>Welcome to Our Website</h1>
                <div>
                    <div>
                       <div className={styles.one}></div>
                       <div className={styles.two}></div>
                       <div className={styles.three}></div>
                       <div className={styles.four}></div>
                    </div>
                </div>
            </section> 

        );
    }
}