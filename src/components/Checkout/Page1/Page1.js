import { borderRadius, fontWeight } from "@mui/system";
import React from "react";
import "./Page1.css";

const Page1 = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center page1-width"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form className="measure">
        <h2 className="Checkout-page-heading heading text-white">
          Welcome to Domohost payment system.
        </h2>
        <p
          style={{ color: "white", margin: "5px 0px 20px 0px" }}
          class="paragraph"
        >
          Let's start with some basic details to move forward with your
          purchase.
        </p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1 heading-sub"
              htmlFor="full-name"
              style={{ textAlign: "left", color: "white" }}
            >
              Full Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100 login-signup-input"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="Your Full Name"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#AAAAAA",
                borderRadius: "6px",
                fontFamily: "Open Sans",
                marginTop: "10px",
              }}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1 heading-sub"
              htmlFor="display-name"
              style={{ textAlign: "left", color: "white" }}
            >
              Display Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100 login-signup-input"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="Your Display Name"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#AAAAAA",
                borderRadius: "6px",
                fontFamily: "Open Sans",
                marginTop: "10px",
              }}
            />
          </div>
        </fieldset>
        <div>
          <button
            className="custom-btn main-button mt-[30px]"
            style={{
              borderBottomColor: "black",
              borderBottomWidth: "2px",
              width: "100%",
              backgroundColor: "#fbcb04",
              color: "white",
              borderRadius: "10px",
              fontWeight: "500",
            }}
            type="submit"
            value="Create Workspace"
            onClick={() => onButtonClick("pagetwo")}
          >
            Move Forward ⇾
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page1;
