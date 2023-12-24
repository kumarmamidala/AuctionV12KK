// PAGES
import Home from "./pages/Home";
import Post from "./pages/PostaBid";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";
import Search from "./pages/Search";
// COMPONENTS
import TopBar from "./components/TopBar";
// STYLES
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
// OTHER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Featured from "./pages/Featured";
import SellDomains from "./pages/SellDomains";
import Support from "./pages/Support";

import AuctionAppraisals from "./pages/AuctionAppraisals";
import BrokerageService from "./pages/BrokerageService";
import { useLayoutEffect, useState } from "react";
import Gold from "./pages/Gold";

import ListaDomain from "./pages/ListaDomain";
import PostaBid from "./pages/PostaBid";
import ProductDetail from "./components/Products/ProductDetail";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";

import hero_bg from "./components/Hero/media/darkblue-bg.jpg";
import purple_bg from "./components/Hero/media/purple-bg.jpg";
import green_bg from "./components/Hero/media/darkgreen.jpg";
import default_bg from "./components/Hero/media/default.jpg";
import TermsPage from "./pages/TermsPage";

function App() {
  const [selectedPalette, setSelectedPalette] = useState("default");

  const applyColorPalette = (palette) => {
    const root = document.documentElement;

    switch (palette) {
      case "default":
        root.style.setProperty("--text", "black");
        root.style.setProperty("--text-white", "white");
        root.style.setProperty("--text-gold", "#fbcb04");
        root.style.setProperty("--text-primary", "#25cbd3");
        root.style.setProperty("--primary-bg", "#25cbd3");
        root.style.setProperty("--secondary-bg", "#cae9ff");
        root.style.setProperty("--tertiary-bg", "#f0eeee");
        root.style.setProperty("--white-bg", "white");
        root.style.setProperty("--black-bg", "black");
        root.style.setProperty("--primary-btn", "#ea094b");
        root.style.setProperty("--secondary-btn", "#25cbd3");
        root.style.setProperty("--default-image", `url(${default_bg})`);
        break;
      case "purple":
        root.style.setProperty("--text", "black");
        root.style.setProperty("--text-white", "white");
        root.style.setProperty("--text-gold", "#fbcb04");
        root.style.setProperty("--text-primary", "#9e32d8");
        root.style.setProperty("--primary-bg", "#551289");
        root.style.setProperty("--secondary-bg", "#f3e6ff");
        root.style.setProperty("--tertiary-bg", "#e9d1ff");
        root.style.setProperty("--white-bg", "white");
        root.style.setProperty("--black-bg", "black");
        root.style.setProperty("--primary-btn", "#551289");
        root.style.setProperty("--secondary-btn", "#001f3f");
        root.style.setProperty("--default-image", `url(${purple_bg})`);
        break;
      case "blue":
        root.style.setProperty("--text", "black");
        root.style.setProperty("--text-white", "white");
        root.style.setProperty("--text-gold", "#fbcb04");
        root.style.setProperty("--text-primary", "#2153ac");
        root.style.setProperty("--primary-bg", "#2153ac");
        root.style.setProperty("--secondary-bg", "#dceefd");
        root.style.setProperty("--tertiary-bg", "#eff8ff");
        root.style.setProperty("--white-bg", "white");
        root.style.setProperty("--black-bg", "black");
        root.style.setProperty("--primary-btn", "#2153ac");
        root.style.setProperty("--secondary-btn", "#95d2fb");
        root.style.setProperty("--default-image", `url(${hero_bg})`);
        break;
      case "green":
        root.style.setProperty("--text", "black");
        root.style.setProperty("--text-white", "white");
        root.style.setProperty("--text-gold", "#fbcb04");
        root.style.setProperty("--text-primary", "#87bba2");
        root.style.setProperty("--primary-bg", "#87bba2");
        root.style.setProperty("--secondary-bg", "#f4f9f6");
        root.style.setProperty("--tertiary-bg", "#f4f9f6");
        root.style.setProperty("--white-bg", "white");
        root.style.setProperty("--black-bg", "black");
        root.style.setProperty("--primary-btn", "#87bba2");
        root.style.setProperty("--secondary-btn", "#c9e4ca");
        root.style.setProperty("--default-image", `url(${green_bg})`);
        break;
      default:
        break;
    }
  };
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <div>
      <div className="palettes">
        <button
          onClick={() => {
            setSelectedPalette("default");
            applyColorPalette("default");
          }}
          className="default-main app-btn"
        >
          Default
        </button>
        <button
          onClick={() => {
            setSelectedPalette("purple");
            applyColorPalette("purple");
          }}
          className="purple-main app-btn"
        >
          Purple
        </button>
        <button
          onClick={() => {
            setSelectedPalette("blue");
            applyColorPalette("blue");
          }}
          className="blue-main app-btn"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setSelectedPalette("green");
            applyColorPalette("green");
          }}
          className="green-main app-btn"
        >
          Green
        </button>

        {/* Your website content goes here */}
      </div>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListaDomain" element={<ListaDomain />} />

            <Route path="/AuctionAppraisals" element={<AuctionAppraisals />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/SellDomains" element={<SellDomains />} />
            <Route path="/BrokerageService" element={<BrokerageService />} />
            <Route path="/GoldDomain" element={<Gold />} />
            <Route path="/Help" element={<Support />} />
            <Route path="/PostaBid" element={<PostaBid />} />
            <Route path="/Marketplace/:productId" element={<ProductDetail />} />
            {/* this is just for preview bid */}
            {/* and this is for form bid */}

            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Register />} />
            <Route exact path="/Checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route path="/Terms" element={<TermsPage />} />
          </Routes>
        </Wrapper>{" "}
      </Router>
    </div>
  );
}

export default App;
