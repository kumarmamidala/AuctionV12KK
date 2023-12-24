import React from "react";
import "./Custom.css";

const Card = ({ data }) => {
  const { icon, title, subtitle, review } = data;
  return (
    <div className="why-us-item p-6 rounded-xl bg-transparent">
      <div className="why-us-content">
        <p className="text-6xl mb-3 icon text-primary">{icon}</p>
        <h4 className="font-semibold text-xl leading-6 heading ">{title}</h4>
        <p className="my-4 text-base font-normal paragraph ">{subtitle}</p>
        {/* <p class="mb-0 text-[#fbcb04] review-para paragraph !text-black">
          {review}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
