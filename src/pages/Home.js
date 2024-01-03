import Ads from "../components/Ads";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";

import loader from "./../components/Cards/loader-timer-main.gif";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import $ from "jquery";
import ProgressBar from "../components/ProgressBar";

import ball from "./../components/Hero/media/yellowspot.png";

function Home() {
  const productss = useContext(ProductContext);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productss && productss.length > 0) {
      setLoading(false);
    }
  }, [productss]);

  useEffect(() => {
    $(window).on("scroll", function () {
      $(window).scrollTop()
        ? $(".trending-div").addClass("scrolled-div")
        : $(".trending-div").removeClass("scrolled-div");
    });
  }, []);

  return (
    <div className="flex flex-col max-w-10xl mx-auto scroll-smooth home-main-div">
      <ProgressBar />
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

      <Discover />
      <Questions data={DataHomeQuestions} />
      <Footerr />
      <div className="trending-div">
        <div className="bid-now-div">
          <Link to="/featured" className="bid-now-div-btn">
            Bid Now
          </Link>
        </div>
        <div className="trending-domains12">
          <h1 className="heading mb-[10px]">Trending Domains</h1>
          {/* <Trending Domains Component here /> */}
          {loading ? (
            <div className="">
              <img src={loader} alt="" className="w-[60px] m-auto" />
              {/* <p className="paragraph text-black !m-auto text-center">
                Loading  .gold domains...
              </p> */}
            </div>
          ) : (
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={2000}
              organicArrows={false}
              bullets={false}
            >
              {productss &&
                productss.slice(0, 4).map((item, idx) => (
                  <div className="car-sel">
                    <Link to={`/Marketplace/${item.ID}`}>
                      {item.Name}
                      {/* <p>Rs.{item.Price}</p> */}
                    </Link>
                  </div>
                ))}
            </AutoplaySlider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
