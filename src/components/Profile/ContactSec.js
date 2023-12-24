import React from "react";
import { Link } from "react-router-dom";

function ContactSec() {
  return (
    <div className=" profile-contact-sec">
      <div className="flex text-center justify-center relative">
        <h1 className="title !text-[25px] text-center flex items-center">
          Need help? We're always here for you.
        </h1>
        <button className="Profile-help-button">
          <Link to="/Contact">Go to Help Page</Link>
        </button>
      </div>
    </div>
  );
}

export default ContactSec;
