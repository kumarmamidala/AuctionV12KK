import React from "react";
import "./ContactArea.css";
import ContactForm from "./ContactForm";

import contact1 from "./media/icon5.png";
import contact2 from "./media/icon6.png";
import contact3 from "./media/icon7.png";

import { BsGlobe } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

const ContactArea = (props) => {
  return (
    <section
      className={`wpo-contact-area section-padding ${props.contactclass}`}
    >
      <div className="wpo-wpo-contact-form-map">
        <div className="container container1">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 class="title-gold text-center !text-white">Let’s Talk</h2>
            </div>
          </div>
          <div className="row">
            <div className="co-lg-12   col-12">
              <div className="row">
                <div className="col col-lg-8 col-md-12 col-12">
                  <div className="wpo-contact-form">
                    <h2 class="title-sub">Get In Touch</h2>
                    <ContactForm />
                  </div>
                </div>
                <div className="col col-lg-4 col-md-12 col-12 place-items-center">
                  <div className="wpo-contact-info">
                    <div className="info-item">
                      <h2 class="heading">
                        {" "}
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://goo.gl/maps/QHTRwVP3jNkuCcFS9"
                          className="heading"
                        >
                          Address
                        </a>
                      </h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <BsGlobe
                            style={{
                              fontSize: "80px",
                              marginLeft: "6px",
                              marginTop: "3px",
                            }}
                            className="text-primary"
                          />
                        </div>
                        <div className="info-text paragraph ">
                          <span>
                            <a
                              href="https://goo.gl/maps/QHTRwVP3jNkuCcFS9"
                              target="_blank"
                            >
                              KU-X Road Hanamkonda
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="info-item">
                      <h2 class="heading">
                        {" "}
                        <a
                          style={{ textDecoration: "none" }}
                          href="mailto:mary_splvd@yahoo.com "
                          className="heading"
                        >
                          Mail
                        </a>
                      </h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <HiOutlineMail
                            style={{
                              fontSize: "80px",
                              marginLeft: "6px",
                              marginTop: "3px",
                            }}
                            className="text-primary"
                          />
                        </div>
                        <div className="info-text paragraph !text-black">
                          <span>
                            <a
                              href="mailto:mary_splvd@yahoo.com"
                              target="_blank"
                            >
                              admin@auction.gold
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="info-item">
                      <h2 class="heading">
                        <a
                          style={{ textDecoration: "none" }}
                          href="tel:919581430505"
                          className="heading"
                        >
                          Phone
                        </a>
                      </h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <BiSupport
                            style={{
                              fontSize: "80px",
                              marginLeft: "6px",
                              marginTop: "3px",
                            }}
                            className="text-primary"
                          />
                        </div>
                        <div className="info-text paragraph !text-black">
                          <span>
                            <a href="tel:919581430505" target="_blank">
                              +919581430505
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
