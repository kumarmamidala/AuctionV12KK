import React from "react";
import "./Custom.css";

const SectionHeading = ({ heading }) => {
  const { subHeading, headingOne, headingTwo, describe } = heading;
  return (
    <div className="lg:py-10 py-5 !text-center">
      {/* <h3 className="text-secondary text-2xl font-semibold">{subHeading}</h3> */}
      <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl my-2 title ml-[20px] md:ml-[78px]  !text-center">
        {headingOne} <span className="text-pent">{headingTwo}</span>
      </h2>
      <p className="lg:w-1/2 mx-auto text-base">{describe}</p>
    </div>
  );
};

export default SectionHeading;
