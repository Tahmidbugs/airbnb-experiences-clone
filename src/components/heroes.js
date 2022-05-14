import React, { Component } from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <img className="Hero--grid" src={require("../images/heroes.png")} />
      <h1 className="Hero--title">Online Experiences</h1>
      <p className="Hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </div>
  );
};

export default Hero;
