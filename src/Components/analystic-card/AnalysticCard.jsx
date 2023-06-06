import React from "react";
import "./analystic-card.css";

const AnalysticCard = ({ text, price, icon }) => {
  return (
    <div className="analystic-card-container">
      <div className="analystic-text">
        <p>{text}</p>
        <h6>{price}</h6>
      </div>
      <div className="analystic-icon">{icon}</div>
    </div>
  );
};

export default AnalysticCard;
