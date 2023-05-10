import React from "react";
import "./Cards.css";

function SlideCard(props) {
  return (
    <div className="slide-card">
      <div className="slide-card-header">{props.title}</div>
      <div className="silde-image">{props.image}</div>
      <div className="slide-card-body">{props.children}</div>
    </div>
  );
}

export default SlideCard;
