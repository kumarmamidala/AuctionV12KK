import { BorderBottom } from "@mui/icons-material";
import React, { useState } from "react";
import "./Page3.css";

const Page3 = ({ onButtonClick }) => {
  const [singleUser, setSingleUser] = useState(false);

  const onClickSingleUser = () => {
    setSingleUser((prevSingleUser) => !prevSingleUser);
  };

  const [multiUser, setMultiUser] = useState(false);

  const onClickMultiUser = () => {
    setMultiUser((prevMultiUser) => !prevMultiUser);
  };

  return (
    <main
      className="pt5 black-80 page3-width flex flex-col"
      style={{
        maxWidth: "40%",
        maxHeight: "30%",
        margin: "auto",
        marginTop: "60px",
        marginBottom: "60px",
      }}
    >
      <h2 className="Checkout-page-heading heading text-white">
        How are you planning to use{" "}
        <span class="text-[#fbcb04]">example.gold?</span>
      </h2>
      <p style={{ color: "white", marginBottom: "20px" }} class="paragraph">
        We'll streamline your setup experience accordingly.
      </p>
      <div
        className="center ph4 selectionDiv"
        style={{ width: "80%", height: "80%" }}
      >
        <div
          className="mw5 bg-transparent br3 pa3 mv3 ba dib b--black-10 ma3 clicked heading-small"
          style={{ borderColor: singleUser ? "#664DE5" : "#EAEEF5" }}
          onClick={onClickSingleUser}
        >
          <h1
            className="f4 pl2 pr2 heading-sub"
            style={{
              color: "white",
              marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            For myshop
          </h1>
          <p
            className="paragraph"
            style={{ color: "white", marginBottom: "20px" }}
          >
            You can use your example.gold for creating a brand for yourself
            within no time.
          </p>
        </div>
        <div
          className="mw5 bg-transparent br3 pa3 mv3 ba dib b--black-10 ma3 clicked"
          style={{ borderColor: multiUser ? "#664DE5" : "#EAEEF5" }}
          onClick={onClickMultiUser}
        >
          <h1
            className="f4 pl2 pr2 heading-sub"
            style={{
              color: "white",
              marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            With my community
          </h1>
          <p
            className="lh-copy  f6 black-70 pl2 pr2 desc paragraph"
            style={{ color: "white", marginBottom: "20px" }}
          >
            With example.gold, Not only you, your entire community can get
            benefitted.
          </p>
        </div>
      </div>
      <button
        className="custom-btn main-button "
        style={{
          borderBottomColor: "black",
          borderBottomWidth: "2px",
          width: "100%",
          backgroundColor: "#fbcb04",
          color: "white",
          borderRadius: "10px",
          fontWeight: "500",
          // padding: '10px 0px',
        }}
        type="submit"
        value="Create Workspace"
        onClick={() => onButtonClick("pagefour")}
      >
        Move Forward ⇾
      </button>
    </main>
  );
};

export default Page3;
