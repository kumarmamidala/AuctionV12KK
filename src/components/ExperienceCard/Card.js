import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item">
      {/* <i className={props.icon}></i> */}
      <span className="experience-icon ">{props.icon} </span>
      {/* <span className="timeline__date">{props.year}</span> */}
      <h3 className=" timeline__title !text-black ">{props.title}</h3>
      <p className="timeline__text paragraph !text-black">{props.desc}</p>
    </div>
  );
};

export default Card;
