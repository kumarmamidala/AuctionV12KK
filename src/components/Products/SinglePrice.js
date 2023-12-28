import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/products_context";
import { AuthContext } from "../../Context/AuthContextProvider";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function SinglePrice(props) {
  const [productss, setProductss] = useState([]);
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { productId } = useParams();
  const parsedProductId = parseInt(productId);

  const navigate = useNavigate();
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

  const thisProduct = productss.find((prod) => prod.ID === parsedProductId);
  if (!thisProduct) {
    console.log(`Product with ID ${parsedProductId} not found.`);
    return null;
  }

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isAuth) {
      return navigate("/Login");
    }

    const minimumBid = parseInt(thisProduct.Highest_bid_amount) + 500;
    if (bidAmount < minimumBid) {
      return alert(`Bid must be at least ${minimumBid}`);
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
        alert(response.data);
        console.log(loginUser.user_id);
        window.location.reload();
        // handle successful bid
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        alert(error.response.data);
        // handle bid error
      });
  };
  console.log(thisProduct);
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
                      <span class="heading !text-black">
                        Bid for{" "}
                        <span class="text-primary">{thisProduct.Name}</span>
                      </span>
                      <br /> <br />
                      <span className="block mb-2 text-sm font-normal text-slate-200 heading !text-black">
                        Current bid : ₹ {thisProduct.Highest_bid_amount}
                      </span>
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
                            placeholder={`Min bid is ${
                              parseInt(thisProduct.Highest_bid_amount) + 500
                            }`}
                            value={bidAmount}
                            onChange={handleBidAmountChange}
                            className="border rounded-lg block w-full p-2.5 appearance-none focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)] "
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              classNameName="absolute right-2 z-10 bg-white"
                              viewBox="0 0 24 24"
                            >
                              <path fill="#fff" d="M0 0H24V24H0z"></path>
                              <path
                                stroke="#25cbd3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.5 3.75h-15a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM16.5 2.25v3M7.5 2.25v3M4 8.25h16"
                              ></path>
                              <path fill="#BE9E57" d="M7 11H9V13H7z"></path>
                              <path fill="#BE9E57" d="M11 11H13V13H11z"></path>
                              <path fill="#BE9E57" d="M15 11H17V13H15z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="md:mx-auto w-full lg:w-auto">
                        <button
                          type="submit"
                          className="blue-btn   sm:w-auto  md:!w-full"
                        >
                          {/* {!bidAmount ? "Place your bid" : "Submit"} */}
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
