import React, { useEffect, useState } from "react";
import FeaturedItemCard from "../Cards/FeaturedItemCard";
import "./Container.css";
import Fade from "react-reveal/Fade";
import loader from "./../Cards/loader-timer-main.gif";
import Product from "../DomainSearch/Product";
import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

function ContainerFeaturedItems({ data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);
  console.log(data);

  return (
    <div className="featued-partt">
      <Fade bottom>
        <div className="flex items-end justify-center py-3 px-2 text-4xl font-bold mb-4 sm:mb-6 featured-title-part ">
          <div className="featured-head title !relative">
            {/* Featured Auctions */}
            <span className="text-white">Premium</span> .Gold Domains
          </div>
          {/* <a className="green-btn" href="/featured">
          See all
        </a> */}
        </div>
        <p className="home-subtitle text-white">
          Here are some exclusive premium .gold domains available for you to
          grab. Invest now to elevate your brand.
        </p>
      </Fade>
      {loading ? (
        <div className="">
          <img src={loader} alt="" className="w-[80px] m-auto" />
          <p className="paragraph text-black !m-auto text-center">
            Loading the premium .gold domains...
          </p>
        </div>
      ) : (
        <Fade bottom>
          <div className="featured-cards-total  ">
            <div className="products-container">
              <div className=" auction-price-card1 auction-price-card-tabs-home">
                <div className="auction-product-left">
                  <div className="flex items-left text-left justify-between  flex-col name-div heading !text-white">
                    Domain
                  </div>
                  <div className="premium-div heading text-white">
                    <span>Category</span>
                  </div>
                  <div className="bid-div heading text-white">Bids</div>
                  <div className="last-date-div time-left heading text-white">
                    Time Left
                  </div>
                  <div className="price-div heading text-white">Price</div>
                </div>
              </div>
            </div>
            <div className="home-premium-domains">
              {data &&
                data.slice(0, 8).map((item, idx) => (
                  <div key={item?.ID} className="home-domain">
                    <Product key={item?.id} {...item} />
                  </div>
                ))}
              <div className="show-more-div">
                <Link to="/featured" className="show-more-btn-home ">
                  Show More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default ContainerFeaturedItems;
