import React from "react";
import "./Process.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarDays,
  faPenRuler,
  faTruck,
  faPuzzlePiece,
  faFlagCheckered,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import {
  GiUnicorn,
  GiPisaTower,
  GiGoldBar,
  GiCutDiamond,
  GiMagnet,
} from "react-icons/gi";
import { TbLayersDifference } from "react-icons/tb";
import { IoMagnet } from "react-icons/io";

import Fade from "react-reveal/Fade";

function Main() {
  return (
    <Fade bottom>
      <main className="why-gold">
        <section className="processContainer" id="processContainer">
          <Fade bottom>
            <h1 className="  title ">
              Why <span class="text-pent"> .Gold Domain</span> extension ?
            </h1>
            <p className="home-subtitle">
              .Gold domains signify prestige, enhancing trust, and uniqueness in
              online branding
            </p>
          </Fade>
          <Fade bottom>
            <div className="processAnimation">
              <div className="aniItemRight">
                <div className="icons">
                  <div className="aniItemIconContainer">
                    {/* <FontAwesomeIcon className="aniItemIcon" icon={faAddressBook} /> */}
                    <GiUnicorn className="aniItemIcon" />
                  </div>

                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub">Unique </h3>
                  <p class="paragraph">
                    Unique, memorable .gold extensions are perfect for your gold
                    based businesses.
                  </p>
                </div>
              </div>
              <div className="aniItemLeft">
                <div className="reverse icons">
                  <div className="aniItemIconContainer blue">
                    {/* <FontAwesomeIcon
                  className="aniItemIconBlue"
                  icon={faCalendarDays}
                /> */}
                    <GiPisaTower className="aniItemIconBlue" />
                  </div>
                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub">Recognizable</h3>
                  <p class="paragraph">
                    .gold domain extension enhances brand recognition, sets
                    apart from competition.
                    {/* , and conveys trust and luxury online. Choose
                .gold. */}
                  </p>
                </div>
              </div>
              <div className="aniItemRight">
                <div className="icons">
                  <div className="aniItemIconContainer orange">
                    {/* <FontAwesomeIcon
                  className="aniItemIconOrange"
                  icon={faPenRuler}
                /> */}
                    <TbLayersDifference className="aniItemIconOrange" />
                  </div>
                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub">Differentiation</h3>
                  <p class="paragraph">
                    .gold domain differentiates your brand from regular domains.
                  </p>
                </div>
              </div>
              <div className="aniItemLeft">
                <div className="reverse icons">
                  <div className="aniItemIconContainer">
                    {/* <FontAwesomeIcon className="aniItemIcon" icon={faTruck} /> */}
                    <GiMagnet className="aniItemIcon" />
                  </div>
                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub"> Attractive</h3>
                  <p class="paragraph">
                    .gold domain extension grabs attention, making it
                    unforgettable.
                    {/* in the online world. */}
                  </p>
                </div>
              </div>
              <div className="aniItemRight">
                <div className="icons">
                  <div className="aniItemIconContainer blue">
                    {/* <FontAwesomeIcon
                  className="aniItemIconBlue"
                  icon={faPuzzlePiece}
                /> */}
                    <GiGoldBar className="aniItemIconBlue" />
                  </div>
                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub">Defines You</h3>
                  <p class="paragraph">
                    .gold domain sets the standard for distinction in the online
                    marketplace.
                  </p>
                </div>
              </div>
              <div className="aniItemLeft">
                <div className="reverse icons">
                  <div className="aniItemIconContainer orange">
                    {/* <FontAwesomeIcon
                  className="aniItemIconOrange"
                  icon={faFlagCheckered}
                /> */}
                    <GiCutDiamond className="aniItemIconOrange" />
                  </div>
                  <FontAwesomeIcon
                    className="faEllipsisVertical"
                    icon={faEllipsisVertical}
                  />
                </div>

                <div className="processAnimationText">
                  <h3 class="heading-sub">Brandable</h3>
                  <p class="paragraph">
                    .gold domain extension creates a unique brand in the crowded
                    online markteplace.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </main>
    </Fade>
  );
}

export default Main;
