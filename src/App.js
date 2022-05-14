import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/heroes.js";
import Card from "./components/card.js";
import data from "./data.js";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  const cardelements = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards--list">{cardelements}</section>
    </>
  );
}
