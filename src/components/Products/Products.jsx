import React, { Component } from "react";
import styles from "./Products.module.scss";

export default class Products extends Component {

    state = {
        url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick",
        id: []
    }

    componentDidMount() {
        fetch(this.state.url)
        .catch(err => {console.log(err)})
        .then(res => res.json())
        .then(data => {
            this.setState({ id: data['id']})
        })
    }

    render() {
        return(
            <section>
                <h1>Products</h1>
            </section>

        );
    }
}