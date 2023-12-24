import React from "react";
import "./Header.css";
import ArrowIcon from "../media/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.png";
import SearchProduct from "../SearchProduct/SearchProduct";

const TransferSearch = () => {
  return (
    <div className="container-searchh">
      <div className="TitleWelcome">
        <h1 class="title">Learn your Domain value in Seconds</h1>
        <div className="Linearrow">
          <img src={ArrowIcon} alt="LineArrow" />
        </div>
        <p class="!w-full title-sub !normal-case paragraph ">
          Discover the true value of your domain with our instant appraisal
          tool. Enter the name and get accurate, industry-based results. Make
          informed decisions about your investment. Try it now!
        </p>
      </div>

      <SearchProduct />
    </div>
  );
};

export default TransferSearch;
