import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext.jsx";

// import Artify from "../../assets";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-articles"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          onClick={() => setMenu("Login")}
          className={menu === "Login" ? "active" : ""}
        >
          Login
        </a>
        <a
          href=""
          onClick={() => setMenu("More")}
          className={menu === "More" ? "active" : ""}
        >
          More
        </a>
        <a
          href="footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img className="search" src={assets.search} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img className="cart" src={assets.cart} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign-In</button>
      </div>
    </div>
  );
};
export default NavBar;
