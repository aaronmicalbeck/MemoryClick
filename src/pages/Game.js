import React, { Component } from "react";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Score from "../components/score/Score";
import "./game.css"



class Game extends Component {
    state = {

        score: 0,
        topScore: 0,
        cards: [
            {
                image: "",
                id: 0,
                clicked: false

            },
            {
                image: "",
                id: 1,
                clicked: false

            },
            {
                image: "",
                id: 2,
                clicked: false

            },
            {
                image: "",
                id: 3,
                clicked: false

            },
            {
                image: "",
                id: 4,
                clicked: false

            },
            {
                image: "",
                id: 5,
                clicked: false

            },
            {
                image: "",
                id: 6,
                clicked: false

            },
            {
                image: "",
                id: 7,
                clicked: false

            },
            {
                image: "",
                id: 8,
                clicked: false

            }
        ]
    };


    

    handleCardClick = event => {
        event.preventDefault();
        this.rearrangeCards();
        


    };

    rearrangeCards(arr) {
        arr = this.state.cards;
        arr.sort(function(a, b){
            return 0.5 - Math.random()
        })
        console.log(arr)

    }

    updateScore() {

    }

    render() {
        return (
            <div>
                <Header/>
                <Score score={this.state.score} topScore = {this.state.topScore}/>
                
                <div className="container-fluid board">

                    {this.state.cards.map(card => {
                        return <Card onClick={this.handleCardClick} image={card.image} alt={card.alt} key={card.id} />
                    })}


                    <Footer />
                </div>
            </div>
        );
    }
}

export default Game;
