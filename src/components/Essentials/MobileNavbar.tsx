import { useState } from "react";
import { FaBars, FaStar, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Cart from "../Shop/Cart";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <div className="logo">logo</div>
        <div className="nav-icons">
          <Cart />
          <FaStar className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>
      <div className={`mobile-nav-links ${isMenuOpen ? "show" : ""}`}>
        <ul className="nav-links d-flex flex-column align-self-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
