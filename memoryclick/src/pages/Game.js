import React, { Component } from "react";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class Game extends Component {
    state = {
        data: Array,
        score: 0,
        topScore: 0
    };


    componentDidMount() {
        this.loadCards();
    }

    handleCardClick = event => {
        event.preventDefault();
        console.log("Card has been clicked");

     };

     loadCards = () => {


     }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>THIS IS THE CLICKY GAME</h1>

                    <div className="row">
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick} />
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                        <div className="col-lg">
                            <Card onClick = {this.handleCardClick}/>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default Game;
