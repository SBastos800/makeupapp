import React, { Component } from "react";
import styles from "./Products.module.scss";
import Product from "./Product";
import SearchBar from "../Products/SearchBar";


export default class Products extends Component {

    state = {
        url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
        myProducts: [],
        searchText: "",
        filteredProducts: []
    };

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterProducts)
    }

    filterProducts = () => {
        let filteredProducts = this.state.myProducts.filter(product => {
            return product.name
                .toUpperCase()
                .includes(this.state.searchText.toUpperCase());
        })
        this.setState({ filteredProducts });
    }

    componentDidMount() {
        fetch(this.state.url)
            .catch(err => {
                console.log(err);
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    myProducts: data,
                    filteredProducts: data
                })
                console.log(data);
            });
    }

    render() {
        console.log(this.state.myProducts)
        return (
            <section className={styles.productsWrapper}>
                <h1>Maybelline Products</h1>
                <section className={styles.signOut} onClick={this.props.signOut}>
                    <button>Sign Out</button>
                </section>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <section className={styles.individualProduct}>
                    {this.state.myProducts.map((person, index) => (
                        <Product productData={person} key={index} />
                    ))}
                </section>
            </section>
        );
    }
}