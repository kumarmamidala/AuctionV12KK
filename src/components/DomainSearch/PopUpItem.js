import "./DomainSearch.css";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

import "./../Profile/Profile.css";

import loader from "./../Cards/loader-timer-main.gif";

import toast, { Toaster } from "react-hot-toast";

const PopUpItem = ({ ID, price, amount, bidders, Deadline, name, status }) => {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const [bidAmount, setBidAmount] = useState("");
  const [bidHistory, setBidHistory] = useState([]);

  const navigate = useNavigate();

  const [showContent, setShowContent] = useState(false);
  const [loadBidHistory, setLoadBidHistory] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const deadlineDate = new Date(Deadline);
    const difference = deadlineDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const BidClick = async () => {
    setShowContent(true);
    setLoadBidHistory(true);
    const response = await fetch(
      `https://auctionapi.shop/sam/doc/products/bidhistory?prod_id=${ID}`
    );
    const data = await response.json();
    setLoadBidHistory(false);
    console.log(data);
    setBidHistory(data);
  };

  const handleHideContent = () => {
    setShowContent(false);
  };

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };
  const calculateMinimumBid = (currentAmount) => {
    const amountInt = parseInt(currentAmount);

    if (amountInt < 5000) {
      return amountInt + 500;
    } else if (amountInt >= 5000 && amountInt < 50000) {
      return amountInt + 2000;
    } else if (amountInt >= 50000 && amountInt < 200000) {
      return amountInt + 5000;
    } else {
      return amountInt + 10000;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const bidAmountInt = parseInt(bidAmount);
    const minimumBid = calculateMinimumBid(amount);

    if (bidAmountInt < minimumBid) {
      return alert(`Bid must be at least ${minimumBid}`);
    }
    if (!isAuth) {
      return navigate("/Login");
    } else {
      setIsSubmitting(true);
      axios
        .post("https://auctionapi.shop/sam/doc/products/Bidforproduct", {
          Highest_bid_amount: bidAmount,
          Highest_bid_id: loginUser.user_id,
          ID: ID,
          product_name: name,
          product_status: status,
          bidder_name: loginUser.username,
        })

        .then((response) => {
          console.log(response);
          setIsSubmitting(false);
          toast.success(response.data);
          console.log(loginUser.user_id);
          navigate(`/marketplace/${ID}`);

          // handle successful bid
        })
        .catch((error) => {
          console.log(error.response.data);
          setIsSubmitting(false);
          alert(error.response.data);
          setIsSubmitting(false);
          // handle bid error
        });
    }
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    if (!isAuth) {
      return navigate("/Login");
    } else {
      return navigate("/checkout");
    }
  };

  return (
    <div>
      <div>
        <div className="PopupContentt text-center">
          {" "}
          <h1 class="heading popup-title">{name}</h1>
          <div class="flex popup-flex">
            <div class="popup-left !text-left">
              <div>
                <div class="popup-left-btns">
                  <div>
                    <button
                      class="custom-btn main-button !w-[100%]"
                      onClick={BidClick}
                    >
                      Bid History
                    </button>
                  </div>
                  <div>
                    <button
                      class="custom-btn main-button !w-[100%]"
                      onClick={() => navigate(`/marketplace/${ID}`)}
                    >
                      About {name}
                    </button>
                  </div>
                </div>

                <p class="heading-sub pt-4 opacity-[80%]">Description</p>
                <p class="paragraph-sub">
                  In this age of technology, and fierce competition, companies
                  are battling to reach and expand their customer base. .gold
                  domain is the domain of your choice.
                </p>
                <p class="heading-sub pt-4 opacity-[80%]">Bid Now</p>
                <ul class="popup-left-list paragraph-sub">
                  <li className="w-[30%]">
                    <span>Total bids so far: </span>
                    <span className="text-primary font-bold">{bidders}</span>
                  </li>
                  <li className="w-[70%]">
                    <div className="flex justify-end mt-[2px]">
                      <span className="font-bold">
                        Time Left to bid: &nbsp;{" "}
                      </span>
                      <span className="font-bold text-primary text-[18px]">
                        {" "}
                        {timeRemaining.days}d {timeRemaining.hours}h{" "}
                        {timeRemaining.minutes}m {timeRemaining.seconds}s
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* // Hidden Content  */}

              <div className={`Content ${showContent ? "show" : ""}`}>
                <div>
                  <div class="get-back-section">
                    <button
                      onClick={handleHideContent}
                      class="custom-btn main-button"
                    >
                      ↤ Get Back
                    </button>
                  </div>
                  <div class="bid-history-section popup-bid-history">
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
                            <div className=" ">
                              <div className="flex  w-full justify-between bidded-history paragraph text-black bidded-history-tags">
                                <h1 className="bidder-name">Bidder</h1>
                                <p className="bid-amount">Amount</p>
                                <p className="bid-time">Time</p>
                              </div>
                              {bidHistory.map((bid, index) => (
                                <div
                                  class="flex paragraph justify-between text-left bidded-history"
                                  key={index}
                                >
                                  <p class="bidder-name">{bid.bidder_name}</p>
                                  <p class="bid-amount">Rs.{bid.bid_amount}</p>
                                  <p class="bid-time">{bid.bid_time}</p>
                                </div>
                              ))}
                            </div>
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="popup-right">
              <form onSubmit={handleSubmit} class="bid-input">
                {/* <label htmlFor="bidAmount">Bid Amount:</label> */}
                <input
                  type="text"
                  id="bidAmount"
                  name="bidAmount"
                  value={bidAmount}
                  placeholder={`Min bid is ${calculateMinimumBid(amount)}`}
                  onChange={handleBidAmountChange}
                  class="bid1-input"
                />

                <button
                  type="submit"
                  class="blue-btn popup-submit !rounded-l-0"
                >
                  {isSubmitting ? (
                    <ThreeDots
                      color="#ffffff"
                      height={20}
                      width={40}
                      timeout={1000000}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
              <button
                class="paragraph-popup-small px-[20px] pt-[10px]"
                onClick={handleSubmit2}
              >
                Buy this product @{price}
              </button>
              <div class="popup-min-amount paragraph">
                <p className="text-black">Current Highest Bid</p>
                <p className="text-black">Rs.{amount}</p>
              </div>
              <div class="p-4 paragraph font-bold">
                <div class="flex">
                  <AiOutlineFileProtect
                    style={{ fontSize: "30px", color: "#fbcb04" }}
                  />{" "}
                  &nbsp;
                  <span class="font-bold text-black"> Buyer Protection</span>
                </div>
                <div class="flex">
                  <BiTransfer style={{ fontSize: "30px", color: "#fbcb04" }} />{" "}
                  &nbsp;
                  <span class="font-[600] text-black">Transfer Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpItem;
