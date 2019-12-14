import React, {Component} from "react";

class Card extends Component{
    state= {

      image: "",
      clicked: false,
      matched: false 
  
  }

  render(){
    return (

      <div className = "card">

        This is a card!

      
    </div>
    )

    
  }

  }
  
  export default Card;