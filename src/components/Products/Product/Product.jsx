import React, { Component } from "react";
import styles from "./Product.module.scss";

export default class Product extends Component {
    render() {
        return(
            <section>
                <h2>{this.props.brand}</h2>
            </section>
        );
    }
}