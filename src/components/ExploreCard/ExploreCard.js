import React from "react";
import { BiBriefcase, BiFolder, BiMap } from "react-icons/bi";

import image from "./media/Website Creator-bro.png";
import "./ExploreCard.css";

const ExploreCard = () => {
  return (
    <div className="flex justify-between items-center w-full md:px-[60px] gap-5 lg:mt-0 mt-10 pb-10 explore-section">
      <div className="lg:w-1/2 w-full lg:mb-0 mb-5 lg:!text-left explore-content">
        <h3 className="text-4xl font-bold !text-[45px] text-[#fbcb04] my-4 title !text-left">
          <span className="text-primary">Domain Name</span> Value
        </h3>
        <hr className="!w-full" />
        <h2 className="font-medium leading-normal paragraph !normal-case mt-[20px]">
          We know what web addresses are really worth and every domain is
          different. Our scientifically sound, expert appraisals – for both
          individual domains and domain portfolios.
        </h2>
        {/* <p className="my-3 paragraph">
          The question both buyers and sellers ask us is: How much can a domain
          cost?
        </p> */}

        <div className="flex flex-wrap md:ml-0 items-center gap-[20px] mt-[20px] explore-ul">
          <p className="flex items-center gap-1 paragraph ">
            <BiMap className="text-primary text-2xl" />
            <span>Our domain evaluation is incredibly fast</span>
          </p>

          <p className="flex items-center gap-1 paragraph ">
            <BiBriefcase className="text-primary text-2xl" />
            <span>Our services are affordable</span>
          </p>

          <p className="flex items-center gap-1 paragraph ">
            <BiFolder className="text-primary text-2xl" />
            <span>We provide scientifically backed results</span>
          </p>
        </div>
        <button className="red-btn">Get In Touch</button>
      </div>
      <div className="lg:w-1/2 w-full explore-image">
        <img src={image} alt="" className="appraisal-hero-img" />
      </div>
    </div>
  );
};

export default ExploreCard;
