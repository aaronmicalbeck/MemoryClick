import React, { Component } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";


class Game extends Component {
    state = {
        data: Array,
        score: 0,
        topScore: 0
    }



    render() {
        return(
            <div>
            <Header/>
            <h1>THIS IS THE CLICKY GAME</h1>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
            <Footer/>
    
    
            </div>
        );
    }
}






export default Game;
