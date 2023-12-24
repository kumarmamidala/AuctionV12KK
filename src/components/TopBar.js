import React, { useState, Fragment, useContext, useEffect } from "react";

import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import logo from "./media/new-logo.png";

import { BsPersonFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContextProvider";

import { AiOutlineProfile } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";

import $ from "jquery";

function TopBar() {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    $(window).on("scroll", function () {
      $(window).scrollTop()
        ? $(".Topbarmain").addClass("black")
        : $(".Topbarmain").removeClass("black");
    });
  }, []);

  let handleClick = () => {
    if (isAuth == true) {
      logoutme();
      // setCartData({})
    } else {
      navigate("/login");
    }
  };
  let handleClick2 = () => {
    if (isAuth == true) {
      return;
    } else {
      navigate("/signup");
    }
  };
  const [showHambuger, setShowHambuger] = useState(false);
  return (
    <div>
      <div className="flex flex-col p-10 py-0 max-w-8xl mx-auto space-y-4 Topbarmain pb-8">
        <div className="flex items-center sm:py-2 topbar-small">
          <Link to="/" className="Nav-linkk123">
            <img src={logo} alt="" />
          </Link>

          <div className="flex w-full justify-end relative left-[-10px]">
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex space-x-8 justify-around items-end space-y-2 text-[18px] pb-2 mr-4 font-[Marcellus] ">
                <Link to="/featured" className=" Nav-linkk ">
                  Domain Auctions
                </Link>
                <Link to="/ListaDomain" className=" Nav-linkk ">
                  List a Domain
                </Link>

                <Link to="/AuctionAppraisals" className=" Nav-linkk ">
                  Domain Appraisals
                </Link>

                <Link to="/Help" className=" Nav-linkk ">
                  Help
                </Link>
              </div>
              {/* USER ACC  */}
            </div>
          </div>
          <Link to="/Login" className="hidden md:block">
            <button class="" onClick={handleClick}>
              {isAuth ? (
                <span class="bg-white hover:bg-white"></span>
              ) : (
                <span className="topbar-para login-btn-1">Login</span>
              )}
            </button>
          </Link>
          <ul className="navbar-nav !ml-0 hidden md:block">
            <li className="nav-item1 dropdown">
              <button
                className="nav-link "
                onClick={handleClick2}
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                {isAuth ? (
                  <div class="navbar1">
                    <div class="dropdown1">
                      <button class="dropbtn1">
                        <span className="loggedin-user">
                          {loginUser.username}
                        </span>
                      </button>
                      <div class="dropdown-content1">
                        <Link className="dropdown-item" to="/profile">
                          <span className="drop-item-span flex">
                            <AiOutlineProfile className="mt-[3px] mr-[5px] text-[18px]" />
                            Profile
                          </span>
                        </Link>

                        <a href="#">
                          <button
                            onClick={handleClick}
                            className="dropdown-item "
                          >
                            <span className="drop-item-span flex">
                              <RiLogoutBoxLine className="mt-[3px] mr-[5px] text-[18px]" />
                              Logout
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link to="">
                      <span class="!normal-case red-btn !my-0 !text-white !ml-[10px] !py-0">
                        SignUp
                      </span>
                    </Link>
                  </div>
                )}
              </button>
            </li>
          </ul>

          <div className="flex space-x-2 ">
            <div class="hidden md:hidden">
              <button
                class="custom-btn main-button login-btn1 topbar-para"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                type="button"
                className=" flex justify-center items-center p-2 xs:mt-2 lg:!mt-0 sm:px-2 sm:py-2 pl-0 sm:!pl-2 rounded-md bg-[#fbcb04] text-white hover:bg-[#ffe053] transition-all loginbtn "
                onClick={() => navigate("/login")}
              >
                <div className="hidden sm:block text-xl font-semibold loginbtn-hover:!text-black topbar-para">
                  Login
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 !xs:pl-0 !xs:pr-2 items-start loginbtn-hover:color-black"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
            <div class="md:hidden">
              <button
                onClick={() => navigate("/login")}
                class="auction-login-small-screen"
              >
                <BsPersonFill fontSize={"22px"} />
              </button>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setShowHambuger(true)}
                className="p-2  rounded-md bg-gray-200 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          show={showHambuger}
          enter="transition ease-in-out duration-800"
          enterFrom="transform opacity-0 translate-x-[999px]"
          enterTo="transform opacity-100 translate-x-0"
          leave="transition ease-in duration-800"
          leaveFrom="transform opacity-100 translate-x-0"
          leaveTo="transform opacity-0 translate-x-[999px]"
        >
          <div className="mobile-nav absolute  justify-start items-end z-30 flex flex-col bg-[#f2f4f5]">
            <button
              type="button"
              onClick={() => setShowHambuger(false)}
              className="flex space-x-1 items-center p-2 rounded-md hover:bg-gray-200"
            >
              <p></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col w-full justify-center align-items-center text-[#fbcb04]">
              <Link
                to="/featured"
                className="hover:underline  w-full text-center mobile-nav-item pt-4 pb-2"
              >
                Domain Auctions
              </Link>
              <Link
                to="/ListaDomain"
                className="hover:underline  w-full text-center mobile-nav-item pt-4 pb-2"
              >
                List a Domain
              </Link>
              <Link
                to="/AuctionAppraisals"
                className="hover:underline  w-full text-center mobile-nav-item  pt-4 pb-2"
              >
                Domain Appraisals
              </Link>

              <Link
                to="/Help"
                className="hover:underline text-center mobile-nav-item  w-full pt-4 pb-2"
              >
                Help
              </Link>

              {isAuth ? (
                ""
              ) : (
                <Link
                  to="/login"
                  className="hover:underline  w-full text-center mobile-nav-item  pt-4 pb-2"
                >
                  Login
                </Link>
              )}

              {isAuth ? (
                <div className="mobile-profile">
                  <Link
                    to="/profile"
                    className="hover:underline  w-full text-center mobile-nav-item  pt-4 pb-2"
                  >
                    <span className="drop-item-span">Profile</span>
                  </Link>
                  <a href="#">
                    <button
                      onClick={handleClick}
                      className="hover:underline  w-full text-center mobile-nav-item  pt-4 pb-2"
                    >
                      Logout
                    </button>
                  </a>
                </div>
              ) : (
                <Link
                  to="/Signup"
                  className="hover:underline text-center mobile-nav-item  w-full  pt-4 pb-2"
                >
                  SignUp
                </Link>
              )}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default TopBar;
