import React, { useState } from "react";
// import {
//   FaCocktail,
//   FaHiking,
//   FaShuttleVan,
//   FaBeer,
//   BsPlusLg,
// } from "react-icons/fa";

import "./Service.css";

import { motion } from "framer-motion";
const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", stiffness: 100 },
  },
};
const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const Service = ({ data }) => {
  return (
    <div className="serviceContainer">
      <div className="service-header"></div>
      <div className="service-detail bg-yellow">
        <center>
          <h2 className=" title-gold pb-0">DOMOHOST at a glance</h2>
        </center>

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          className="service-center"
        >
          {data.map((item, index) => {
            return (
              <motion.article
                variants={textAnimate}
                key={index}
                className="serviceer"
              >
                <motion.span variants={textAnimate}>{item.icon}</motion.span>
                <motion.h3
                  whileHover={{ scale: 1.05, originX: 0, color: "#aa8353" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  class="heading"
                >
                  {item.title}
                </motion.h3>
                <p class="paragraph">{item.info}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
