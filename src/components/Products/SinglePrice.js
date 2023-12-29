import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/products_context";
import { AuthContext } from "../../Context/AuthContextProvider";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";

function SinglePrice({ bidHistory, deadline }) {
  const [productss, setProductss] = useState([]);
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { productId } = useParams();
  const parsedProductId = parseInt(productId);

  const navigate = useNavigate();
  const thisProduct = productss.find((prod) => prod.ID === parsedProductId);

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
    const deadlineDate = new Date(deadline);
    const difference = deadlineDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    fetch("https://auctionapi.shop/sam/doc/products/Availableproducts")
      .then((response) => response.json())
      .then((data) => setProductss(data))
      .catch((error) => console.error(error));
  }, []);

  if (isNaN(parsedProductId)) {
    console.log(`Product ID "${productId}" is not a valid integer.`);
    return null;
  }

  if (!thisProduct) {
    console.log(`Product with ID ${parsedProductId} not found.`);
    return null;
  }

  const handleBidAmountChange = (event) => {
    // setBidAmount(event.target.value);
    const inputValue = event.target.value;

    // Check if the input matches the pattern
    if (/^\d*$/.test(inputValue)) {
      setBidAmount(inputValue);
    } else {
      // If the pattern is not matched, show an alert and clear the input
      alert("Please enter only numbers");
      setBidAmount("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isAuth) {
      return navigate("/Login");
    }

    const minimumBid = parseInt(thisProduct.Highest_bid_amount) + 500;
    if (bidAmount < minimumBid) {
      setBidAmount("");
      return alert(
        `Bid amount for ${thisProduct.Name} must be at least Rs.${minimumBid}`
      );
    }
    setIsSubmitting(true);

    axios
      .post("https://auctionapi.shop/sam/doc/products/Bidforproduct", {
        Highest_bid_amount: bidAmount,
        Highest_bid_id: loginUser.user_id,
        ID: thisProduct.ID,
        bidder_name: loginUser.username,
        product_name: thisProduct.Name,
        product_status: thisProduct.status,
      })
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
        // alert(response.data);
        alert(
          "Congratulations " +
            loginUser.username +
            "! Your bid amount Rs." +
            bidAmount +
            " for " +
            thisProduct.Name +
            " is successful!"
        );

        console.log(loginUser.user_id);

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        alert(error.response.data);
        // handle bid error
      });
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
    <div className="p-[20px] pt-0">
      <div className="col-span-12 lg:col-span-4 lg:mt-4">
        <div className="relative -top-15">
          <div className="w-full mx-auto rounded-lg">
            <div className="bg-white search_part ">
              <div className="p-1 lg:p-4">
                <div className="">
                  <div
                    id="double_date_input"
                    className="m-auto w-full mb-2 lg:mb-0 lg:mx-2 "
                  >
                    {" "}
                    <form onSubmit={handleSubmit}>
                      {/* <span class="heading !text-black">
                        Bid for{" "}
                        <span class="text-primary">{thisProduct.Name}</span>
                      </span>
                      <br /> <br /> */}
                      <span className="block mb-2 text-sm  text-slate-200  !font-thin text-[22px] !text-[grey]">
                        Highest bid
                        <br />
                        <br />{" "}
                        <span className="heading">
                          ₹ {thisProduct.Highest_bid_amount}
                        </span>
                      </span>

                      <hr className="!w-full my-[20px]" />
                      {bidHistory.length === 0 ? (
                        <p>
                          No one has bid this product yet. <br />
                          Be the first one and grab it.
                        </p>
                      ) : (
                        <div className="paragraph">
                          <span className="text-pent">
                            {bidHistory.length} bids
                          </span>
                          <br />
                          {timeRemaining.days >= 1 ? (
                            <span>{timeRemaining.days} days left</span>
                          ) : null}
                        </div>
                      )}

                      <div className="m-auto  lg:w-full lg:mx-2 mb-4 lg:mb-0">
                        <label
                          for="email-address-icon"
                          className="block mb-2 text-sm font-normal text-slate-900 heading-sub !text-black"
                        >
                          Make an offer
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="bidAmount"
                            name="bidAmount"
                            pattern="\d*"
                            title="Please enter only numbers"
                            placeholder={`Min bid is ${
                              parseInt(thisProduct.Highest_bid_amount) + 500
                            }`}
                            value={bidAmount}
                            onChange={handleBidAmountChange}
                            className="border rounded-lg block w-full p-2.5 appearance-none focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)] "
                          />
                        </div>
                      </div>
                      <div className="md:mx-auto w-full lg:w-auto">
                        <button
                          type="submit"
                          className="blue-btn   sm:w-auto  md:!w-full !m-0"
                        >
                          {isSubmitting ? (
                            <div className="m-auto flex justify-center">
                              <ThreeDots
                                color="#ffffff"
                                height={20}
                                width={40}
                                timeout={1000000}
                              />
                            </div>
                          ) : (
                            <div>
                              {!bidAmount ? "Place your bid" : "Submit"}
                            </div>
                          )}
                        </button>
                      </div>
                      <button
                        class="custom-btn main-button w-full mt-[20px]"
                        onClick={handleSubmit2}
                      >
                        Buy Now @ {thisProduct.Price}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePrice;
