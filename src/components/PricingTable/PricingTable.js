import React from "react";
import { Link } from "react-router-dom";
import "./PricingTables.css"

function PricingTable() {
  return (
    <div>
      {" "}
      <div className="container-fluid ccccc">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  <h2>Basic</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>25
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 10 GB Space{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 3 Domain
                      Names{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 20 Email
                      Address{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-times" aria-hidden="true"></i> Live
                      Support{" "}
                    </li>
                  </ul>
                </div>
                <Link to="#">Start Now </Link>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-plane" aria-hidden="true"></i>
                  <h2>Standard</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>50
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 50 GB Space{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 5 Domain
                      Names{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> Unlimited
                      Email Address{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-times" aria-hidden="true"></i> Live
                      Support{" "}
                    </li>
                  </ul>
                </div>
                <Link to="#">Start Now </Link>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <h2>Premium</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>100
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> Unlimited
                      GB Space{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> 30 Domain
                      Names{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> Unlimited
                      Email Address{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check" aria-hidden="true"></i> Live
                      Support{" "}
                    </li>
                  </ul>
                </div>
                <Link to="#">Start Now </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
