import React from "react";
import "./Page2.css";

const Page2 = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center page2-width"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form className="measure">
        <h2 className="Checkout-page-heading heading text-white">
          Let's set up a workspace for all your needs.
        </h2>
        <p
          style={{ color: "white", margin: "5px 0px 20px 0px" }}
          class="paragraph"
        >
          You can always modify your workspace settings later.
        </p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="left db lh-copy f6 mb1 heading-sub"
              htmlFor="workspace-name"
              style={{ textAlign: "left", color: "white" }}
            >
              Workspace Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100 login-signup-input"
              type="text"
              name="workspace-name"
              id="workspace-name"
              size="30"
              placeholder="Your Workspace name"
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
              htmlFor="workspace-url"
              style={{ textAlign: "left", color: "white" }}
            >
              Workspace URL
              <span className="ml1" style={{ color: "#C0C0C0" }}>
                {" "}
                (optional)
              </span>
            </label>
            <div className="center urlButton br2 mt1">
              <button className="drop-btn urlInput f6 br2 ph2 pv2 !text-black">
                www.example.gold/
              </button>
              <input
                className="f6 ph3 pv2 dib br2 black w-100 login-signup-input"
                type="url"
                name="workspace-url"
                id="workspace-url"
                placeholder="Your URL"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#AAAAAA",
                  borderRadius: "6px",
                  fontFamily: "Open Sans",
                }}
              />
            </div>
          </div>
        </fieldset>
        <div className="">
          <button
            className="custom-btn main-button mt-[30px]"
            style={{
              borderBottomWidth: "2px",
              borderBottomColor: "black",

              width: "100%",
              backgroundColor: "#fbcb04",
              color: "white",
              borderRadius: "10px",
              fontWeight: "500",
            }}
            type="submit"
            value="Create Workspace"
            onClick={() => onButtonClick("pagethree")}
          >
            Move Forward ⇾
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page2;
