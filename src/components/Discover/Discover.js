import Aos from "aos";
import React from "react";
import dis1 from "./media/Posts-rafiki.png";
import dis2 from "./media/Helping a partner-rafiki.png";
import dis3 from "./media/Bibliophile-cuate.png";
import "./Discovers.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Zoom from "react-reveal/Zoom";

Aos.init({ duration: "2000" });
const Discover = () => {
  return (
    <div className="md:py-16 relative container-fluid discover-part">
      <Fade bottom>
        <div className=" text-4xl md:text-5xl lg:text-6xl font-semibold">
          <h1 className="text-center lg:text-center  title ">
            Discover Your <span className="text-pent">Domain Value</span>{" "}
            {/* <span className="text-black"> with Our Services</span> */}
          </h1>
          <p className="home-subtitle">
            We determine and maximize your domain's true value for informed
            decisions.
          </p>
        </div>
      </Fade>
      {/* main section start */}
      <div className="discoverItem my-8  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Zoom left>
            <Link to="/GoldDomain">
              <div
                data-aos="fade-up"
                className="flex relative cursor-pointer w-full rounded-2xl overflow-hidden group  hover:!bg-[#3373A0] p-4 domain-cards"
              >
                <div className="text domain-inner">
                  <span className="block mb-2 text-2xl text-slate-700 domain-card-head">
                    Know it
                  </span>
                  <h2 className="text-2xl md:text-3xl text-slate-900  my-4 domain-card-para">
                    Invest in premium, high-demand domains for high returns.
                  </h2>
                  <Link to="/featured">
                    <button className="red-btn !mt-0">Discover .Gold</button>
                  </Link>
                </div>
                <div className="inset-5 sm:inset-8 discover-box-image domain-inner">
                  <img
                    className=" right-0 w-full max-w-[260px] h-full object-contain drop-shadow-xl"
                    src={dis3}
                    alt=""
                  />
                </div>
                {/* <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span> */}
              </div>
            </Link>
          </Zoom>
          <Zoom left delay={250}>
            {/* section start */}
            <Link to="/BrokerageService">
              <div
                data-aos="fade-up"
                className="flex relative cursor-pointer w-full rounded-2xl overflow-hidden group  hover:!bg-[#3373A0] p-4 domain-cards"
              >
                <div className="text domain-inner">
                  <span className="block mb-2 text-2xl text-slate-700 domain-card-head">
                    Get Help
                  </span>
                  <h2 className="text-2xl md:text-3xl text-slate-900  my-4 domain-card-para">
                    Rely on our expertise to get the best price for your
                    domains.
                  </h2>
                  <Link to="/Help">
                    <button className="red-btn !mt-0">Get Help</button>
                  </Link>
                </div>
                <div className=" inset-5 sm:inset-8 discover-box-image domain-inner">
                  <img
                    className=" right-0 w-full max-w-[260px] h-full object-contain drop-shadow-xl"
                    src={dis2}
                    alt=""
                  />
                </div>
                {/* <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span> */}
              </div>
            </Link>
          </Zoom>
          <Zoom left delay={500}>
            {/* section start */}
            <Link to="/PostaBid">
              <div
                data-aos="fade-up"
                class="flex relative cursor-pointer w-full rounded-2xl overflow-hidden group bg-white hover:!bg-[#3373A0] p-4 domain-cards"
              >
                <div class="text domain-inner">
                  <span className="block mb-2 text-2xl text-slate-700 domain-card-head">
                    Post Domain
                  </span>
                  <h2 class="text-2xl md:text-3xl text-slate-900   my-4 domain-card-para">
                    Quickly post your domains and reach a wide audience of
                    buyers
                  </h2>
                  <Link to="/Listadomain">
                    <button className="red-btn !mt-0">List .Gold</button>
                  </Link>
                </div>
                <div className=" inset-5 sm:inset-8 discover-box-image domain-inner">
                  <img
                    className="right-0 w-full max-w-[260px] h-full object-contain drop-shadow-xl"
                    src={dis1}
                    alt=""
                  />
                </div>
                {/* <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span> */}
              </div>
            </Link>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Discover;
