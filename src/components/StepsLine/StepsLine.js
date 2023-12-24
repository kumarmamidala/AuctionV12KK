import React from "react";
import { GiMagnifyingGlass, GiSparkles } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { BsCashStack } from "react-icons/bs";

import step1 from "./StepsLine_Media/Step41.png";
import step2 from "./StepsLine_Media/Step22.png";
import step3 from "./StepsLine_Media/Step23.png";
import step4 from "./StepsLine_Media/Step24.png";

import "./StepLine.css";

const StepsLine = () => {
  return (
    <div className="container-fluid border-gray-100/70 py-16 sell-flow">
      <div
        style={{
          backgroundImage:
            "url('https://chisnghiax.com/ciseco/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg')",
        }}
        className="grid w-[100%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-no-repeat bg-contain bg-top"
      >
        {/* card start */}
        <div className="w-[100%] px-[30px] py-[30px] lg:py-0  lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none step-card">
          <div className="mb-4 sm:mb-10  !mx-auto step-image-div">
            <img src={step1} className="rounded-3xl step-image" alt="nc-imgs" />
            {/* <GiMagnifyingGlass
              style={{ fontSize: '140px', color: '#fbcb04' }}
            /> */}
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-[6px] font-medium text-md relative bg-[#f1eff7]  paragraph red-btn1 !my-0">
                Valuation
              </span>
              <h3 className="text-2xl font-semibold heading ">
                Determine the value{" "}
              </h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 mt-2 paragraph ">
                Conduct research on recent sales of similar domains to determine
                a reasonable asking price.
              </span>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="px-[30px] py-[30px] lg:py-0   lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none step-card">
          <div className="mb-4 sm:mb-10  mx-auto step-image-div">
            <img src={step2} className="rounded-3xl step-image" alt="nc-imgs" />
            {/* <FiShoppingBag style={{ fontSize: '140px', color: '#fbcb04' }} /> */}
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-[6px] font-medium text-md red-btn1 !my-0 bg-[#f1eff7]  paragraph">
                Listing
              </span>
              <h3 className="text-2xl font-semibold heading">
                List your domain
              </h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 mt-2 paragraph ">
                List your domain at getBrand.gold after valuation for successful
                sale process.
              </span>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="px-[30px] py-[30px] lg:py-0   lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none step-card">
          <div className="mb-4 sm:mb-10 mx-auto step-image-div">
            <img src={step3} className="rounded-3xl step-image" alt="nc-imgs" />
            {/* <BsCashStack style={{ fontSize: '140px', color: '#fbcb04' }} /> */}
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-[6px] font-medium text-md relative red-btn1 !my-0 bg-[#f1eff7]  paragraph">
                Finalization
              </span>
              <h3 className="text-2xl font-semibold heading ">
                Choose highest bid
              </h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 mt-2 paragraph ">
                Select highest bid from the offers and finalize sale with secure
                payment transfer.
              </span>
            </div>
          </div>
        </div>
        {/* last card */}
        <div className="px-[30px] py-[30px] lg:py-0   lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none step-card">
          <div className="mb-4 sm:mb-10 step-image-div mx-auto">
            <img src={step4} className="rounded-3xl step-image" alt="nc-imgs" />
            {/* <GiSparkles style={{ fontSize: '140px', color: '#fbcb04' }} /> */}
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-[6px] font-medium text-md red-btn1 !my-0 bg-[#f1eff7]  paragraph">
                Transfer
              </span>
              <h3 className="text-2xl font-semibold heading">
                Domain Handover
              </h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 mt-2 paragraph ">
                Securely transfer domain ownership to buyer's account for
                successful sale.
              </span>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default StepsLine;
