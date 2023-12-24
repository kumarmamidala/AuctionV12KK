import React from "react";
import Login from "../components/Login/Login";
import TopBar from "../components/TopBar";
import Footerr from "../components/Footerr/Footerr";

function LoginPage() {
  return (
    <div>
      <TopBar />
      {/* <HeroOther title="LOGIN" background_image={background} /> */}
      <Login />
      {/* <Auth /> */}
      <Footerr />
    </div>
  );
}

export default LoginPage;
