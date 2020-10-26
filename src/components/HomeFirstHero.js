import React from "react";
import "./HomeFirstHero.scss";

function HomeFirstHero(props) {
  return (
    <>
      <div style={props.productBg} className="first-hero">
        <div className="first-hero-content">
          <h1>AQUARIUM ZEN</h1>
          <h6>SEATTLE, WA</h6>
          <p>Tropical Fish Store, Aquatic Plants & Nature Aquarium Supplies</p>
          <p>Seattle's source for aquascaping inspiration</p>
        </div>
      </div>
    </>
  );
}

export default HomeFirstHero;
