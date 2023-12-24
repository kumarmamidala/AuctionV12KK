import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";
import "./Page4.css";

const Page4 = () => {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const PostData = (productId, owner) => {
    const requestData = {
      productId: productId,
      owner: owner,
    };

    axios
      .post("http:///sam/doc/products/Allocateproductsuser", requestData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Order Succesful");
    navigate("/profile");
  };

  return (
    <div>
      <div
        className="mw5 bg-transparent pa2-ns mt5 dib page4-width"
        style={{
          maxWidth: "40%",
          height: "60%",
          margin: "auto",
          marginTop: "60px",
          marginBottom: "180px",
        }}
      >
        <div className="center">
          <h3 className="Checkout-page-heading heading text-white">
            Congratulations, User!
          </h3>
        </div>
        <p
          style={{ color: "white", margin: "5px 0px 20px 0px" }}
          class="paragraph"
        >
          You have now completed the purchase process successfully and own -
          example.gold.
          <br />
          All the best for your future endeavours.
        </p>
        <button
          className="custom-btn main-button"
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
          onClick={() => PostData(loginUser.username)}
          value="Launch Eden"
        >
          Launch Now!
        </button>
      </div>
    </div>
  );
};

export default Page4;
