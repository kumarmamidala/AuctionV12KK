import React, { useState } from "react";
import Swal from "sweetalert2";
import logo from "../media/Newv12.png";
import { Link } from "react-router-dom";

import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiRightArrow } from "react-icons/bi";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Thankyou from "./media/Thank you2.png";
import hand from "./media/righthand.gif";

import "./Footerr.css";

const Footerr = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      Swal.fire({
        title: "Thanks for subscribing!",
        text: "You will be the first to know about our newsletter.",
        imageUrl: Thankyou,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "welcome image",
      });
      setInput("");
    }
  };
  return (
    <>
      {" "}
      <div className=" footer-box">
        <div className="upper  items-center  border-b footer-part-one">
          <div className="">
            <h2 className="font-semibold text-2xl title mb-[20px] text-white ">
              Embrace digital transformation with .gold!
            </h2>
            <p className="text-[#323232a1] paragraph-white text-[15px] !text-white">
              Join our community of .gold shoppers today and experience the
              thrill of winning an auction at great prices.
            </p>
          </div>
          <div className="  ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row subscribe-form"
              action="#"
            >
              <input
                required
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="email"
                className="subscribe-input"
                placeholder="EMAIL"
              />

              <button type="submit" className="subscribe-btn">
                Subscribe
                <BiRightArrow className="text-white mt-[2px] subscribe-icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="row footer-part-two">
          <div className="col-md-3">
            <div>
              <img src={logo} alt="" className="footer-logo" />
            </div>
            <p className="text-gray-500  !text-white paragraph-white font-[Inter] mt-[20px] ">
              At .GOLD AUCTIONS, we're passionate about transforming business
              operations and driving success in a fast-evolving tech landscape.
            </p>
          </div>
          <div class="col-md-2 ml-[5%]">
            <h2 className="text-2xl font-bold mb-2 md:mt-[10px] text-white font-['Mukta']">
              Quick Links
            </h2>
            <ul className="text-white font-[Inter] flex flex-col">
              <Link to="/Solutions" className="timeline-item-content">
                <li className="footer_links text-underline">Domain Auctions</li>
              </Link>
              <Link to="/Services" className="timeline-item-content">
                <li className="footer_links text-underline">List a Domain</li>
              </Link>
              <Link to="/Ourstory" className="timeline-item-content">
                <li className="footer_links text-underline">
                  Domain Appraisals
                </li>
              </Link>
              <Link to="/Ourstory" className="timeline-item-content">
                <li className="footer_links text-underline">Domain Parking</li>
              </Link>
            </ul>
          </div>
          <div class="col-md-2 ml-[3%] mr-[2%]">
            <h2 className="text-2xl font-bold mb-2 md:mt-[10px] text-white font-['Mukta']">
              Connect
            </h2>
            <ul className="text-white flex flex-col">
              <Link to="/Blogs" className="timeline-item-content">
                <li className="footer_links text-underline">Profile</li>
              </Link>
              <Link to="/Team" className="timeline-item-content">
                <li className="footer_links text-underline">Help</li>
              </Link>
              <Link to="/Terms" className="timeline-item-content">
                <li className="footer_links text-underline">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="text-2xl font-bold mb-2 md:mt-[10px] text-white font-['Mukta']">
              Address
            </h2>
            <ul className="text-white font-['Mukta'] text-[18px] text-[#ffffffdb] leading-[28px]">
              <li className="">
                2-5- 538/D, 4th Floor, <br />
                Dr. KSR Sastry Business Park, <br />
                KU-X Road Hanamkonda, TS 506009 India
              </li>
              <li className="">
                <a href="tel: +919581430505" id="call">
                  <span className="inline-block">
                    <img src={hand} alt="" className="blog-hand1" />
                  </span>
                  <span className="footer-link123">+91 9581430505</span>
                </a>
                <ReactTooltip
                  anchorId="call"
                  place="left"
                  content="Talk to an expert"
                  className="copy-box-home-vision"
                />
              </li>
              <li className="">
                <a href="mailto: info@terces.io" id="mail">
                  <span className="inline-block">
                    <img src={hand} alt="" className="blog-hand1" />
                  </span>
                  <span className="footer-link123">info@terces.io </span>
                </a>
                <ReactTooltip
                  anchorId="mail"
                  place="left"
                  content="Write to us"
                  className="copy-box-home-vision"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-part-three">
          <div className="flex gap-[10px] terms-part-footer">
            <Link className="footer-link123">Privacy</Link>
            <Link className="footer-link123">Terms</Link>
            <Link className="footer-link123">Cookie Preferences</Link>
          </div>
          <div className="flex gap-[30px]">
            <a
              href="https://www.facebook.com/Terces1555"
              className="bg-white p-[6px] rounded-[15px] t-footer-icon"
              id="mission-div"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-[#002549] fb " />
            </a>
            <ReactTooltip
              anchorId="mission-div"
              place="top"
              content="Like Us"
              className="copy-box-home-vision"
            />
            <a
              href="https://www.youtube.com/@TercesSolutionsPrivatelimited/channels"
              className="bg-white p-[6px] rounded-[15px] t-footer-icon"
              id="mission-div1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-[#002549] yt" />
            </a>
            <ReactTooltip
              anchorId="mission-div1"
              place="top"
              content="Subscribe Us"
              className="copy-box-home-vision"
            />
            <a
              href="https://www.instagram.com/terces_solutions/"
              className="bg-white p-[6px] rounded-[15px]  t-footer-icon"
              id="mission-div2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="text-[#002549] insta" />
            </a>
            <ReactTooltip
              anchorId="mission-div2"
              place="top"
              content="Follow Us"
              className="copy-box-home-vision"
            />
            <a
              href="https://twitter.com/terceS_sol"
              className="bg-white p-[6px] rounded-[15px] t-footer-icon"
              id="mission-div3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#002549] twitter" />
            </a>
            <ReactTooltip
              anchorId="mission-div3"
              place="top"
              content="Follow Us"
              className="copy-box-home-vision"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerr;
