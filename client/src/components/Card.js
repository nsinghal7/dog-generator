import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Card-wrapper">{this.props.children}</div>;
  }
}

export default Card;
