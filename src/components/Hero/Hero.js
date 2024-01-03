import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TFramerMotion from "../../pages/TFramerMotion";
import "./Hero.css";
import img1 from "./media/Auction-amico.png";
import clock from "./media/bid-clock.gif";

function Hero() {
  return (
    <div className="hero-part">
      <motion.div className="hero hero-content">
        <h1 className="hero-title-primary">
          <TFramerMotion background="#fbcb04">Bid today!</TFramerMotion>
          <TFramerMotion background="#fbcb04">
            Your <span className="text-[#fbcb04]">.GOLD</span> awaits
          </TFramerMotion>
        </h1>

        <p className="hero-title-sub">
          Invest in a bright future with our exclusive .gold domains auction.
          Bid and secure a .gold domain today!
        </p>
        <Link to="/featured" className="hero-link">
          <button className="!w-fit white-btn">
            <span>
              <img src={clock} alt="" className="inline w-[50px] mr-[8px]" />
            </span>
            Bid on a .gold domain
          </button>
        </Link>

        <br />
        <br />
      </motion.div>
      <div className="hero-image">
        <img src={img1} alt="Duotone" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
