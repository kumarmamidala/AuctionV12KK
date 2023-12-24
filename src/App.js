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

import TermsPage from "./pages/TermsPage";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <div>
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
