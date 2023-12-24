import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { FaSearch } from "react-icons/fa";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozq0wsk",
        "template_o4ry2s5",
        form.current,
        "kZEG_9K6u6lZxrYuE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join md:p-8" id="join-us">
      <div className="left-j">
        <h1 class="title !text-center !text-black">
          Get the domain you really want!
        </h1>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_email"
            placeholder="Enter your Domain Name"
            class="w-[60%] py-[20px]"
          />
          <div class="hire-icon">
            {" "}
            <FaSearch />
          </div>

          <button className="join-btn custom-btn main-button">
            Hire a Broker
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
