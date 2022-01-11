import React from "react";
import "./Card.css";

export default (props) => {
  return <div className="Card-wrapper">{props.contents}</div>;
};
