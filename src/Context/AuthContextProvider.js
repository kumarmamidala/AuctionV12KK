import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, SetAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [loginUser, setLoginUser] = useState(
    JSON.parse(localStorage.getItem("loginUser")) || {}
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const resetState = () => {
    SetAuth(false);
    setLoginUser({});
    setUser([]);
    localStorage.setItem("isAuth", JSON.stringify(false));
    localStorage.removeItem("loginUser");
    localStorage.removeItem("user");
  };

  const loginme = async (data) => {
    try {
      const response = await fetch(
        "https://auctionapi.shop/sam/doc/users/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const user = await response.json();
        setLoginUser(user);
        SetAuth(true);
        const loginTime = new Date().getTime();
        console.log("Loggedin Time:", loginTime);
        localStorage.setItem("loginTime", JSON.stringify(loginTime));
        localStorage.setItem("isAuth", JSON.stringify(true));
        localStorage.setItem("loginUser", JSON.stringify(user));
        toast.success("Login successful");
        setTimeout(resetState, 60 * 60 * 1000);
      } else {
        toast.error("Provide correct login details");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in");
    }
  };

  const logoutme = () => {
    resetState();
  };

  const getData = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  useEffect(() => {
    const savedLoginTime = JSON.parse(localStorage.getItem("loginTime"));
    if (isAuth && savedLoginTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - savedLoginTime;
      const remainingTime = 5 * 60 * 1000 - elapsedTime;

      if (remainingTime > 0) {
        setTimeout(resetState, remainingTime);
      } else {
        resetState();
      }
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ isAuth, loginme, logoutme, getData, loginUser }}
    >
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
}
