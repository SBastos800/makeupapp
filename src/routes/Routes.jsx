import React, { Component } from "react";
import styles from "./router.module.scss";
import { Router, Redirect, globalHistory } from "@reach/router";
import Login from "../components/Login";
import firebase, { providers } from "../firebase";
import Products from "../components/Products";
import LandingPage from "../components/LandingPage";
import PrivateRoutes from "../routes/PrivateRoutes";

const NotFound = () => (<h2>Oops, page not found</h2>);

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
   
   signOut = () => {
       firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                globalHistory.navigate("/login");
       })
   }
   
    render() {
        return(
            <Router className={styles.container}>
                <Redirect noThrow from="/" to="landing" />
                <Login path="login" signIn={this.signIn} />
                <LandingPage path="landing" />
                <PrivateRoutes path="private" user={this.state.user}> 
                    <Products path="products" user={this.state.user} signOut={this.signOut} />
                </PrivateRoutes>
                <NotFound default/>
            </Router>
        );
    }
}