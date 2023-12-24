import React from "react";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import WelcomeButtons from "./WelcomeButtons";
import { Zoom } from "react-reveal";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <section id="welcome" name="aboutUs" className="welcome">
      <div>
        <h1 class="title-gold welcome-title">
          .GOLD DOMAIN{" "}
          <span class="!text-black">TAKES YOU TO THE NEW HEIGHTS.</span>
        </h1>
        <p class="paragraph">
          .gold domain extension specifically targets gold-based businesses,
          enhancing brand recognition, boosting online visibility and
          establishing trust with customers by demonstrating expertise in the
          gold industry.{" "}
        </p>

        <div className="image-columnnn col-lg-6 col-md-12 col-sm-12 order-2 text-center w-full">
          <div className="inner-column wow fadeInLeft">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
              frameBorder="0"
              height="250"
              src="https://www.youtube.com/embed/jf_4z4AKwJg"
              width="390"
              className="iframe-small-screen w-full"
            ></iframe>
          </div>
        </div>

        <Roll duration={1500} left>
          <img
            className={"overlay-pic"}
            src={
              "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            }
            alt=" a lady eating"
          ></img>
        </Roll>

        <Zoom>{/* <WelcomeButtons /> */}</Zoom>
      </div>
    </section>
  );
};
