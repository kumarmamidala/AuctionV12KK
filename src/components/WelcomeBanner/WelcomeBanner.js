import React from "react";

import "./WelcomeBanner.css";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const WelcomeBanner = ({ data }) => {
  return (
    <div className="welcame-banner-bg">
      <div className="container pt-5 welcome-container">
        {data.map((item) => {
          return (
            <div className="row ">
              <div className="col-md-5 d-flex justify-content-center align-items-center pb-5 welcome-banner-image">
                <img className="welcome-img-12" src={item.img} alt="" />
              </div>
              <div className="col-md-7 d-flex align-items-center pb-5 welcome-banner-content md:pl-20">
                <div className="text-black w-full">
                  <small className=" title !text-white">{item.heading}</small>
                  <br />
                  <h1 className=" heading !normal-case text-left !text-white">
                    {item.subheading}
                  </h1>
                  <div className="w-service my-4">
                    <p class="paragraph !text-white">
                      {/* <i class="fa-solid fa-angles-right me-2"></i> */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline" }}
                          className="text-primary"
                        />{" "}
                      </span>
                      {item.t1}
                    </p>
                    <p class="paragraph !text-white">
                      {/* <i class="fa-solid fa-angles-right me-2"></i>  */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline" }}
                          className="text-primary"
                        />{" "}
                      </span>
                      {item.t2}
                    </p>
                    <p class="paragraph !text-white">
                      {/* <i class="fa-solid fa-angles-right me-2"></i> */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline" }}
                          className="text-primary"
                        />{" "}
                      </span>
                      {item.t3}
                    </p>
                    <p class="paragraph !text-white">
                      {/* <i class="fa-solid fa-angles-right me-2"></i>  */}
                      <span>
                        {" "}
                        <BiChevronsRight
                          style={{ display: "inline" }}
                          className="text-primary"
                        />{" "}
                      </span>
                      {item.t4}
                    </p>
                  </div>
                  <Link to="/Help">
                    <button className="red-btn !my-0">{item.button}</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomeBanner;
