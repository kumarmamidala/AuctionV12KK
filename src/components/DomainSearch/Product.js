import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./DomainSearch.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopUpItem from "./PopUpItem";
import "./../Cards/Cards.css";

import loader_timer from "./loader-timer-auction.gif";

import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import sampleauction from "./sampleauctionimg.jpeg";

const Product = ({
  Name,
  status,
  Price,
  ID,
  Deadline,
  Highest_bid_amount,
  Number_of_bidders,
}) => {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [countdownDate] = useState(new Date(`${Deadline}`).getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const handleSubmit2 = (event) => {
    event.preventDefault();

    if (!isAuth) {
      return navigate("/Login");
    } else {
      return navigate("/checkout");
    }
  };

  return (
    <Wrapper>
      {isMobile ? (
        <Fade bottom>
          <div className="premium-mobile m-0 !mb-[30px]">
            <h1 className="domain-name-home">{Name}</h1>
            <p>Price: Rs.{Price}</p>

            <div className="flex justify-between w-full">
              <p>
                {" "}
                Total Bids:&nbsp; <span className="font-bold"> 35</span>
              </p>
              <p>
                {" "}
                Time Left:&nbsp; <span className="font-bold"> 2d 10h</span>
              </p>
            </div>
            <p className="mobile-premium">PREMIUM</p>
            <Popup
              trigger={
                <button className="custom-btn main-button max-[767px]:w-full">
                  Place a bid
                </button>
              }
              modal
            >
              {(close) => (
                <div className="flex justify-end">
                  <a
                    className="close text-4xl absolute mr-2 cursor-pointer !text-black"
                    onClick={close}
                  >
                    X
                  </a>
                  <PopUpItem
                    ID={ID}
                    name={Name}
                    price={Price}
                    amount={Highest_bid_amount}
                    bidders={Number_of_bidders}
                    Deadline={Deadline}
                  />
                </div>
              )}
            </Popup>
          </div>
        </Fade>
      ) : (
        <Fade bottom>
          <div className="flex  border border-gray-300 rounded-lg shadow-md transition-all auction-price-card1">
            {/* DESCRIPTION */}
            <div className="auction-product-left">
              <div className="flex items-left text-left justify-between  flex-col name-div ">
                <Link
                  to={`/Marketplace/${ID}`}
                  className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis heading"
                >
                  {Name}
                </Link>
                {/* <Link
                    to={`/Marketplace/${ID}`}
                    className=" pt-1 -mb-2 text-pent"
                  >
                    Know more
                  </Link> */}
              </div>
              <div className="premium-div">
                <p>PREMIUM</p>
              </div>
              <div className="bid-div">
                <span className="font-bold text-pent">
                  {" "}
                  {Number_of_bidders}
                </span>
              </div>
              <div className="last-date-div time-left">
                <span className="font-bold text-pent text-[16px]">
                  {" "}
                  {timeRemaining.days}d {timeRemaining.hours}h{" "}
                  {timeRemaining.minutes}m {timeRemaining.seconds}s
                </span>
              </div>
              <Link
                to={`/Marketplace/${ID}`}
                className="p-2 px-3 text-[24px] leading-3 font-bold  scale-90 font-['Mukta'] hover:text-black price-div"
              >
                Rs. {Price}
              </Link>
              <Popup
                trigger={
                  <button className="custom-btn main-button place-a-bid-div">
                    Bid Now
                  </button>
                }
                modal
              >
                {(close) => (
                  <div>
                    {" "}
                    <div class="flex justify-end ">
                      {" "}
                      <a
                        className="close text-right text-4xl absolute mr-[10px] pt-[1px] cursor-pointer !text-black close-btn "
                        onClick={close}
                      >
                        X
                      </a>
                    </div>
                    <PopUpItem
                      name={Name}
                      status={status}
                      ID={ID}
                      price={Price}
                      amount={Highest_bid_amount}
                      bidders={Number_of_bidders}
                      Deadline={Deadline}
                    />
                  </div>
                )}
              </Popup>{" "}
            </div>
          </div>
        </Fade>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
  }

  .close-btn {
    color: white !important;
  }
  img {
    background-size: cover;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 600;
    text-transform: lowercase;
    color: #e3ab10;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
