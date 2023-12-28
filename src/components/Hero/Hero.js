import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import img1 from "./media/Auction-amico.png";
import clock from "./media/bid-clock.gif";

function Hero() {
  return (
    <div className="hero-part">
      <section className="hero hero-content">
        <h1 className="hero-title-primary">
          Bid today! <br />
          Your <span class="text-[#fbcb04]">.GOLD</span> awaits
        </h1>
        <p className="hero-title-sub">
          {" "}
          Invest in a bright future with our exclusive .gold domains auction.
          Bid and secure a .gold domain today!
        </p>
        <Link to="/featured" class="hero-link">
          <button className="!w-fit white-btn">
            <span>
              <img src={clock} alt="" className="inline w-[50px] mr-[8px]" />
            </span>
            Bid on a .gold domain
          </button>
        </Link>

        <br />
        <br />
      </section>
      <div className="hero-image ">
        <img src={img1} alt="Duotone" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
