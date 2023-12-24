import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IndexCheckout from "../components/Checkout/Index";
import TopBar from "../components/TopBar";
import { AuthContext } from "../Context/AuthContextProvider";

function CheckoutPage() {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/Login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="checkout-part">
      {isAuth ? (
        <div>
          <TopBar />
          <IndexCheckout />
        </div>
      ) : null}
    </div>
  );
}

export default CheckoutPage;
