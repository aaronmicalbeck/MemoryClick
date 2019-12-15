import React, {Component} from "react";
import "./style.css"


class Score extends Component {




    render() {
      return (
  
        <div className="score" score={this.props.score} topScore={this.props.topScore}>
          <p>Yo Score</p>
        </div>
      )
  
  
    }
  
  }
  
export default Score;