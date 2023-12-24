import React from "react";
import "./HeroOther.css";

function HeroOther({ background_image, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className="hero-other-part"
    >
      <h1 className="hero-other-title">{title}</h1>
    </div>
  );
}

export default HeroOther;
