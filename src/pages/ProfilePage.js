import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroOther from "../components/HeroOther/HeroOther";
import ContactSec from "../components/Profile/ContactSec";
import Profile from "../components/Profile/Profile";
import TopBar from "../components/TopBar";
import { AuthContext } from "../Context/AuthContextProvider";
import background from "./../components/Hero/media/Two4.png";
import Footerr from "../components/Footerr/Footerr";

function ProfilePage() {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/Login");
    }
  }, [isAuth, navigate]);

  return (
    <div>
      {isAuth ? (
        <div>
          <TopBar />
          <div className="hero-profile">
            {/* <HeroOther
              title="Profile Information"
              background_image={background}
            />
            <Profile /> */}
            <Profile />
          </div>
          <ContactSec />
          <Footerr />
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePage;
