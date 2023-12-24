import React, { useEffect, useState } from "react";
import FeaturedItemCard from "../Cards/FeaturedItemCard";
import "./Container.css";
import Fade from "react-reveal/Fade";
import loader from "./../Cards/loader-timer-main.gif";
import Product from "../DomainSearch/Product";

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
            {data &&
              data.slice(0, 4).map((item, idx) => (
                <div key={item?.ID}>
                  <Product key={item?.id} {...item} />
                </div>
              ))}
          </div>
        </Fade>
      )}
    </div>
  );
}

export default ContainerFeaturedItems;
