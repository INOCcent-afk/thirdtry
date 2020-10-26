import React from "react";
import FbLogo from "./images/facebook-app-logo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <img src={FbLogo} alt="fb-logo" />
        <h1>AQUARIUM ZEN</h1>
        <p>920 NE 64TH ST</p>
        <p>206.619.1624</p>
        <p>AQUARIUMZEN@GMAIL.COM</p>
        <p>COPYRIGHT © 2015 AQUARIUM ZEN</p>
      </footer>
    </>
  );
}

export default Footer;
