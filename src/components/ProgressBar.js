// ProgressBar.js
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: "4px",
        backgroundColor: "#fbcb04", // You can customize the color
        zIndex: 9999,
      }}
    />
  );
};

export default ProgressBar;
