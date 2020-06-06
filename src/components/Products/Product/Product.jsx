import React, { Component } from "react";
import styles from "./Product.module.scss";

export default class Product extends Component {
    render() {
        return(
                <section className={styles.productContainer}>
                    {/* <h2>{this.props.productData.brand}</h2> */}
                    <h3>{this.props.productData.name}</h3>
                    <p>£{this.props.productData.price}</p>
                    <img src={this.props.productData.image_link}/>
                    <p><span>Description:</span> {this.props.productData.description}</p>
                </section>
        );
    }
}