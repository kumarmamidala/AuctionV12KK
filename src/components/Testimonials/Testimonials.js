import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "./testimonialsData";
import { useState } from "react";
import leftArrow from "./media/leftArrow.png";
import rightArrow from "./media/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="Testimonials">
      <div className="left-t">
        <p class="heading !text-[#fbcb04]">Hire a broker to buy this domain</p>
        <p className="stroke-text title mb-[20px] md:mb-[50px] mt-[10px]">
          Our experts at your service
        </p>
        {/* <span></span> */}
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          class="paragraph !tracking-normal !normal-case mb-[5px]"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span class=" !text-[#fbcb04]">
          <span style={{ color: "var(--orange}" }}>
            {testimonialsData[selected].name} -{" "}
            {testimonialsData[selected].status}
          </span>{" "}
          <span class="!uppercase"> </span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        ></motion.img>

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLenght - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
