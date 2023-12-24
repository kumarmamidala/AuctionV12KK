import React from "react";
import { Link } from "react-router-dom";
import "./FancyCards.css";

function FancyCards() {
  return (
    <div class="fancy-cards">
      <h1 className="title text-center ">
        <span className="text-primary">Exclusive services </span>
        for domain sellers
      </h1>
      <section className="card-container">
        <article className="card-container__card">
          <div className="card-container__card__content">
            <h3 class="heading ">Acquire Your Perfect Domain</h3>
            <p class="paragraph ">
              Acquire the perfect domain for your brand and dominate the digital
              world. Our easy auction platform and competitive bidding process
              will help you secure a memorable and influential name.
            </p>
            <Link to="/featured">
              <button className="red-btn">
                Learn More <span class="arrow-hover">→</span>
              </button>
            </Link>
          </div>
        </article>
        <article className="card-container__card">
          <div className="card-container__card__content">
            <h3 class="heading ">Domain Appraisal By The Experts</h3>
            <p class="paragraph ">
              Get a professional and accurate evaluation of your domain value
              with our expert appraisal services. Our team of industry experts
              will provide you with a detailed report and market guidance.
            </p>
            <Link to="/AuctionAppraisals">
              <button className="red-btn">
                Learn More<span class="arrow-hover">→</span>
              </button>
            </Link>
          </div>
        </article>
        <article className="card-container__card">
          <div className="card-container__card__content">
            <h3 class="heading ">Efficient Brokerage Services</h3>
            <p class="paragraph ">
              Just let us know which domain you are interested in and entrust
              our brokers with the negotiations. We will assign you a personal
              domain broker who will initiate negotiations with the owner on
              your behalf.
            </p>
            <Link to="/Help">
              <button className="red-btn">
                Learn More<span class="arrow-hover">→</span>
              </button>
            </Link>
          </div>
        </article>
        <article className="card-container__card">
          <div className="card-container__card__content">
            <h3 class="heading ">
              {" "}
              Sell your Domain At The Best Possible Price{" "}
            </h3>
            <p class="paragraph ">
              Get the best return on your investment by selling your domain at
              the highest possible price. Our platform offers a wide range of
              buyers and a competitive bidding process to ensure you get the
              best deal.{" "}
            </p>
            <Link to="/PostaBid">
              <button className="red-btn">
                Learn More <span class="arrow-hover">→</span>
              </button>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export default FancyCards;
