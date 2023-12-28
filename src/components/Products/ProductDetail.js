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

  return (
    <div>
      <TopBar />
      <div className="FunProductDetail-part">
        <div className="checkout-ProductDetail ">
          <div className="checkout-body-ProductDetail">
            <div className="ProductDetail-left">
              <div className="detailed-explanation-part">
                <div className={` content-container ${isAuth ? "" : "blur"}`}>
                  <div className="domain-name-div">
                    <h1>DOMAIN NAME</h1>
                    <div>
                      <label>Currency</label>
                      <select>
                        <option>INR</option>
                        <option>USD</option>
                      </select>
                    </div>
                  </div>
                  <h1 className="title">{thisProduct.Name}</h1>
                  <p className="paragraph">
                    {" "}
                    {thisProduct.Name} is catchy and attention grabbing, thus
                    easy to remember and recall.
                  </p>
                  <div className="specialty-chips">
                    <h1>Domain</h1>
                    <h1>Business</h1>
                    <h1>Premium</h1>
                  </div>
                  <div>
                    <h1 className="heading my-4 heading-left-border-gold">
                      Specialities of .Gold
                    </h1>

                    <ol className="circled paragraph">
                      <li>
                        <span class="heading-sub !text-black">
                          {thisProduct.Name} gives boost to your brand{" "}
                        </span>{" "}
                        <br />
                        <span class="paragraph !text-black">
                          {thisProduct.Name} is catchy and attention grabbing,
                          thus easy to remember and recall. .Gold is a unique,
                          recognizition giving extension for a gold based
                          business. Hence, {thisProduct.Name} gives your brand
                          enough boost by giving an online presence.{" "}
                        </span>
                      </li>
                      <li>
                        <span class="heading-sub !text-black">
                          {thisProduct.Name} is right for you.
                        </span>
                        <br />
                        <span class="paragraph !text-black">
                          The post-pandemic world is digital based. Online
                          presence is a basic need for any business now.
                          Likewise, a gold based business also needs existence
                          over the internet. And, .gold differentiates you from
                          rest of the businesses. Thus, {thisProduct.Name} is
                          the right choice for you.
                        </span>
                      </li>
                      <li>
                        <span class="heading-sub !text-black">
                          {thisProduct.Name} benefits you.
                        </span>
                        <br />
                        <span class="paragraph !text-black">
                          "Your gold business can reach people present in remote
                          areas as well." You can showcase your products
                          creatively, and in a way that isn't possible to do in
                          a physical store. You can mention the tiniest details
                          of your products, and the customers will have all the
                          time they need to choose the right product for
                          themselves.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <Accordion
                    defaultActiveKey={["0"]}
                    alwaysOpen
                    className="accordion"
                  >
                    <Accordion.Item eventKey="0" className="accordion_item">
                      <Accordion.Header
                        className="accordion_header heading "
                        style={{
                          primaryColor: "#F3852E",
                          backgroundColor: "white",
                          fontSize: "24px",
                        }}
                      >
                        {" "}
                        <FaGlobe />
                        {/* <i
                      className="fa fa-globe"
                      style={{
                        marginRight: '5px',
                        fontSize: '30px',
                        cursor: 'pointer',
                        color: '#fbcb04',
                      }}
                      aria-hidden="true"
                    ></i> */}
                        &nbsp; Top Level Domains
                      </Accordion.Header>
                      <Accordion.Body class="paragraph p-4">
                        <span class="paragraph p-4 !text-black">
                          The .gold top-level domain (TLD) is a new and unique
                          way to establish an online presence for businesses and
                          individuals related to the gold industry. It provides
                          a clear and specific message to the customers that the
                          website is related to gold, whether it's a gold
                          investment firm, a gold jewelry store, a gold mining
                          company or a gold-themed hotel.{" "}
                        </span>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion_item">
                      <Accordion.Header class="heading">
                        {" "}
                        <BsFillPersonFill />
                        &nbsp;
                        <span class="heading-gold">
                          Standout From The Competitors
                        </span>
                      </Accordion.Header>
                      <Accordion.Body class="paragraph p-4">
                        <span class="paragraph p-4 !text-black">
                          Using .gold TLD can help businesses and individuals in
                          the gold industry to stand out from their competitors,
                          as it can be used to create a memorable and
                          easy-to-remember website address. For example, a gold
                          jewelry store could have a website address like
                          "jewelry.gold" which is more memorable and relevant
                          than "jewelry.com"{" "}
                        </span>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion_item">
                      <Accordion.Header class="heading">
                        {" "}
                        <BsFillFileTextFill />
                        &nbsp;
                        <span class=" heading-gold !text-[#fbcb04]">
                          Improves Online Visibility
                        </span>
                      </Accordion.Header>
                      <Accordion.Body class="paragraph p-4">
                        <span class="paragraph p-4 !text-black">
                          In addition, .gold TLD can help customers to find the
                          gold-related website they are looking for easily, by
                          searching the domain name they are looking for.
                          Overall, using .gold TLD can provide a clear and
                          specific message to the customers, increase the online
                          visibility of the gold-related businesses, and help
                          them to stand out from their competitors.{" "}
                        </span>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div>
                    <h1 className="heading mt-4 heading-left-border-gold">
                      .Gold at a glance.
                    </h1>
                    <ol className="why-gold-ol paragraph ">
                      <li class="paragraph !text-black">Unique</li>
                      <li class="paragraph !text-black">Memorable</li>
                      <li class="paragraph !text-black">Grabs attention</li>
                      <li class="paragraph !text-black">
                        Gives right recognition
                      </li>
                      <li class="paragraph !text-black">
                        Tells users - who you are, what you do{" "}
                      </li>
                      <li class="paragraph !text-black">
                        Reduces your marketing budget{" "}
                      </li>
                      <li class="paragraph !text-black">
                        Instantly affiliates you with gold products, and
                        services{" "}
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h1 className="heading mt-4 heading-left-border-gold">
                      Its not .com anymore
                    </h1>
                    <p class="paragraph !text-black">
                      "With the rise of internet, every business is eyeing for
                      distinctiveness. .in, biz, .org, .net, etc are some of the
                      rising extensions. Likewise, .gold is also rising and has
                      so much potential."
                    </p>
                  </div>
                  <div>
                    <h1 className="heading mt-4 heading-left-border-gold">
                      Own a .gold domain extension today.
                    </h1>
                    <p class="paragraph !text-black">
                      "In our servey of gold based businesses, we found that
                      many jewellery shops, miners, importers, exporters, etc
                      are already having a website or thinking to get one. This
                      reflects the need of online presence. Time is of essence.
                      If you own a gold based business, and do not have a
                      website, understand what your competition is adapting.
                      Equip your business with the .gold extension today and
                      stand out with the competition."
                    </p>
                  </div>
                  <h1 class="heading mt-4 heading-left-border-gold">
                    .Gold Auctions Offers:
                  </h1>
                  <div className="border-top border-bottom container py-5 my-5">
                    <div className="row g-3">
                      <div className="col-md-4 text-center">
                        <i className="color-[#fbcb04] flex justify-center">
                          <MdSecurity
                            className="text-primary"
                            size="40px"
                            style={{ top: "20px" }}
                          />
                        </i>
                        <h2 className="heading-sub !text-black">
                          Secure payment
                        </h2>
                        <p class="paragraph !text-black">
                          Your details are protected by SSL encryption
                        </p>
                      </div>
                      <div className="col-md-4 text-center">
                        <i className="color-[#fbcb04] flex justify-center">
                          <MdOutlineCheckCircle
                            className="text-primary"
                            size="40px"
                            style={{ top: "20px" }}
                          />
                        </i>
                        <h2 className="heading-sub !text-black">
                          Easy transfers
                        </h2>
                        <p class="paragraph !text-black">
                          Our support team manages the transfer for you
                        </p>
                      </div>
                      <div className="col-md-4 text-center">
                        <i className="color-[#fbcb04] flex justify-center">
                          <MdLockOutline
                            className="text-primary"
                            size="40px"
                            style={{ top: "20px" }}
                          />
                        </i>
                        <h2 className="heading-sub !text-black">
                          Buyer guarantee
                        </h2>
                        <p class="paragraph !text-black">
                          Receive the domain or get your money back
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {!isAuth ? (
                  <div className="login-request ">
                    <div className="login-request-content">
                      <h1 className="login-request-heading !text-[20px]">
                        Please login to view the details of {thisProduct.Name}
                      </h1>
                      <br />
                      <Link
                        to="/login"
                        className="red-btn !px-[20px] !py-[0px] !m-0"
                      >
                        Login
                      </Link>
                      <br />

                      <p className="mt-[20px]">
                        Do not have an account?{" "}
                        <span>
                          <Link to="/signup" className="text-primary">
                            SignUp
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="ProductDetail-right">
              <SinglePrice />
              <hr className="w-full mt-[20px]" />
              <h1 className="heading text-black mt-[20px] text-left">
                Bid history
              </h1>
              <div class="bid-history-section !text-black">
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
                      <ul>
                        {bidHistory.map((bid, index) => (
                          <Fade bottom>
                            <li key={index}>
                              <div class="paragraph text-left !text-black bid-history-item">
                                <p class="w-full">{bid.bidder_name}</p>
                                <div className="flex justify-between">
                                  <p class="">Rs.{bid.bid_amount}</p>
                                  <p class="">{bid.bid_time}</p>
                                </div>
                              </div>
                            </li>
                          </Fade>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerr />
    </div>
  );
}

export default ProductDetail;
