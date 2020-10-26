import React from "react";
import "./HomeFirstShowcase.scss";
import FbLogo from "./images/facebook-app-logo.svg";
import CompanyLogo from "./images/logo.gif";
function HomeFirstShowcase() {
  return (
    <>
      <div className="home-first-showcase">
        <div className="home-first-showcase-img">
          <img src={CompanyLogo} alt="logo" />
        </div>
        <div className="home-first-showcase-title">
          <p>Seattle's source for aquascaping inspiration.</p>
        </div>
        <div className="home-first-showcase-p">
          <p>
            Aquarium Zen is a natural aquarium store filled with vibrant aquatic
            plants, a unique selection of healthy tropical fish, quality
            supplies and the inspiration to get you excited about keeping
            aquariums again.
          </p>
          <p>
            Our focus is on the Nature Aquarium style of freshwater aquarium
            design. Nature Aquariums combine aquatic plants with artistically
            designed layouts of wood and stone to create a beautiful ecosystem
            in miniature. We take pride in giving our customers excellent
            customer service and have over 30 years of experience to draw from.
          </p>
          <p>
            At its heart, Aquarium Zen is an independent, small business,
            tropical fish store and we can serve the basic needs of most
            freshwater aquarium owners, even if the Nature Aquarium is not your
            style. Our goal is to mentor our clients in creating the aquarium of
            their dreams.
          </p>
          <p>
            We invite you to visit our beautiful showroom and Nature Aquarium
            gallery, now open to the public. Of course, you can also connect
            with us on Facebook:
          </p>
        </div>
        <div className="home-first-showcase-fb">
          <img src={FbLogo} alt="fb-logo" />
        </div>
      </div>
    </>
  );
}

export default HomeFirstShowcase;
