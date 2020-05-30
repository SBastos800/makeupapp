import React, { Component } from "react";
import styles from "./router.module.scss";
import { Router, Redirect, globalHistory } from "@reach/router";
import Login from "../components/Login";
import firebase, { providers } from "../firebase";
import Products from "../components/Products";

export default class Routes extends Component {
   
    state = {
        user: null
    }
   
   
    signIn = () => {
       firebase
       .auth()
       .signInWithPopup(providers.google)
       .then(result => {
           this.setState({user: result.user})
       })
       .catch(err => {
           console.log(err);
       })
   }
   
   
   
    render() {
        return(
            <Router className={styles.container}>
                <Login path="login" signIn={this.signIn} />
                <Products path="products" />
                
            </Router>

        );
    }
}