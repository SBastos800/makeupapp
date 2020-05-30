import React, { Component } from "react";
import styles from "./Products.module.scss";
import Product from "./Product";

export default class Products extends Component {

    state = {
        url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick",
        myProducts: []
    }

    componentDidMount() {
        fetch(this.state.url)
        .catch(err => {console.log(err)})
        .then(res => res.json())
        .then(data => {
            this.setState({ myProducts: data})
        })
        console.log(data)
    }

    render() {
        return(
            <section>
                {this.state.myProducts.map((person, index) => (
                    <Product productData={person} key={index} />
                ))}
            </section>

        );
    }
}