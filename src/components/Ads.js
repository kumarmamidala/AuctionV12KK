import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./media/img2.png";
import img2 from "./media/img4.webp";
import "./main.css";
import Fade from "react-reveal/Fade";

function Ads() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="!text-center title-section">
      <Fade bottom opposite={true} exit={true}>
        <h1 className=" !text-center ad-head">
          Domain Name <span className="text-pent">Aftermarket</span>
        </h1>
        <p className="ads-para paragraph">
          Bid on a premium .gold domain that suits your brand. It has the
          potential to increase your revenue and improve your customer base.
        </p>
      </Fade>
    </div>
  );
}

export default Ads;
