import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchProduct.css";

const SearchProduct = () => {
  const [domain, setDomain] = useState("");
  const [domainValue, setDomainValue] = useState("");

  const calculateDomainValue = (e) => {
    e.preventDefault();

    // Extract only the middle part of the domain name, omitting www, https, and specific extensions
    const cleanedDomain = domain.replace(
      /(https?:\/\/)?(?:www\.)?([^/\s]+)\.([^/\s]+\..*|com|gold|in|net|org|tech|gift).*$/i,
      "$2"
    );

    // Calculate domain value based on the length
    const domainLength = cleanedDomain.length;
    let value = "";

    if (domainLength == 1) {
      value = "2,99,49,325";
      console.log(cleanedDomain, domainLength);
    } else if (domainLength > 1 && domainLength <= 3) {
      value = "1,19,459";
      console.log(cleanedDomain, domainLength);
    } else if (domainLength > 3 && domainLength <= 5) {
      value = "14,356";
      console.log(cleanedDomain, domainLength);
    } else if (domainLength > 5 && domainLength <= 8) {
      value = "8,549";
      console.log(cleanedDomain, domainLength);
    } else {
      value = "999";
      console.log(cleanedDomain, domainLength);
    }

    setDomainValue(value);
  };

  const handleInputChange = (e) => {
    setDomain(e.target.value);
    if (e.target.value === "") {
      setDomainValue("");
    }
  };

  return (
    <div className="productSearchbar">
      <form className="productSearchbox" onSubmit={calculateDomainValue}>
        <input
          type="text"
          search="search"
          name="search"
          id="search"
          placeholder="Enter your domain name"
          value={domain}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-submit">
          Submit
        </button>
      </form>
      {domainValue && (
        <p className="domainValue paragraph text-center mt-[20px]">
          Your Approximate Domain Value is :{" "}
          <span className="text-main text-[28px] font-bold">
            Rs.{domainValue}
          </span>
          <br />
          Please{" "}
          <Link to="/Help" className="text-main">
            <span className="text-pent">contact us</span>
          </Link>{" "}
          for a detailed analysis of your domain name.
        </p>
      )}
    </div>
  );
};

export default SearchProduct;
