import React, {Component} from "react";
import "./style.css"

class Card extends Component{
    state= {

      image: "",
      clicked: false,
      id: ""
  
  }

  render(){
    return (

      <div className = "card" onClick={this.props.onClick}>
        

        This is a card!

      
    </div>
    )

    
  }

  }
  
  export default Card;