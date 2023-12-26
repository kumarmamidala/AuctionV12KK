import React from "react";
import { Link } from "react-router-dom";
import "./FlowCards.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import offers from "./Media/Job offers-rafiki.png";
import win from "./Media/winit.png";
import utilize from "./Media/Website Creator-amico.png";
import Fade from "react-reveal/Fade";
import Shapes from "../Shapes/Shapes";

const flowData = [
  {
    imgSrc: offers,
    title: () => (
      <div>
        Make an <span className="text-pent">offer</span>.
      </div>
    ),
    description:
      ".Gold domains are the future for the gold based industry. Ranging from a small retail jewelry store to multi million dollar companies, everyone is looking for the premium .gold domains. Explore and bid on the perfect .gold domain today before your competitors.",
    buttonText: "The clock is ticking, Place a bid",
  },
  {
    imgSrc: win,
    title: () => (
      <div>
        <span className="text-pent">Win</span> it.
      </div>
    ),
    description:
      "A perfect .gold domain can take your jewelry brand to new heights. Its uniqueness and recognizability helps you to attract your target  audience very easily. Begin your digital journey with a well curated .gold domain that is simple yet special. Win it by bidding the highest.",
    buttonText: "Do not miss the premium bid",
  },
  {
    imgSrc: utilize,
    title: () => (
      <div>
        <span className="text-pent">Utilize</span> it.
      </div>
    ),
    description:
      "You can use your perfect .gold domain after winning it. It opens up a wide market for you in the digital ocean. A .gold domain, coupled with a good website, marketing and SEO can increase your customer base by manifolds. Use the .gold domain and earn millions.",
    buttonText: "Rise to the next level",
  },
];

function FlowCards() {
  return (
    <div>
      <div className="flow">
        <div className="flow_inner">
          {flowData.map((flow, index) => (
            <Fade bottom opposite={true} exit={true}>
              {/* <Shapes /> */}
              <div className="flow_item flow_item--1 note" key={index}>
                <div className="flow-left">
                  <img src={flow.imgSrc} alt="" className="flow-img1" />
                </div>
                <div className="flow_item--inner flow-right overflow-hidden">
                  <Fade left delay={150}>
                    <p className="heading flow-title ">{flow.title()}</p>
                  </Fade>
                  <Fade left delay={300}>
                    <p className="description paragraph">{flow.description}</p>
                  </Fade>
                  <br />
                  <Fade left delay={450}>
                    <Link to="/featured" className="red-btn">
                      {flow.buttonText}
                    </Link>
                  </Fade>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowCards;
