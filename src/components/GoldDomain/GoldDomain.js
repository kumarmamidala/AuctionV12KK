import React from "react";
import ReserveButton from "./ReserveButton";
import Typed from "react-typed";
import Jump from "react-reveal/Jump";
import "./home_page_styles/homePage.css";

function GoldDomain() {
  return (
    <div>
      <div className="homepage" name="/">
        <h2 className="welcomeText">
          WELCOME TO <span style={{ color: "#fbcb04" }}>.GOLD</span> &nbsp;
          DOMAIN EXTENSIONS.
        </h2>
        {/* 
        <Typed
          className="typing-effect"
          strings={[
            'Make yourself comfortable. We make your comfort our priority',
            "Spend your vacation here with us, we'll make it woth your stay",
            'This is home away from home',
          ]}
          typeSpeed={60}
          backSpeed={50}
          startDelay={2000}
          loop
        /> */}
        <p class="paragraph-white">
          A .gold domain extension provides a profitable start for gold-based
          businesses by establishing a strong online presence, improving search
          engine rankings, and creating a memorable web address that stands out
          from competitors.
        </p>
        <button class="custom-btn main-button mt-8">Register Now</button>
        {/* <Jump delay={1500} count={20}>
          {<ReserveButton text={'Reserve Now'} />}
        </Jump> */}
      </div>
    </div>
  );
}

export default GoldDomain;
