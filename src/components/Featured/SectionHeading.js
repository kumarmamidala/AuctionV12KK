import React from "react";
import "./Custom.css";

const SectionHeading = ({ heading }) => {
  const { subHeading, headingOne, headingTwo, describe } = heading;
  return (
    <div className="lg:py-10 py-5 text-center">
      <h3 className="text-secondary text-2xl font-semibold">{subHeading}</h3>
      <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl my-2 title text-center ml-0">
        {headingOne} <span className="text-primary">{headingTwo}</span>
      </h2>
      <p className="lg:w-1/2 mx-auto text-base paragraph">{describe}</p>
    </div>
  );
};

export default SectionHeading;
