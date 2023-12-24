import React from "react";

import "./WelcomeBanner.css";
import { BiChevronsRight } from "react-icons/bi";

const WelcomeBanner1 = ({ data }) => {
  return (
    <div className="welcame-banner-bg welcame-banner-bg1">
      <div className="container pt-5 welcome-container">
        {data.map((item) => {
          return (
            <div className="row ">
              <div className="col-md-6 d-flex justify-content-center align-items-center pb-5 welcome-banner-image">
                <img className="img-fluid" src={item.img} alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center pb-5 welcome-banner-content md:pl-20">
                <div className="text-black">
                  <small className=" title !text-black">{item.heading}</small>
                  <br />
                  <h1 className=" heading !normal-case text-left !text-black">
                    {item.subheading}
                  </h1>
                  <div className="w-service my-4">
                    <p class="paragraph !text-black">
                      {/* <i class="fa-solid fa-angles-right me-2"></i> */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline", color: "#fbcb04" }}
                        />{" "}
                      </span>
                      {item.t1}
                    </p>
                    <p class="paragraph !text-black">
                      {/* <i class="fa-solid fa-angles-right me-2"></i>  */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline", color: "#fbcb04" }}
                        />{" "}
                      </span>
                      {item.t2}
                    </p>
                    <p class="paragraph !text-black">
                      {/* <i class="fa-solid fa-angles-right me-2"></i> */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline", color: "#fbcb04" }}
                        />{" "}
                      </span>
                      {item.t3}
                    </p>
                    <p class="paragraph !text-black">
                      {/* <i class="fa-solid fa-angles-right me-2"></i>  */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline", color: "#fbcb04" }}
                        />{" "}
                      </span>
                      {item.t4}
                    </p>
                  </div>
                  <button className=" custom-btn main-button">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomeBanner1;
