import React, { Component } from "react";

const Card = ({ item }) => {
  return (
    <div className="Carditems">
      {item.openSpots == 0 && <div className="card--badge">SOLD OUT</div>}
      {item.openSpots != 0 && <div className="card--badge">AVAILABLE</div>}
      <img className="Card--hero" src={require(`../images/${item.coverImg}`)} />

      <div className="Card--stats">
        <img className="Card--stars" src={require("../images/Star 1.png")} />
        <span>{item.stats.rating} </span>
        <span className="gray"> ({item.stats.reviewCount}) </span>
        <span className="gray"> {item.location} </span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="card--price">
        <b>From ${item.price}</b> / person
      </p>
    </div>
  );
};

export default Card;
