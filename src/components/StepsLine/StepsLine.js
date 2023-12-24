import React from "react";
import step1 from "./StepsLine_Media/Step41-removebg-preview.png";
import step2 from "./StepsLine_Media/Step22-removebg-preview.png";
import step3 from "./StepsLine_Media/Step23-removebg-preview.png";
import step4 from "./StepsLine_Media/Step24-removebg-preview.png";

import "./StepLine.css";

const stepsData = [
  {
    image: step1,
    badgeText: "Valuation",
    heading: "Determine the value",
    description:
      "Conduct research on recent sales of similar domains to determine a reasonable asking price.",
  },
  {
    image: step2,
    badgeText: "Listing",
    heading: "List your domain",
    description:
      "List your domain at getBrand.gold after valuation for successful sale process.",
  },
  {
    image: step3,
    badgeText: "Finalization",
    heading: "Choose highest bid",
    description:
      "Select the highest bid from the offers and finalize the sale with a secure payment transfer.",
  },
  {
    image: step4,
    badgeText: "Transfer",
    heading: "Domain Handover",
    description:
      "Securely transfer domain ownership to the buyer's account for a successful sale.",
  },
];

const StepsLine = () => {
  return (
    <div className="container-fluid border-gray-100/70 py-16 sell-flow">
      <div className="text-center step-head-div">
        <h1 className="title">Profiting from a domain made easy</h1>
        <p className="paragraph">
          Here is a simplified process for you to get a maximum profit from your
          .gold domain
        </p>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://chisnghiax.com/ciseco/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg')",
        }}
        className="grid w-[100%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-no-repeat bg-contain bg-top flow-div"
      >
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="w-[100%] px-[30px] py-[30px] lg:py-0 lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none step-card"
          >
            <div>
              <div className="text-center mt-auto space-y-5">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-[6px] font-medium text-md relative bg-[#f1eff7]  paragraph red-btn1 !my-0">
                  {step.badgeText}
                </span>
                <h3 className="text-2xl font-semibold heading">
                  {step.heading}
                </h3>
                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 mt-2 paragraph">
                  {step.description}
                </span>
              </div>
            </div>
            <div className="mb-4 sm:mb-10 mx-auto step-image-div">
              <img
                src={step.image}
                className="rounded-3xl step-image"
                alt={`step-${index + 1}-img`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsLine;
