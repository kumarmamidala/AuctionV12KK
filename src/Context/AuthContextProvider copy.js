import React from "react";
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

  let loginme = async (data) => {
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
        localStorage.setItem("isAuth", JSON.stringify(true));
        localStorage.setItem("loginUser", JSON.stringify(user));
        toast.success("Login successful");
        setTimeout(resetState, 60 * 60 * 1000); // reset state after 1 hour
      } else {
        toast.error("Provide correct login details");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in");
    }
  };

  let logoutme = () => {
    resetState();
  };

  let getData = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, loginme, logoutme, getData, loginUser }}
    >
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
}
