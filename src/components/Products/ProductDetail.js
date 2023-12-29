import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SinglePrice from "./SinglePrice";
import { EffectFade, Navigation, Pagination } from "swiper";
import {
  MdSecurity,
  MdOutlineCheckCircle,
  MdLockOutline,
} from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
import TopBar from "../TopBar";

import { FaGlobe } from "react-icons/fa";
import { BsFillPersonFill, BsFillFileTextFill } from "react-icons/bs";
import { ProductContext } from "../../Context/products_context";
import Fade from "react-reveal/Fade";

import main_product from "./media/sampleauctionimg.jpeg";
import loader from "./../Cards/loader-timer-main.gif";
import Footerr from "../Footerr/Footerr";
import { AuthContext } from "../../Context/AuthContextProvider";

import tuner from "./media/Tuners.jpeg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="next absolute top-[40%] right-[25px] z-5"
    >
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 25.5L37.5 33L30 40.5"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="prev absolute top-[40%] left-0 z-50">
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36 25.5L28.5 33L36 40.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ProductDetail(props) {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [bidHistory, setBidHistory] = useState([]);
  const [loadBidHistory, setLoadBidHistory] = useState(true);

  const products = useContext(ProductContext);

  const { productId } = useParams();
  const parsedProductId = parseInt(productId);

  useEffect(() => {
    fetch(
      `https://auctionapi.shop/sam/doc/products/bidhistory?prod_id=${productId}`
    )
      .then((response) => response.json())
      // .then((data) => setBidHistory(data))
      .then((data) => {
        setBidHistory(data);
        setLoadBidHistory(false); // Set loadBidHistory to false when data is loaded
      })
      .catch((error) => console.error(error));
  }, []);

  if (isNaN(parsedProductId)) {
    console.log(`Product ID "${productId}" is not a valid integer.`);
    return null;
  }

  const thisProduct = products.find((prod) => prod.ID === parsedProductId);
  if (!thisProduct) {
    console.log(`Product with ID ${parsedProductId} not found.`);
    return null;
  }

  console.log(thisProduct.Deadline);

  return (
    <div>
      <TopBar />
      <div className="FunProductDetail-part">
        <div className="checkout-ProductDetail ">
          <div className="checkout-body-ProductDetail">
            <div className="ProductDetail-left">
              <div className="detailed-explanation-part">
                <div className={` content-container `}>
                  <div className="domain-name-div">
                    <h1>DOMAIN NAME</h1>
                    <div>
                      <label>Currency</label>
                      <select className="currency-dropdown">
                        <option>INR</option>
                        <option>USD</option>
                      </select>
                    </div>
                  </div>
                  <h1 className="title">{thisProduct.Name}</h1>
                  <p className="paragraph my-[10px]">
                    {" "}
                    {thisProduct.Name} is catchy and attention grabbing, thus
                    easy to remember and recall.
                  </p>
                  <div className="specialty-chips ">
                    <h1>Domain</h1>
                    <h1>Business</h1>
                    {thisProduct.Premium ? <h1>Premium</h1> : null}

                    {thisProduct.Company ? (
                      <>
                        <h1>{thisProduct.Company}</h1>
                      </>
                    ) : null}

                    {thisProduct.Category ? (
                      <>
                        <h1>{thisProduct.Category}</h1>
                      </>
                    ) : null}
                  </div>
                  <div className="specialty-chips-two">
                    <div>
                      <h1 className="heading !text-[grey] !text-[16px]">Age</h1>
                      <p className="paragraph">19 years</p>
                    </div>
                    <div>
                      <h1 className="heading !text-[grey] !text-[16px]">
                        Domain Expires
                      </h1>
                      <p className="paragraph">9 months</p>
                    </div>
                    <div>
                      <h1 className="heading !text-[grey] !text-[16px]">
                        Registrar
                      </h1>
                      <p className="paragraph">Epik, Inc.</p>
                    </div>
                  </div>
                  {!isAuth ? (
                    <div className="login-request ">
                      <div className="login-request-content">
                        <h1 className="login-request-heading">
                          Please login to view the detailed information of{" "}
                          {thisProduct.Name}
                        </h1>
                        <br />
                        <Link
                          to="/signup"
                          className="red-btn !px-[20px] !py-[0px] !m-0"
                        >
                          SIGN UP FOR FREE
                        </Link>
                        <br />

                        <p className="paragraph">
                          Already have an account?{" "}
                          <span>
                            <Link
                              to="/login"
                              className="text-pent border-b-[2px] border-b border-[#5fa8d3]"
                            >
                              Login
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bid-history-div">
                      <h1 className="heading text-black mt-[20px] text-left">
                        Bid history
                      </h1>
                      <div class="bid-history-section-detailed !text-black">
                        {loadBidHistory ? (
                          <div>
                            <img
                              src={loader}
                              alt=""
                              className="bid-history-loader-img"
                            />
                            <p className="paragraph text-center text-black">
                              Loading bid history, please wait...
                            </p>
                          </div>
                        ) : (
                          <div>
                            {bidHistory.length === 0 ? (
                              <p>
                                No one has bid this product yet. <br />
                                Be the first one and grab it.
                              </p>
                            ) : (
                              <div className="relative bid-table">
                                <div class="paragraph text-left !text-black bid-history-item flex justify-between bid-history-tags">
                                  <p class="bidder-name text-white !text-[20px]">
                                    Bidder
                                  </p>
                                  <p class="bid-amount  text-white !text-[20px]">
                                    Amount
                                  </p>
                                  <p class="bid-time  text-white !text-[20px]">
                                    Time
                                  </p>
                                </div>
                                <div>
                                  <ul className="bid-box">
                                    {bidHistory.map((bid, index) => (
                                      <Fade bottom>
                                        <li key={index}>
                                          <div class="paragraph text-left !text-black bid-history-item-detailed flex justify-between">
                                            <p class="bidder-name">
                                              {bid.bidder_name}
                                            </p>
                                            <p class="bid-amount">
                                              Rs.{bid.bid_amount}
                                            </p>
                                            <p class="bid-time">
                                              {bid.bid_time}
                                            </p>
                                          </div>
                                        </li>
                                      </Fade>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="ProductDetail-right">
              <img src={tuner} alt="" className="tuner-img" />
              <SinglePrice
                bidHistory={bidHistory}
                deadline={thisProduct.Deadline}
              />
            </div>
          </div>
        </div>
      </div>
      <Footerr />
    </div>
  );
}

export default ProductDetail;
