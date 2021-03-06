import React from "react";
import HomeFirstHero from "../HomeFirstHero";
import HomeFirstShowcase from "../HomeFirstShowcase";
import HomeSecondHero from "../HomeSecondHero";
import ProductBg from "../images/11.jpg";

function Services() {
  const ProductImg = {
    backgroundImage: `url('${ProductBg}')`,
  };
  return (
    <>
      <HomeFirstHero productBg={ProductImg} />
      <HomeFirstShowcase />
      <HomeSecondHero />
    </>
  );
}

export default Services;
