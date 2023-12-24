import React from "react";
import {
  DataBrokerageServiceQuestions,
  DataFeaturedQuestions,
} from "../components/FAQs/Data";
import Questions from "../components/FAQs/Questions";
import Join from "../components/Join/Join";
import Testimonials from "../components/Testimonials/Testimonials";
import TopBar from "../components/TopBar";
import { DataBrokerageServiceWelcomeBanner } from "../components/WelcomeBanner/Data";
import WelcomeBanner1 from "../components/WelcomeBanner/WelcomeBanner1";
import Footerr from "../components/Footerr/Footerr";

function BrokerageService() {
  return (
    <div>
      <TopBar />
      <WelcomeBanner1 data={DataBrokerageServiceWelcomeBanner} />

      <Join />
      <Testimonials />
      <br></br>
      <br></br>

      <Questions data={DataBrokerageServiceQuestions} />
      <Footerr />
    </div>
  );
}

export default BrokerageService;
