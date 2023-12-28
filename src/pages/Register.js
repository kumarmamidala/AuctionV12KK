import React from "react";
import HeroOther from "../components/HeroOther/HeroOther";
import Signup from "../components/Login/Signup";
import TopBar from "../components/TopBar";
import background from "./../components/Hero/media/Two4.png";
import Footerr from "../components/Footerr/Footerr";
import ContactSec from "../components/Profile/ContactSec";

function Register() {
  return (
    <div>
      <TopBar />
      {/* <HeroOther title="SIGN UP" background_image={background} /> */}
      <Signup />
      <ContactSec />
      <Footerr />
    </div>
  );
}

export default Register;
