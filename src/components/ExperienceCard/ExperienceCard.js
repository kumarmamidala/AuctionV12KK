import React from "react";
import "./Experience.css";
import Experience from "./Experience";
import Card from "./Card";
import { Link } from "react-router-dom";
import buyer from "./Media/bidmain.png";
import Sellers_img from "./../FlowCards/Media/2.png";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Fade from "react-reveal/Fade";

import { Buyers, Sellers } from "./Experience";
import buyer_small from "./Media/buy.png";
import seller_small from "./Media/sell.png";
import Shapes from "../Shapes/Shapes";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ExperienceCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="resume container section " id="resume">
      <Fade bottom>
        <div className="buyers-sellers-div">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 0, borderColor: "divider" }}></Box>
            {/* <Shapes /> */}
            <div className="buyers-sellers-tabscreen">
              <div className="buyers-sellers-tabscreen-img">
                <img src={buyer} alt="" className="buyer-seller-img-inner" />
              </div>
              <div className="buyers-sellers-tabscreen-content">
                <Fade bottom>
                  <div className="featured-head title !relative text-center">
                    {/* Featured Auctions */}
                    <span className="text-pent">.Gold Domains</span> Trading
                    Made Easy
                  </div>
                  <p className="home-subtitle">
                    Discover the world of premium .gold domains, united in one
                    convenient destination.
                  </p>
                </Fade>
                {Buyers.map((item) => (
                  <div className="buyers-sellers-tabscreen-content-inner-box">
                    <div className="flex justify-between !w-full mb-[8px] ">
                      <Fade left delay={500}>
                        <h1 className="heading !text-left">{item.title}</h1>
                        <span className="text-[30px] text-pent">
                          {item.icon}
                        </span>
                      </Fade>
                    </div>
                    <Fade left delay={750}>
                      <p className="paragraph">{item.description}</p>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </div>
      </Fade>
    </section>
  );
};

export default ExperienceCard;
