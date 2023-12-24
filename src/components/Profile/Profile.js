// ---- Importing required dependencies (External) ----
// ---- Packages ----
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import {
  BsPersonVideo2,
  BsGlobe,
  BsFillPersonFill,
  BsFillGrid3X3GapFill,
  BsListUl,
} from "react-icons/bs";
import { FaRegAddressCard, FaListUl } from "react-icons/fa";
import { MdOutlineError, MdOutlineLocalActivity } from "react-icons/md";

// ---- Importing required dependencies (Local) ----
import DomainDetails from "./DomainDetails";
// ---- Styles ----
import "./Profile.css";
// ---- Context ----
import { AuthContext } from "../../Context/AuthContextProvider";
// ---- Data ----
import person from "./Media/profile.png";
import loader from "./../Cards/loader-timer-main.gif";
import address from "./Media/adress2.png";
import { Link } from "react-router-dom";
import ContactSec from "./ContactSec";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
// ---- Main function -- Profile section
function Profile() {
  const [value, setValue] = React.useState(0);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [bidderData, setBidderData] = useState([]);
  const [bidderHistoryData, setBidderHistoryData] = useState([]);
  const [view, setView] = useState(true);
  const [activeView, setActiveView] = useState(null);

  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const bidderId = 2;

  const handleGrid = () => {
    setView(true);
  };

  const handleList = () => {
    setView(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { loginUser } = useContext(AuthContext);
  const [domainInfo, setDomainInfo] = useState([]); // Initialize as an empty array

  // Bidder list api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://auctionapi.shop/sam/doc/products/highestbidder?bidderId=${loginUser.user_id}`
        );
        const data = await response.json();
        setBidderData(data);

        // Extract unique prod_ids from the fetched bidder data
        const prodIds = data.map((bid) => bid.prod_id);

        // Fetch bid history for each prod_id
        const historyPromises = prodIds.map(async (prodId) => {
          const historyResponse = await fetch(
            `https://auctionapi.shop/sam/doc/products/bidhistory?prod_id=${prodId}`
          );
          return historyResponse.json();
        });

        // Wait for all history fetches to complete
        const historyDataArray = await Promise.all(historyPromises);

        // Combine all bid history data into a single array
        const allBidHistoryData = historyDataArray.flat();

        // Set the combined bid history data
        setBidderHistoryData(allBidHistoryData);
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        console.error("Error fetching bidder data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [loginUser.user_id]);

  return (
    <div>
      <div className="profile-page t-padding">
        {/* Products part */}
        {!isMobile ? (
          <div className="products-part">
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
                className="tabs-scroller-custom"
                indicatorColor="red"
              >
                <Tab
                  label={
                    <div className="flex gap-[10px]">
                      <BsFillPersonFill className="text-[24px]" />
                      <span className="profile-dash-item">Personal Info</span>
                    </div>
                  }
                  {...a11yProps(0)}
                  sx={{
                    textAlign: "left", // Align the label to the left
                  }}
                />
                <Tab
                  label={
                    <div className="flex gap-[10px]">
                      <FaRegAddressCard className="text-[24px]" />
                      <span className="profile-dash-item">Address</span>
                    </div>
                  }
                  {...a11yProps(1)}
                  sx={{
                    textAlign: "left", // Align the label to the left
                  }}
                />
                <Tab
                  label={
                    <div className="flex gap-[10px]">
                      <BsGlobe className="text-[24px]" />
                      <span className="profile-dash-item">My Domains</span>
                    </div>
                  }
                  {...a11yProps(2)}
                  sx={{
                    textAlign: "left", // Align the label to the left
                  }}
                  onClick={() => setSelectedDomain(null)}
                />
                <Tab
                  label={
                    <div className="flex gap-[10px]">
                      <MdOutlineLocalActivity className="text-[24px]" />
                      <span className="profile-dash-item">My Activity</span>
                    </div>
                  }
                  {...a11yProps(3)}
                  sx={{
                    textAlign: "left", // Align the label to the left
                  }}
                  onClick={() => setSelectedDomain(null)}
                />
              </Tabs>
              <TabPanel value={value} index={0} className="tab-content-custom">
                <div className="profile-info-part">
                  <img
                    src={person}
                    alt="Person"
                    className="profile-person-image text-center"
                  />
                  <h1 className="profile-name">
                    {loginUser.firstName} {loginUser.lastName}{" "}
                  </h1>
                  <h1 className="title-sub1">
                    User Name:{" "}
                    <span className="!text-black actual-address">
                      {loginUser.username}
                    </span>
                  </h1>
                  <h1 className="title-sub1">
                    Email id:
                    <span className="actual-address !text-black">
                      {" "}
                      {loginUser.email_id}
                    </span>
                  </h1>
                </div>
                <br />
                <br />
                {/* <FAQAccord /> */}
              </TabPanel>
              <TabPanel value={value} index={1} className="tab-content-custom">
                <div className="info-part">
                  <img
                    src={address}
                    alt="Person"
                    className="person-image text-center"
                  />
                  <h1>
                    <span className="paragraph text-black">
                      Mobile Number :
                      <span className="actual-address">
                        {" "}
                        {loginUser.mobile_number}
                      </span>
                    </span>
                  </h1>
                  <h1 className="paragraph text-black">
                    <span className="">
                      PAN :
                      <span className="actual-address"> {loginUser.PAN}</span>
                    </span>
                  </h1>
                  <h1 className="paragraph text-black">
                    Account Created at :
                    <span className="actual-address">
                      {" "}
                      {new Date(loginUser.createdAt).toLocaleDateString()}&nbsp;
                      {new Date(loginUser.createdAt)
                        .toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })
                        .toUpperCase()}
                    </span>
                  </h1>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2} className="tab-content-custom">
                {selectedDomain ? (
                  // Display selected domain details when selectedDomain is not null
                  <DomainDetails
                    domain={selectedDomain}
                    onClose={() => setSelectedDomain(null)}
                  />
                ) : (
                  // Otherwise, show the list of domains

                  <div className="domains-view-part">
                    {" "}
                    <div className="view-buttons">
                      <button
                        onClick={handleGrid}
                        className={`view-button ${view ? "active-view" : ""}`}
                      >
                        <BsFillGrid3X3GapFill />
                      </button>
                      <button
                        onClick={handleList}
                        className={`view-button ${view ? "" : "active-view"}`}
                      >
                        <FaListUl />
                      </button>
                    </div>
                    {view ? (
                      <div className="domains-part">
                        {domainInfo && domainInfo.length > 0 ? (
                          domainInfo.map((domain, index) => (
                            <div className="domain-part" key={index}>
                              <div className="domain-info">
                                <h1 className="domain-name-current ">
                                  {domain?.websiteName || "Unknown Name"}
                                </h1>
                                <div className="flex justify-between align-items-center">
                                  <h1>
                                    Expires on:{" "}
                                    {domain
                                      ? new Date(
                                          domain.expirationDate
                                        ).toLocaleDateString()
                                      : "Unknown Date"}
                                  </h1>
                                  <button
                                    onClick={() => {
                                      setSelectedDomain(domain);
                                    }}
                                    className="manage-btn"
                                  >
                                    Manage
                                  </button>
                                </div>
                                <p className="domain-status">
                                  {domain?.status || "Unknown Status"}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="paragraph mb-[20px] !text-black">
                              <span className="inline-block ">
                                <MdOutlineError className="mt-[8px] text-[24px] text-[red] !mb-[-6px] mr-[5px]" />
                              </span>
                              It seems you do not own any domains.
                            </p>
                            <Link
                              to="/featured"
                              className="red-btn !py-[10px] !px-[20px] mt-[20px]"
                            >
                              Bid/Buy a domain
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="domains-part">
                        {domainInfo && domainInfo.length > 0 ? (
                          domainInfo.map((domain, index) => (
                            <div className="list-part" key={index}>
                              <h1 className="list-item-name">
                                {domain?.websiteName || "Unknown Name"}
                              </h1>

                              <h1 className="list-item-expiry">
                                Expires on:{" "}
                                {domain
                                  ? new Date(
                                      domain.expirationDate
                                    ).toLocaleDateString()
                                  : "Unknown Date"}
                              </h1>
                              <p className="list-item-status">
                                <span>
                                  {domain?.status || "Unknown Status"}
                                </span>
                              </p>
                              <button
                                onClick={() => {
                                  setSelectedDomain(domain);
                                }}
                                className="list-item-btn "
                              >
                                <span className="manage-btn">Manage</span>
                              </button>
                            </div>
                          ))
                        ) : (
                          <div>
                            <p className="paragraph mb-[20px] !text-black">
                              <span className="inline-block ">
                                <MdOutlineError className="mt-[8px] text-[24px] text-[red] !mb-[-6px] mr-[5px]" />
                              </span>
                              It seems you do not own any domains.
                            </p>
                            <Link to="/featured" className="red-btn">
                              Bid/Buy a domain
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </TabPanel>
              <TabPanel value={value} index={3} className="tab-content-custom">
                {loading ? (
                  // Show loading animation or message
                  <div>
                    <img src={loader} alt="" className="w-[90px]" />
                    <p className="mt-[10px] paragraph text-black">
                      Loading your activity, please wait...
                    </p>
                  </div>
                ) : (
                  <div>
                    {bidderData.length === 0 ? (
                      // Display message when bidderData is empty
                      <div>
                        <p className="paragraph text-black">
                          Ooops..You don't have any activity yet!
                        </p>
                        <p className="paragraph">
                          Bid on a premium .gold domain toady...
                        </p>
                        <br />
                        <Link
                          to="/featured"
                          className="blue-btn mt-[30px] hover:text-white hover:ml-[10px]"
                        >
                          Bid on a .gold domain
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-wrap">
                        {bidderData.map((bid, index) => (
                          <div
                            key={index}
                            className="activity-card col-md-5 col-12 "
                          >
                            <h1 className="heading text-black mb-[10px] bid-domain">
                              {bid.product_name}
                            </h1>
                            <div className="bid-domain-content">
                              <p className="paragraph ">
                                Your last bid Amount:{" "}
                                <span className="font-bold">
                                  Rs.{bid.bid_amount}
                                </span>
                              </p>

                              <p className="paragraph ">
                                Domain Status:{" "}
                                <span className="!text-[green]">
                                  {bid.product_status}
                                </span>
                              </p>

                              <h1 className="heading  mt-[10px]">
                                Competition:
                              </h1>
                              <div className="profile-bid-history-table">
                                <table className="w-full ">
                                  <thead className="tableee">
                                    <tr className="flex w-full justify-between bidded-history paragraph  bidded-history-tags">
                                      <th className="bidder-name">Bidder</th>
                                      <th className="bid-amount">Amount</th>
                                      <th className="bid-time">Time</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* Display bid history for the current product */}
                                    {bidderHistoryData
                                      .filter(
                                        (historyBid) =>
                                          historyBid.prod_id === bid.prod_id
                                      )
                                      .map((historyBid, historyIndex) => (
                                        <tr
                                          key={historyIndex}
                                          className="flex w-full justify-between paragraph  bidded-history"
                                        >
                                          <td className="bidder-name">
                                            {historyBid.bidder_name}
                                          </td>
                                          <td className="bid-amount">
                                            Rs.{historyBid.bid_amount}
                                          </td>
                                          <td className="bid-time">
                                            {historyBid.bid_time}
                                          </td>
                                          {/* Display other bid history details */}
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </TabPanel>
            </Box>
          </div>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "block",
              height: 224,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
              className="tabs-scroller-custom"
              indicatorColor="red"
            >
              <Tab
                label={
                  <div className="flex gap-[10px]">
                    <BsFillPersonFill className="text-[24px]" />
                    <span className="profile-dash-item">Personal Info</span>
                  </div>
                }
                {...a11yProps(0)}
                sx={{
                  textAlign: "left", // Align the label to the left
                }}
              />
              <Tab
                label={
                  <div className="flex gap-[10px]">
                    <FaRegAddressCard className="text-[24px]" />
                    <span className="profile-dash-item">Address</span>
                  </div>
                }
                {...a11yProps(1)}
                sx={{
                  textAlign: "left", // Align the label to the left
                }}
              />
              <Tab
                label={
                  <div className="flex gap-[10px]">
                    <BsGlobe className="text-[24px]" />
                    <span className="profile-dash-item">My Domains</span>
                  </div>
                }
                {...a11yProps(2)}
                sx={{
                  textAlign: "left", // Align the label to the left
                }}
                onClick={() => setSelectedDomain(null)}
              />
              <Tab
                label={
                  <div className="flex gap-[10px]">
                    <BsGlobe className="text-[24px]" />
                    <span className="profile-dash-item">My Activity</span>
                  </div>
                }
                {...a11yProps(3)}
                sx={{
                  textAlign: "left", // Align the label to the left
                }}
                onClick={() => setSelectedDomain(null)}
              />
            </Tabs>
            <TabPanel value={value} index={0} className="tab-content-custom">
              <div className="profile-info-part">
                <img
                  src={person}
                  alt="Person"
                  className="profile-person-image text-center"
                />
                <h1 className="profile-name">
                  {loginUser.firstName} {loginUser.lastName}{" "}
                </h1>
                <h1 className="title-sub1">
                  User Name:{" "}
                  <span className="!text-black actual-address">
                    {loginUser.username}
                  </span>
                </h1>
                <h1 className="title-sub1">
                  Email id:
                  <span className="actual-address !text-black">
                    {" "}
                    {loginUser.email_id}
                  </span>
                </h1>
              </div>
              <br />
              <br />
              {/* <FAQAccord /> */}
            </TabPanel>
            <TabPanel value={value} index={1} className="tab-content-custom">
              <div className="info-part">
                <img
                  src={address}
                  alt="Person"
                  className="person-image text-center"
                />
                <h1>
                  <span className="paragraph !text-black">
                    Mobile Number :
                    <span className="actual-address">
                      {" "}
                      {loginUser.mobile_number}
                    </span>
                  </span>
                </h1>
                <h1 className="paragraph !text-black">
                  <span className="">
                    PAN :
                    <span className="actual-address"> {loginUser.PAN}</span>
                  </span>
                </h1>
                <h1 className="paragraph !text-black">
                  Account Created at :
                  <span className="actual-address">
                    {" "}
                    {new Date(loginUser.createdAt).toLocaleDateString()}&nbsp;
                    {new Date(loginUser.createdAt)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .toUpperCase()}
                  </span>
                </h1>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} className="tab-content-custom">
              {selectedDomain ? (
                // Display selected domain details when selectedDomain is not null
                <DomainDetails
                  domain={selectedDomain}
                  onClose={() => setSelectedDomain(null)}
                />
              ) : (
                // Otherwise, show the list of domains

                <div className="domains-view-part">
                  {" "}
                  <div className="view-buttons">
                    <button
                      onClick={handleGrid}
                      className={`view-button ${view ? "active-view" : ""}`}
                    >
                      <BsFillGrid3X3GapFill />
                    </button>
                    <button
                      onClick={handleList}
                      className={`view-button ${view ? "" : "active-view"}`}
                    >
                      <FaListUl />
                    </button>
                  </div>
                  {view ? (
                    <div className="domains-part">
                      {domainInfo && domainInfo.length > 0 ? (
                        domainInfo.map((domain, index) => (
                          <div className="domain-part" key={index}>
                            <div className="domain-info">
                              <h1 className="domain-name-current ">
                                {domain?.websiteName || "Unknown Name"}
                              </h1>
                              <div className="flex justify-between align-items-center">
                                <h1>
                                  Expires on:{" "}
                                  {domain
                                    ? new Date(
                                        domain.expirationDate
                                      ).toLocaleDateString()
                                    : "Unknown Date"}
                                </h1>
                                <button
                                  onClick={() => {
                                    setSelectedDomain(domain);
                                  }}
                                  className="manage-btn"
                                >
                                  Manage
                                </button>
                              </div>
                              <p className="domain-status">
                                {domain?.status || "Unknown Status"}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div>
                          <p className="paragraph mb-[20px] !text-black">
                            <span className="inline-block ">
                              <MdOutlineError className="mt-[8px] text-[24px] text-[red] !mb-[-6px] mr-[5px]" />
                            </span>
                            It seems you do not own any domains.
                          </p>
                          <Link to="/featured" className="red-btn">
                            Bid/Buy a domain
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="domains-part">
                      {domainInfo && domainInfo.length > 0 ? (
                        domainInfo.map((domain, index) => (
                          <div className="w-full">
                            {!isMobile ? (
                              <div className="list-part" key={index}>
                                <h1 className="list-item-name">
                                  {domain?.websiteName || "Unknown Name"}
                                </h1>

                                <h1 className="list-item-expiry">
                                  Expires on:{" "}
                                  {domain
                                    ? new Date(
                                        domain.expirationDate
                                      ).toLocaleDateString()
                                    : "Unknown Date"}
                                </h1>
                                <p className="list-item-status">
                                  <span>
                                    {domain?.status || "Unknown Status"}
                                  </span>
                                </p>
                                <button
                                  onClick={() => {
                                    setSelectedDomain(domain);
                                  }}
                                  className="list-item-btn "
                                >
                                  <span className="manage-btn">Manage</span>
                                </button>
                              </div>
                            ) : (
                              <div className="list-part-mobile" key={index}>
                                <div className="flex justify-between">
                                  <h1 className="list-item-name">
                                    {domain?.websiteName || "Unknown Name"}
                                  </h1>
                                  <p className="list-item-status">
                                    <span>
                                      {domain?.status || "Unknown Status"}
                                    </span>
                                  </p>
                                </div>
                                <div className="flex justify-between">
                                  <h1 className="list-item-expiry">
                                    Expires on:{" "}
                                    <span className="expiry-date-mobile">
                                      {domain
                                        ? new Date(
                                            domain.expirationDate
                                          ).toLocaleDateString()
                                        : "Unknown Date"}
                                    </span>
                                  </h1>
                                  <button
                                    onClick={() => {
                                      setSelectedDomain(domain);
                                    }}
                                    className="list-item-btn "
                                  >
                                    <span className="manage-btn">Manage</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div>
                          <p className="paragraph mb-[20px] !text-black">
                            <span className="inline-block ">
                              <MdOutlineError className="mt-[8px] text-[24px] text-[red] !mb-[-6px] mr-[5px]" />
                            </span>
                            It seems you do not own any domains.
                          </p>
                          <Link to="/featured" className="red-btn">
                            Bid/Buy a domain
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </TabPanel>
            <TabPanel value={value} index={3} className="tab-content-custom">
              User Activity
            </TabPanel>
          </Box>
        )}
      </div>
      {/* <ContactSec /> */}
    </div>
  );
}

export default Profile;
