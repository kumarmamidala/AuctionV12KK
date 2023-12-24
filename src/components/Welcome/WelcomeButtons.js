import React from "react";

function WelcomeButtons() {
  return (
    <div className={"welcome-buttons"}>
      <button class="custom-btn main-button more-btn">Learn More</button>

      <p className="paragraph">or</p>

      <button class="custom-btn main-button more-btn">Watch Video</button>
    </div>
  );
}

export default WelcomeButtons;
