import React from "react";
import Login from "../components/Login/Login";
import TopBar from "../components/TopBar";
import Footerr from "../components/Footerr/Footerr";
import ContactSec from "../components/Profile/ContactSec";

function LoginPage() {
  return (
    <div>
      <TopBar />
      {/* <HeroOther title="LOGIN" background_image={background} /> */}
      <Login />
      {/* <Auth /> */}
      <ContactSec />
      <Footerr />
    </div>
  );
}

export default LoginPage;
