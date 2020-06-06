import React, { Component } from "react";
import styles from "./Products.module.scss";
import Product from "./Product";
//import firebase, { firestore } from "../../firebase";


export default class Products extends Component {

    state = {
        // url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick",
        url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
        myProducts: [],
        searchText: "",
        filteredProducts: []
    };

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({searchText}, this.filterProducts)
    }

    filterProducts = () => {
        let filteredProducts = this.state.myProducts.filter(product => {
            return product.name
            .toUpperCase()
            .includes(this.state.searchText.toUppercase());
        })
        this.setState({ filteredProducts });
    }

    componentDidMount() {
        fetch(this.state.url)
        .catch(err => {
            console.log(err);
        })
        .then(res => res.json())
        .then((myProducts) => {
            this.setState({ myProducts })
        });
        
    }

    render() {
        console.log(this.state.myProducts)
        return(
            <section>
                <section onClick={this.props.signOut}>
                    <button>Sign Out</button>
                </section>
                {this.state.myProducts.map((person, index) => (
                    <Product productData={person} key={index} />
                ))}
            </section>
        );
    }
}