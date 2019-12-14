import React, { Component } from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import Card7 from "../components/Card7";
import Card8 from "../components/Card8";
import Card9 from "../components/Card9";
import Header from "../components/Header";
import Footer from "../components/Footer";


class Game extends Component {
    state = {
        image: "",
        score: 0,
        match: false
    }



    render() {
        return(
            <div>
            <Header/>
            <h1>THIS IS THE CLICKY GAME</h1>
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            <Card6/>
            <Card7/>
            <Card8/>
            <Card9/>
            <Footer/>
    
    
            </div>
        );
    }
}






export default Game;
