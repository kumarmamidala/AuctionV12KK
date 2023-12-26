import Ads from "../components/Ads";
import React, { useContext, useEffect, useState } from "react";
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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import $ from "jquery";

function Home() {
  const productss = useContext(ProductContext);

  useEffect(() => {
    $(window).on("scroll", function () {
      $(window).scrollTop()
        ? $(".trending-div").addClass("scrolled-div")
        : $(".trending-div").removeClass("scrolled-div");
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="flex flex-col max-w-10xl mx-auto scroll-smooth home-main-div">
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
      <div className="trending-div">
        <div className="bid-now-div">
          <Link className="bid-now-div-btn">Bid Now</Link>
        </div>
        <div className="trending-domains12">
          <h1 className="heading">Trending Domains</h1>
          {/* <Trending Domains Component here /> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Set to 1 to show only one slide at a time
            autoplay={{ delay: 500, disableOnInteraction: true }}
          >
            {productss &&
              productss.slice(0, 4).map((item, idx) => (
                <SwiperSlide key={item?.ID}>
                  {/* Adjust the content inside the slider as needed */}
                  <h1>{item.Name}</h1>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Add more slides as needed */}
          {/* <p className="paragrpah">bishallmark.gold</p>
          <p className="paragrpah">tanishq.gold</p>
          <p className="paragrpah">bsk.gold</p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
