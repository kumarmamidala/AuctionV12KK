import Ads from "../components/Ads";
import React, { useContext, useState } from "react";
import ContainerFeaturedItems from "../components/Containers/ContainerFeaturedItems";
import Trending from "../components/Trendinglist/TrendingList";
import Process from "../components/Process/Process";
import { DataHomeQuestions } from "../components/FAQs/Data";
import Questions from "../components/FAQs/Questions";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero/Hero";
import Discover from "../components/Discover/Discover";
import FlowCards from "../components/FlowCards/FlowCards";
import { ProductContext } from "../Context/products_context";
import Shapes from "../components/Shapes/Shapes";
import Footerr from "../components/Footerr/Footerr";

function Home() {
  const productss = useContext(ProductContext);
  return (
    <div className="flex flex-col max-w-10xl mx-auto scroll-smooth">
      <TopBar />
      <Hero />
      <div className="ads-flowcards-div">
        <Ads />
        <FlowCards />
      </div>

      <ContainerFeaturedItems data={productss} />
      {/* <Trending /> */}
      <ExperienceCard />
      <Process />

      {/* <StepsLine /> */}
      {/* <ContainerSoldItem data={ProductData} /> */}
      {/* <ContainerCurrentlyListed data={ProductData} /> */}
      <Discover />
      <Questions data={DataHomeQuestions} />
      <Footerr />
    </div>
  );
}

export default Home;
