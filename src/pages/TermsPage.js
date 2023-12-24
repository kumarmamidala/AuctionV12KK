import React from "react";
import Footerr from "../components/Footerr/Footerr";
import HeroOther from "../components/HeroOther/HeroOther";
import TopBar from "../components/TopBar";
import background from "./../components/Hero/media/Two4.png";
import TermsConditions from "./../components/Terms/TermsConditions";

function TermsPage() {
  return (
    <div>
      <TopBar />
      <HeroOther title="Terms & Conditions" background_image={background} />
      <TermsConditions />
      <Footerr />
    </div>
  );
}

export default TermsPage;
